import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { CorsOptions } from '@nestjs/common/interfaces/external/cors-options.interface';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    forceCloseConnections: true,
  });

  const corsOptions: CorsOptions = {
    origin: 'http://localhost:3000', // Next.js 서버 주소
    methods: 'GET',
    allowedHeaders: 'Content-Type',
  };
  app.enableCors(corsOptions);
  app.enableShutdownHooks();
  await app.listen(3001);
  console.log(`Application is running on: ${await app.getUrl()}`);
}
bootstrap();
