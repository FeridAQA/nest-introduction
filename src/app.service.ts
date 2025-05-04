import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  example(name: string) {
    return `Hello ${name || ''}`;
  }

  dil(lang: string) {
    if (lang === "az") {
      return "Salam"
    } else if (lang === "en") {
      return "Hello"
    }
  }
}
