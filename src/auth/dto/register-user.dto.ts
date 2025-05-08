import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";
import { IsEmail, Min, MinLength } from "class-validator";
import { LoginUserDto } from "./login-user.dto";

export class RegisterUserDto extends LoginUserDto {
    @Type()
    @MinLength(1)
    @ApiProperty({ description: "User first name" ,default: "John"})
    firstName: string;

    @Type()
    @MinLength(1)
    @ApiProperty({ description: "User last name" , default: "Doe"})
    lastName: string;


}