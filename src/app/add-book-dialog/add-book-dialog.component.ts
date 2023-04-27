import { Component, OnDestroy } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { BookService } from 'src/shared/services';
import { MatDialogRef } from '@angular/material/dialog';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-add-book-dialog',
  templateUrl: './add-book-dialog.component.html',
  styleUrls: ['./add-book-dialog.component.scss'],
})
export class AddBookDialogComponent implements OnDestroy {
  private urlRegex =
    /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/;

  form = this.formBuilder.group({
    title: ['', Validators.required],
    author: ['', Validators.required],
    category: ['', Validators.required],
    coverImageUrl: [
      '',
      [Validators.required, Validators.pattern(this.urlRegex)],
    ],
    description: ['', Validators.required],
  });

  private subscription = new Subject();

  constructor(
    private formBuilder: FormBuilder,
    private bookService: BookService,
    private dialogRef: MatDialogRef<AddBookDialogComponent>
  ) {}

  ngOnDestroy(): void {
    this.subscription.complete();
  }

  onSubmit() {
    const { title, author, category, coverImageUrl, description } =
      this.form.value;

    this.bookService
      .addBook({
        id: Date.now(),
        title: title!,
        author: author!,
        category: category?.toLocaleUpperCase()!,
        coverImageUrl: coverImageUrl!,
        description: description!,
      })
      .pipe(takeUntil(this.subscription))
      .subscribe((addedBook) => {
        this.dialogRef.close({ data: addedBook });
      });
  }
}
