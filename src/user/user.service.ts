import { ConflictException, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { User, UserType } from "src/entities/User.entity";
import { FindOptionsWhere, Repository } from "typeorm";

@Injectable()
export class UserService {

    constructor(
        @InjectRepository(User)
        private  userRepo:  Repository<User>,
    ){}

    find(where?: FindOptionsWhere<User>,select?: UserType[]){
        return this.userRepo.find({where,select});
    }

    findOne(where: FindOptionsWhere<User>,select?: UserType[]){
        return this.userRepo.findOne({where,select});
    }


    async  create(user: Partial<User>){
        let checkUser=await this.findOne({email:user.email});
        if(checkUser){
            throw new ConflictException("User already exists");
        }

        let newUser= this.userRepo.create(user);
        await newUser.save();
        return newUser;
    }

}