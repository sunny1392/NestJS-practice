import { Controller, Get, Post, UseGuards , Request } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from './auth/auth.service';
import { json } from 'express';
import { RoleGuard } from './role.guard';
import { CONSTANTS } from './constants';

// 1-issue the id card jwt token
@Controller('app')
export class AppController {
  constructor(private readonly authService:AuthService) {

  }
 

  @Post('/login')
  @UseGuards(AuthGuard('local'))
  login(@Request() req): string {

    //authentication complete
    //next step authorize
    //id card jwt token

    return this.authService.generateToken(req.user);


    return req.user
  }

  @Get('/web-developer')
  @UseGuards(AuthGuard('jwt') , new RoleGuard(CONSTANTS.ROLES.WEB_DEVELOPER))
  getWebDeveloper(@Request() req):string{
    return " this is web developer" + JSON.stringify(req.user)
  }

  @Get('/android-developer')
  @UseGuards(AuthGuard('jwt') , new RoleGuard(CONSTANTS.ROLES.ANDROID_DEVELOPER))
  getAndroidDeveloper(@Request() req):string{
    return " this is Android developer" + JSON.stringify(req.user)
  }
}
