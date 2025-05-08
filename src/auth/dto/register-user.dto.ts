import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";
import { IsEmail, Min, MinLength } from "class-validator";

export class RegisterUserDto {
    @Type()
    @IsEmail()
    @ApiProperty({ description: "User email" , default: "Jonedoe@gmail.com"})
    email: string;

    @Type()
    @MinLength(6)
    @ApiProperty({ description: "User password", default: "123456" })
    password: string;

    @Type()
    @MinLength(1)
    @ApiProperty({ description: "User first name" ,default: "John"})
    firstName: string;

    @Type()
    @MinLength(1)
    @ApiProperty({ description: "User last name" , default: "Doe"})
    lastName: string;


}