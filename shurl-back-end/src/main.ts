import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as dotenv from 'dotenv';

import { dotEnvOptions } from './config/dotenv.options';
dotenv.config(dotEnvOptions);

async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    app.setGlobalPrefix('/api');
    await app.listen(process.env.HTTP_PORT || 1412);
}
bootstrap();
