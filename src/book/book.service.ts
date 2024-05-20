import { Injectable } from "@nestjs/common";
import { Book } from "./data/book.dto";
import { v4 as uuidv4 } from 'uuid';



@Injectable()
export class BookService {
public books : Book[] = [];

//add book
addBookService(book:Book) : string {
    // id auto generate
    book.id = uuidv4();

    this.books.push(book);
    return "Book has been sucessfully added";
}

//update book

updateBookService(book:Book): string {
    let index = this.books.findIndex((currentBook)=>{
        return currentBook.id == book.id;

    })
    this.books[index] = book;
    return "Book has been successfully updated";
}

//delete book
deleteBookService(bookid : string) : string {
    this.books = this.books.filter(()=>{
        return bookid != bookid;
    })
    return "Book has been deleted";

}
//find allbooks
findAllBooks():Book[]{
    return this.books;
}
}