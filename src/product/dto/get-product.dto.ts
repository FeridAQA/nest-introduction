import { ApiProperty } from "@nestjs/swagger";
import { Transform, Type } from "class-transformer";
import { IsNumber, IsOptional, IsString } from "class-validator";

export class GetProductDto {
    @Type()
    @ApiProperty({default: "Product Name", required: false})
    @IsOptional()
    @IsString()
    name: string;

    @Type()
    @IsOptional()
    @IsNumber()
    @ApiProperty({default: 0, required: false})
    minPrice: number;

    @Type()
    @IsOptional()
    @IsNumber()
    @ApiProperty({default: 1000, required: false})
    maxPrice: number;



    @Type()
    @IsOptional()
    @ApiProperty({default: '1,2',required: false, type:[ Number], isArray: true})
    @Transform(({ value }) =>value && value.split(",") )
    categories?: number[];

    @Type()
    @IsOptional()
    @IsNumber()
    @ApiProperty({default: 10, required: false})
    limit: number ;

    @Type()
    @IsOptional()
    @IsNumber()
    @ApiProperty({default: 0, required: false})
    page: number;

    
}   