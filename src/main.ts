import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { join } from 'path';
import { NestExpressApplication } from '@nestjs/platform-express';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  const port = parseInt(process.env.PORT, 10) || 3003;

  app.useGlobalPipes(new ValidationPipe());

  // Use express methodOverride middleware
  app.use((req, res, next) => {
    if (req.method === 'POST' && req.query._method) {
      req.method = req.query._method.toUpperCase();
      delete req.query._method;
    }
    next();
  });

  app.useStaticAssets(join(__dirname, '..', 'public'));
  app.setBaseViewsDir(join(__dirname, '..', 'views'));
  app.setViewEngine('ejs');

  await app.listen(port, () => {
    console.log(`Server is running on localhost:3003`);
  });
}

bootstrap();
