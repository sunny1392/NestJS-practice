import { Injectable } from "@nestjs/common";
import { User } from "./users.entity";

import { CONSTANTS } from "src/constants";

@Injectable()
export class UserService {
    public users : User[] = [


        {
            username : "user1",
            password : "12345",
            email : "user1@gmail.com",
            age : 22,
            role : CONSTANTS.ROLES.ANDROID_DEVELOPER

        },

        {
            username : "user2",
            password : "123456",
            email : "user2@gmail.com",
            age : 21,
            role : CONSTANTS.ROLES.WEB_DEVELOPER

        },

        {
            username : "user3",
            password : "123457",
            email : "user3@gmail.com",
            age : 20,
            role : CONSTANTS.ROLES.WEB_DEVELOPER


        },

        {
            username : "user4",
            password : "123458",
            email : "user4@gmail.com",
            age : 24,
            role : CONSTANTS.ROLES.ANDROID_DEVELOPER

        },





    ];

    getUserByUsername(userName:string) :User{
        return this.users.find((User)=>User.username === userName);
    }

    
    
}