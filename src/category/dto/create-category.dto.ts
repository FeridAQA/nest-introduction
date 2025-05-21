import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";
import { IsString } from "class-validator";

export class CreateCategoryDto {
    @Type()
    @ApiProperty()
    @IsString()
    name: string;
}