import { Controller, Get, Req, UseGuards } from '@nestjs/common';
import { ProfilService } from './profil.service';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { AuthGuard } from 'src/guard/auth.guard';

@Controller('profil')
@ApiTags('profil')
@ApiBearerAuth()
export class ProfilController {
    constructor(
        private profilService: ProfilService
    ) { }

    @Get()
    @UseGuards(AuthGuard)
    myProfil(@Req() req: any) {
        return this.profilService.findOne(req.userId);
    }
}
