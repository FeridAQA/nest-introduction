import { Injectable, NotFoundException } from "@nestjs/common";
import { UserService } from "src/user/user.service";
import { RegisterUserDto } from "./dto/register-user.dto";
import * as bcrypt from "bcrypt";
import { stat } from "fs";
import { LoginUserDto } from "./dto/login-user.dto";
import { JwtService } from "@nestjs/jwt";

@Injectable()
export class AuthService {
    constructor(
        private userService: UserService,
        private jwtService: JwtService,
    ) { }


    async login(body: LoginUserDto) {
        let user = await this.userService.findOne({ email: body.email },
            ["password", "id",]
        );
        if (!user) {
            throw new NotFoundException("login or password is incorrect");
        }


        let isMatch = await bcrypt.compare(body.password, user.password);
        if (!isMatch) {
            throw new NotFoundException("login or password is incorrect");
        }

        delete user.password;

      let token=  this.jwtService.sign({ userId: user.id });

        return {
            status: true,
            message: "login success",
            token
        }
    }

    async register(params: RegisterUserDto) {
        let user = await this.userService.create(params);
        return user;
    }

}