import { CallHandler, ExecutionContext, NestInterceptor } from "@nestjs/common";

import { Observable, map } from "rxjs";
import { Request } from "express";

export class AppInterceptor implements NestInterceptor{
    intercept(context: ExecutionContext, next: CallHandler<any>): Observable<any>{
        /*console.log("this app interceptor")
        return next.handle();*/
        const ctx = context.switchToHttp();
        const request = ctx.getRequest<Request>();

        request.body.name = "this is the name"
        request.body.age = 22;
        return next.handle().pipe(map((data)=>{
            data = "from Interceptor"
            return data;

        }));

    }
    
}