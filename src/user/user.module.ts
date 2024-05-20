import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Module({})
export class UserModule {
    constructor(private readonly configService : ConfigService) {
        console.log("this for user module" + configService.get<Number>('PORT'))
        console.log("this for user module" + configService.get<boolean>('LOGGING'))
    }
}
