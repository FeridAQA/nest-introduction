import { Injectable } from "@nestjs/common";
import { UserService } from "src/user/user.service";
import { RegisterUserDto } from "./dto/register-user.dto";


@Injectable()
export class AuthService {
    constructor(
        private userService: UserService,
    ) { }


    login(username: string, password: string) {
    }

    async register(params: RegisterUserDto) {
        let user = await this.userService.create(params);
        return user;
    }

}