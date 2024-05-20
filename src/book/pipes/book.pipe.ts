import { ArgumentMetadata, BadRequestException, PipeTransform } from "@nestjs/common";
import { BookDto } from "../dto/book.dto";
import { plainToInstance } from "class-transformer";
import { validate } from "class-validator";

export class BookPipe implements PipeTransform{
   async transform(value: any, metadata: ArgumentMetadata) {
       /* if(value.id ==1) return value
        else throw new BadRequestException('Validation failed');
        return value.id ==1;*/

        //class transformer obj convert class
        const bookClass = plainToInstance(BookDto , value)
        //class validation
        const errors = await validate(bookClass);
        if(errors.length>0)
            throw new BadRequestException("validation failed" + JSON.stringify(errors))
        

        console.log(value , typeof(value));
        return value;
    }
    
}