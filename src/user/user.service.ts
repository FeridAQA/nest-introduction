import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { User, UserType } from "src/entities";
import { Repository } from "typeorm";

@Injectable()
export class UserService {

    constructor(
        @InjectRepository(User)
        private  userRepo:  Repository<User>,
    ){}

    find(where?: Partial<User>,select?: UserType[]){
        return this.userRepo.find({where,select});
    }

    findOne(where: Partial<User>,select?: UserType[]){
        return this.userRepo.findOne({where,select});
    }


    async create(user: Partial<User>){
        let newUser=await this.userRepo.save(user);
        return newUser;
    }

}