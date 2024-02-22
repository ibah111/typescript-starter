import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import 'colors';
import {
  FastifyAdapter,
  NestFastifyApplication,
} from '@nestjs/platform-fastify';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { getSwaggerOptions, getSwaggerOptionsCustom } from './Utils/Swagger';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const node = process.env.NODE_ENV;

class bootstrapOptions {
  constructor() {
    this.adapter = new FastifyAdapter();
  }
  adapter: FastifyAdapter;
}

const opts = new bootstrapOptions();

async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    opts.adapter,
  );

  const config = new DocumentBuilder()
    .setTitle('Ts-Starter')
    .setDescription('Ts-Starter')
    .setVersion('1.0')
    .build();

  const document = SwaggerModule.createDocument(
    app,
    config,
    getSwaggerOptions(),
  );
  SwaggerModule.setup('docs', app, document, getSwaggerOptionsCustom());
  await app.listen(3000, '0.0.0.0');

  console.log(`Application is running on ${await app.getUrl()}/docs`);
}
bootstrap();
