const {v4: uuid} = require("uuid");
import { IBook } from "./Interfaces";

class Book {

}
abstract class BooksRepository{

    abstract createBook(book: Book):Book;
    abstract getBook(id: number): Book;
    abstract getBooks(): Book[];
    abstract updateBook(id:number): Book;
    abstract deleteBook(id:number): void;
}