import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { TypeOrmModule } from "@nestjs/typeorm";

import { UserModule } from "./user/user.module";
import { AuthModule } from "./auth/auth.module";
import config from "./config/config";


@Module({
  imports: [
    // user module
     UserModule,

    // auth module
    AuthModule,

    // env consifg
    ConfigModule.forRoot(),

    // database config

    TypeOrmModule.forRoot({
        type: 'postgres',
        host: config.database.host,
        port: +config.database.port,
        username: config.database.username,
        password: config.database.password,
        database: config.database.database,
        entities: [__dirname + '/**/*.entity{.ts,.js}'],
        synchronize: true,
        logging: true,
      })

  ],
  controllers: [AppController],
  providers: [AppService],
  exports: [],
})

export class AppModule { }