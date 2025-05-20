import { Column, Entity, ManyToMany } from "typeorm";
import { CommonEntity } from "./Common.entity";
import { Catagory } from "./Category.entity";

@Entity()

export class Product  extends CommonEntity {
    @Column()
    name: number;
    
    @Column()
    price: number;

    @Column()
    description: string;

    @Column()
    image: string;

    @ManyToMany(() => Catagory, (catagory) => catagory.products)
    catagories:Catagory[]
}