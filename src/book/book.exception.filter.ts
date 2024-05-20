import { ArgumentsHost, Catch, ExceptionFilter, HttpException } from "@nestjs/common";
import { timeStamp } from "console";
import { Request , Response } from "express";
import { url } from "inspector";


@Catch(HttpException)
export class BookExceptionFilter implements  ExceptionFilter{
    catch(exception: HttpException, host: ArgumentsHost): any {
        const context = host.switchToHttp();
        const request = context.getRequest<Request>();
        const response = context.getResponse<Response>();
        const status = exception.getStatus();

        response.status(status).json({
            statusCode : status,
            timeStamp : new Date().toISOString(),
            url : request.url,
            host : request.get("host")


        })
        
    }
    
}