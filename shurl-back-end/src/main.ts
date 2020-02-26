import { NestFactory } from '@nestjs/core';
import * as dotenv from 'dotenv';

import { AppModule } from './modules/app.module';
import { dotEnvOptions } from './config/dotenv.options';

dotenv.config(dotEnvOptions);

async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    app.enableCors({
        origin: process.env.MAIN_URL,
        methods: 'GET, HEAD, PUT, PATCH, POST, DELETE',
    });
    await app.listen(process.env.LISTEN_PORT || 1412);
}
bootstrap();
