import { Component } from '@angular/core';
import { Book } from 'src/core/models';
import { BookService } from 'src/shared/services';
import { MatDialog } from '@angular/material/dialog';
import { AddBookDialogComponent } from '../add-book-dialog/add-book-dialog.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss'],
})
export class BookListComponent {
  books: Book[] = [];
  categories: string[] = [];
  all = 'ALL';
  selectedCategory = this.all;

  constructor(private bookService: BookService, private matDialog: MatDialog, private router: Router) {
    this.getAllBooks();
    this.getCategories();
  }

  openAddBookDialog() {
    const dialogRef = this.matDialog.open(AddBookDialogComponent, {
      height: '420px',
      width: '600px',
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
      this.bookService.getBooksByCategoryId(category).subscribe((books) => {
        this.books = books;
      });
    }
  }

  navigateToDetail(book: Book) {
    this.router.navigate(['book-detail', {data:  JSON.stringify(book)}]);
  }

  private getCategories() {
    this.bookService.getCategories().subscribe((categories: string[]) => {
      this.categories = categories;
    });
  }

  private getAllBooks() {
    this.bookService.getBooks().subscribe((books: Book[]) => {
      this.books = books;
    });
  }
}
