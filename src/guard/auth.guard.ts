import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";


@Injectable()
export class AuthGuard implements CanActivate{

    constructor(private jwtService: JwtService) {}

    async canActivate(context: ExecutionContext ): Promise<boolean> {
        const request = context.switchToHttp().getRequest();

        let token = request.headers.authorization;

        if(!token){
            throw new UnauthorizedException();
        }
         
        token = token.split(' ')[1];
        let payload = await this.jwtService.verify(token);
        
        if(!payload){
            throw new UnauthorizedException();
        }
        request.userId = payload.userId;
        return true;
    }
}