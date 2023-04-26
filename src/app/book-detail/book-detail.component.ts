import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Book } from 'src/core/models';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.scss']
})
export class BookDetailComponent {
  book: Book | any;

  constructor( private route: ActivatedRoute) {
    this.getParams();
  }

  private getParams() {
    this.book = JSON.parse(this.route.snapshot.params['data']);
  }
}
