import { Body, Controller, Delete, Get, Param, Post, UseGuards } from '@nestjs/common';
import { CategoryService } from './category.service';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { CreateCategoryDto } from './dto/create-category.dto';
import { AuthGuard } from 'src/guard/auth.guard';

@Controller('category')
@ApiTags('category')
export class CategoryController {
    constructor(
        private categoryService: CategoryService
    ) { }

    @Get()
    list() {
        return this.categoryService.find({relations: ["products"]});
    }

    @Get(":id")
    item(@Param("id") id: number) {
        return this.categoryService.findOne({ where: { id } });
    }

    @Post()
    @UseGuards(AuthGuard)
    @ApiBearerAuth()
    create(@Body() body: CreateCategoryDto) {
        return this.categoryService.create(body);
    }


    @Delete(":id")
    @UseGuards(AuthGuard)
    @ApiBearerAuth()
    delete(@Param("id") id: number) {
        return this.categoryService.delete(id);
    }

}
