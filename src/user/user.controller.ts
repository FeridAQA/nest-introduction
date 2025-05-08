import { Controller, Get, Param } from "@nestjs/common";
import { UserService } from "./user.service";

@Controller('users')
export class UserController {
    constructor(private userservce:UserService){}

    @Get()
    list(){
        return this.userservce.find();
    }

    @Get(':id')
    getUser(@Param('id') id: number){
        return this.userservce.findOne({});
    }

    
}
