import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Product } from 'src/entities/Product.entity';
import { And, Between, ILike, In, LessThanOrEqual, MoreThan, MoreThanOrEqual, Repository } from 'typeorm';
import { FindProductParams } from './product.types';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { CategoryService } from 'src/category/category.service';

@Injectable()
export class ProductService {
    constructor(
        private categoryService: CategoryService,
        @InjectRepository(Product)
        private productRepo: Repository<Product>,
    ) { }

    async find({ where, select, relations, filter, pagination }: FindProductParams = {}) {

        where = where || {};
        if (filter) {
            if (filter.name) {
                where.name = ILike(`%${filter.name}%`);
            }
            if (filter.price) {
                const [min, max] = filter.price;
                let priceCondition = [];

                if (min > 0) {
                    priceCondition.push(MoreThanOrEqual(min));
                }
                if (max > 0) {
                    priceCondition.push(LessThanOrEqual(max));
                }
                if (priceCondition.length) {
                    where.price = And(...priceCondition);
                }

            }
            if (filter.categories) {
                where.categories = filter.categories.map(id => ({ id }));
            }
        }

        return this.productRepo.find(
            {
                where,
                select,
                relations,
                take: pagination?.limit || 10,
                skip: pagination && (pagination.page) * (pagination.limit ) ,
                order: {
                    createdAt: 'DESC', // Default ordering by id
                }
            }
        );
    }
    async findOne({ where, select, relations }: FindProductParams = {}) {
        return this.productRepo.findOne({ where, select, relations });
    }



    async create(params: CreateProductDto) {
        let categories = await this.categoryService.findByIds(params.categories);
        let product = this.productRepo.create({ ...params, categories });
        await product.save();
        return product;
    }


    async update(id: number, params: UpdateProductDto) {
        let product = await this.findOne({ where: { id } });
        for (let key in params) {
            if (key == "categories") {
                product.categories = await this.categoryService.findByIds(
                    params.categories
                )
            } else {
                product[key] = params[key]
            }
        }
        await product.save();
        return product;
    }

    async delete(id: number) {
        let result = await this.productRepo.delete(id);
        if (result.affected === 0) {
            throw new NotFoundException('Product not found');
        }
        return {
            message: 'Product deleted successfully',
            affected: result.affected,
        }
    }
}
