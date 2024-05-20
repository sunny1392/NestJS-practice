import { Controller, Get, Post, UseGuards } from "@nestjs/common";
import { BookGuard } from "./book.guard";

@Controller('book')
export class BookController {
    @Get('/findAll')
   // @UseGuards(new BookGuard())
    findAllBook():string{
        return"this api will return all books"
    }
    @Post('/add')
    addbook():string{
        return "this will add book"
    }
}