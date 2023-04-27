import { Component, OnDestroy } from '@angular/core';
import { Book } from 'src/core/models';
import { BookService } from 'src/shared/services';
import { MatDialog } from '@angular/material/dialog';
import { AddBookDialogComponent } from '../add-book-dialog/add-book-dialog.component';
import { Router } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss'],
})
export class BookListComponent implements OnDestroy {
  books: Book[] = [];
  categories: string[] = [];
  all = 'ALL';
  selectedCategory = this.all;
  showLoadingIndicator = false;

  private subscription = new Subject();

  constructor(
    private bookService: BookService,
    private router: Router,
    public matDialog: MatDialog
  ) {
    this.getAllBooks();
    this.getCategories();
  }

  ngOnDestroy(): void {
    this.subscription.complete();
  }

  openAddBookDialog() {
    const dialogRef = this.matDialog.open(AddBookDialogComponent, {
      height: '440px',
      width: '400px',
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.books.push(result.data);
        this.getCategories();
      }
    });
  }

  filterCategories(category: string) {
    if (category === this.all) {
      this.getAllBooks();
    } else {
      this.showLoadingIndicator = true;
      this.bookService
        .getBooksByCategoryId(category)
        .pipe(takeUntil(this.subscription))
        .subscribe(
          (books) => {
            this.books = books;
            this.showLoadingIndicator = false;
          },
          () => (this.showLoadingIndicator = false)
        );
    }
  }

  navigateToDetail(book: Book) {
    this.router.navigate(['book-detail', { data: JSON.stringify(book) }]);
  }

  private getCategories() {
    this.showLoadingIndicator = true;
    this.bookService
      .getCategories()
      .pipe(takeUntil(this.subscription))
      .subscribe(
        (categories: string[]) => {
          this.categories = categories;
          this.showLoadingIndicator = false;
        },
        () => (this.showLoadingIndicator = false)
      );
  }

  private getAllBooks() {
    this.showLoadingIndicator = true;
    this.bookService
      .getBooks()
      .pipe(takeUntil(this.subscription))
      .subscribe(
        (books: Book[]) => {
          this.books = books;
          this.showLoadingIndicator = false;
        },
        () => (this.showLoadingIndicator = false)
      );
  }
}
