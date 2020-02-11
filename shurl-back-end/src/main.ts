import { NestFactory } from '@nestjs/core';
import * as dotenv from 'dotenv';

import { AppModule } from './app.module';
import { dotEnvOptions } from './config/dotenv.options';
dotenv.config(dotEnvOptions);

async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    app.setGlobalPrefix('/api');
    await app.listen(process.env.LISTEN_PORT || 1412);
}
bootstrap();
