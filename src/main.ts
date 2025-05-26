import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // validation 
   app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, // bilinməyən field-ləri atır
      forbidNonWhitelisted: true, // əlavə field-lərə icazə vermir
      transform: true, // tipi avtomatik çevirməyə çalışır
    }),
  );
  
  const config = new DocumentBuilder()
    .setTitle('Ecummerce API')
    .setDescription('The ecommerce API description')
    .setVersion('1.0')
    .addBearerAuth()
    .build();
  const documentFactory = () => SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, documentFactory);
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
