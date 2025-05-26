import { Body, Controller, Delete, Get, Param, Post, Query, UseGuards } from '@nestjs/common';
import { ProductService } from './product.service';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { AuthGuard } from 'src/guard/auth.guard';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { GetProductDto } from './dto/get-product.dto';

@Controller('product')
@ApiTags('product')
export class ProductController {
    constructor(
        private productService: ProductService
    ) { }

    @Get()
    list(@Query() query: GetProductDto) {
        let price:[number,number] =[query.minPrice, query.maxPrice];
        return this.productService.find(
            {
                relations: ["categories"],
                filter: {...query,price},
                pagination:{limit: query.limit, page: query.page}
            });
    }

    @Get(":id")
    item(@Param("id") id: number) {
        return this.productService.findOne(
            {
                where: { id },
                relations: ["categories"]
            }
        );
    }

    @Post()
    @UseGuards(AuthGuard)
    @ApiBearerAuth()
    create(@Body() body: CreateProductDto) {
        return this.productService.create(body);
    }

    @Post(":id")
    // @UseGuards(AuthGuard)
    update(@Param("id") id: number, @Body() body: UpdateProductDto) {
        return this.productService.update(id, body);
    }

    @Delete(":id")
    @UseGuards(AuthGuard)
    delete(@Param("id") id: number) {
        return this.productService.delete(id);
    }
}
