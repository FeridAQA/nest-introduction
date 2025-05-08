import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";
import { IsEmail, Min, MinLength } from "class-validator";

export class RegisterUserDto {
    @Type()
    @IsEmail()
    @ApiProperty({ description: "User email" })
    email: string;

    @Type()
    @MinLength(6)
    @ApiProperty({ description: "User password" })
    password: string;

    @Type()
    @Min(1)
    @ApiProperty({ description: "User first name" })
    firstName: string;

    @Type()
    @Min(1)
    @ApiProperty({ description: "User last name" })
    lastName: string;
    

}