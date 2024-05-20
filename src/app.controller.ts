import { Controller, Post, Req, Res, UseInterceptors } from "@nestjs/common";
import { AppInterceptor } from "./app.interceptor";
import { Request , Response } from "express";

@Controller('app')

export class AppController {
    @Post('')
    @UseInterceptors(AppInterceptor)
    /*helloWorld(@Req() req : Request , @Res() res : Response):any{
       //return res.json(req.body)
       return res.send("this is the response")
    }*/
    helloWorld(): any{
        return "this is the response"
    }

}