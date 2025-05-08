import { Body, Controller, Post } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { ApiTags } from "@nestjs/swagger";
import { RegisterUserDto } from "./dto/register-user.dto";
import { LoginUserDto } from "./dto/login-user.dto";

@Controller('auth')

@ApiTags('auth') 
export class AuthController {
   constructor(private authService:AuthService) { }



    @Post("login")
    loginController(
        @Body() body:LoginUserDto
        
    ){
        return this.authService.login(body);
    }


    @Post("register")
    registerController(
        @Body() body: RegisterUserDto
    ){
        return this.authService.register(body);
    }
    
}