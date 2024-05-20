import { Injectable, UnauthorizedException } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport"
import { Strategy } from "passport-local"
import { User } from "src/users/users.entity";
import { UserService } from "src/users/users.service"

@Injectable()

export class LocalStrategy extends PassportStrategy(Strategy) {
    constructor(private readonly userService : UserService) {
        super();
    }
    validate(userName : string , password : string) : User{
        const user : User = this.userService.getUserByUsername(userName);
        if(userName == undefined) throw new UnauthorizedException();
        if(user!=undefined && user.password == password){
            return user;
        }else{
            throw new UnauthorizedException();
        }
    }

}