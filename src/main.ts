import { NestFactory } from '@nestjs/core';

import { AppModule } from './app.module';
import {
  DocumentBuilder,
  SwaggerModule,
} from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('Step to Ukraine API')
    .setDescription('The API description')
    .setVersion('1.0')
    .addServer('http://localhost:5000/')
    .addServer('http')
    .addBearerAuth(
      {
        type: 'http',
        scheme: 'bearer',
        bearerFormat: 'JWT',
        name: 'JWT',
        description: 'Enter JWT token',
        in: 'header',
      },
      'JWT-auth',
    )
    .build();
  const document = SwaggerModule.createDocument(
    app,
    config,
  );
  SwaggerModule.setup('docs', app, document);

  await app.listen(process.env.PORT || 5000);
  console.log(
    `Application is running on: ${await app.getUrl()}`,
  );
}
bootstrap();
