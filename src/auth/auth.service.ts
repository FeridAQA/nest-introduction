import { Injectable, NotFoundException } from "@nestjs/common";
import { UserService } from "src/user/user.service";
import { RegisterUserDto } from "./dto/register-user.dto";
import * as bcrypt from "bcrypt";
import { stat } from "fs";
import { LoginUserDto } from "./dto/login-user.dto";

@Injectable()
export class AuthService {
    constructor(
        private userService: UserService,
    ) { }


   async login(body:LoginUserDto) {
        let user = await this.userService.findOne({ email:body.email},
            ["password","id","firstName"]
        );
        if (!user) {
            throw new NotFoundException("login or password is incorrect");
        }


        let isMatch=await bcrypt.compare(body.password, user.password);
        if(!isMatch){
            throw new NotFoundException("login or password is incorrect");
        }

        delete user.password;
        user.firstName="senin ne isin var burda";
        return {
            status: true,
            message: "login success",
            user
        }
    }

    async register(params: RegisterUserDto) {
        let user = await this.userService.create(params);
        return user;
    }

}