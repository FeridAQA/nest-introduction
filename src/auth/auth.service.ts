import { UserService } from "src/user/user.service";
import { RegisterUserDto } from "./dto/register-user.dto";

export class AuthService {
    constructor(
        private userService: UserService,
    ){}


    login(username: string, password: string) {
    }

    register(params:RegisterUserDto) {

        
    }

}