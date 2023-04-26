import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Book } from 'src/core/models';


@Injectable({
  providedIn: 'root'
})
export class BookService {
  booksUrl = '/api/books';

  constructor(private http: HttpClient) {}

  getBooks() {
    return this.http.get<Array<Book>>(this.booksUrl);
  }

  addBook(book: Book) {
    return this.http.post('/api/book', book);
  }

  getCategories() {
    return this.http.get<Array<string>>('/api/categories');
  }

  getBooksByCategoryId(category: string) {
    return this.http.get<Array<Book>>(`${'/api/getBooksByCategoryId'}/${category}`);
  }
}
