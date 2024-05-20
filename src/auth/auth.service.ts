import { Injectable } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { User } from "src/users/users.entity";



@Injectable()
export class AuthService {
    constructor(private readonly jwtService : JwtService) {}

    generateToken(payload : User){
        return this.jwtService.sign(payload)
    }
}