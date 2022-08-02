// ./services/books.service.ts

import Book from '../interfaces/book.interface';
import BookModel from '../models/book.model';
import connection from '../models/connection';

class BookService {
  public model: BookModel;

  constructor() {
    this.model = new BookModel(connection);
  }

  public async getAll(): Promise<Book[]> {
    const books = await this.model.getAll();
    return books;
  }
}

export default BookService;