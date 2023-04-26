import { Component } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { BookService } from 'src/shared/services';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-book-dialog',
  templateUrl: './add-book-dialog.component.html',
  styleUrls: ['./add-book-dialog.component.scss'],
})
export class AddBookDialogComponent {
  form = this.formBuilder.group({
    title: ['', Validators.required],
    author: ['', Validators.required],
    category: ['', Validators.required],
    coverImageUrl: ['', Validators.required],
    description: ['', Validators.required],
  });

  constructor(
    private formBuilder: FormBuilder,
    private bookService: BookService,
    private dialogRef: MatDialogRef<AddBookDialogComponent>
  ) {}

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
      .subscribe((addedBook) => {
        this.dialogRef.close({ data: addedBook });
      });
  }
}
