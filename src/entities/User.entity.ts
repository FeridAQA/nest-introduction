import { BeforeInsert, Column, Entity } from "typeorm";
import { CommonEntity } from "./Common.entity";

import * as bcrypt from "bcrypt";


export type UserType = keyof User;


@Entity()
export class User extends CommonEntity {
    @Column()
    email: string;

    @Column({select: false})
    password: string;

    @Column()
    firstName: string;

    @Column()
    lastName: string;


    @BeforeInsert()
    async beforeInsert() {
        this.password = await bcrypt.hash(this.password, 10);
    }
 

}

 