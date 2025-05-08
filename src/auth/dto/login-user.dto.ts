import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";
import { IsEmail, MinLength } from "class-validator";

export class LoginUserDto {
     @Type()
        @IsEmail()
        @ApiProperty({ description: "User email" , default: "Jonedoe@gmail.com"})
        email: string;
    
        @Type()
        @MinLength(6)
        @ApiProperty({ description: "User password", default: "123456" })
        password: string;
}