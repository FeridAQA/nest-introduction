import { Controller, Get, Param, Query } from "@nestjs/common";
import { AppService } from "./app.service";

@Controller()
export class AppController {

  constructor(private appService: AppService) { }

  @Get()
  getRoot(): string {
    return "Hello World!";
  }

  @Get('hello')
  getHello(): string {
    return "ooooo";
  }

  @Get('hello/:name')
  getHelloName(@Param("name") name: string): string {
    return `Hello ${name}`;
  }


  @Get('example/:name')
  example(@Param('name') name: string): string {
    return this.appService.example(name)
  }

  @Get('lang')
  dil(@Query('lang') lang: string) {
    return this.appService.dil(lang)
  }
}
