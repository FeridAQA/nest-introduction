import { Body, Controller, Delete, Get, Param, Post, UseGuards } from '@nestjs/common';
import { ProductService } from './product.service';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { AuthGuard } from 'src/guard/auth.guard';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';

@Controller('product')
@ApiTags('product')
export class ProductController {
    constructor(
        private productService: ProductService
    ) { }

    @Get()
    list(){
        return this.productService.find()
    }

    @Get(":id")
    item(@Param("id") id: number) {
        return this.productService.findOne({where:{id}});
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
