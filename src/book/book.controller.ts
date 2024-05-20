import { BadRequestException, Controller, Get, UseFilters } from "@nestjs/common";
import { BookException } from "./book.exception";
import { BookExceptionFilter } from "./book.exception.filter";

@Controller('book')
export class BookController {

    @UseFilters(BookExceptionFilter)
    @Get('')
    
    
    helloBookApi():string{
        //inbuilt exception
        /*throw new BadRequestException({
            status : 400,
            error : "This is my custom error message"
        })*/
        //custom exception
        //throw new BookException();

        throw new BadRequestException();
        return "this is the book api"
    }
}