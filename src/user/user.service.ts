import { Injectable } from "@nestjs/common";
import { UserEntity } from "./user.entity";

@Injectable()

export class UserService {
    public users : UserEntity[] = [
        
        
        {

            username : "sunny",
            password : "1234",
            email : "user@gmail.com"
        },

        {

            username : "sunny1",
            password : "12345",
            email : "user@gmail.com"
        },

        {

            username : "sunny3",
            password : "12346",
            email : "user@gmail.com"
        }

        



]
getUserByName(userName : string) : UserEntity{
    return this.users.find((UserEntity)=> UserEntity.username === userName)
}

}