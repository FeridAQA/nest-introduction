import { Column, Entity, ManyToMany } from "typeorm";
import { CommonEntity } from "./Common.entity";
import { Category } from "./Category.entity";


export type ProductKey = keyof Product;

@Entity()
export class Product  extends CommonEntity {
    @Column()
    name: string;
    
    @Column()
    price: number;

    @Column()
    description: string;

    @Column()
    image: string;

    @ManyToMany(() => Category, (catagory) => catagory.products)
    categories:Partial<Category>[]
}