import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";
import { IsNumber, IsOptional, IsString, IsUrl, Min } from "class-validator";

export class CreateProductDto {
    @Type()
    @ApiProperty()
    @IsString()
    name: string;

    @Type()
    @ApiProperty()
    @IsNumber()
    @Min(0)
    price: number;
    
    @Type()
    @ApiProperty()
    @IsString()
    @IsOptional()
    description: string;


    @Type()
    @ApiProperty()
    @IsString()
    @IsUrl()
    image: string;

    @Type(() => Number)
    @ApiProperty({default: [1],type: Number ,isArray: true})
    @IsNumber({}, { each: true })
    @IsOptional()
    categories:number[]

}