import { Module } from '@nestjs/common';
import { ProfilService } from './profil.service';
import { ProfilController } from './profil.controller';
import { Type } from 'class-transformer';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/entities/User.entity';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  providers: [ProfilService],
  controllers: [ProfilController],
  exports: [ProfilService],

})
export class ProfilModule {}
