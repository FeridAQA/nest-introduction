import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {

    getHello(): any {
        return {
            message: "Welcome to Ecommerce API",
            api: "http://localhost:3002/api"
        };
    }

}
