import { NestFactory } from '@nestjs/core';
import * as dotenv from 'dotenv';
import * as fs from 'fs';

import { AppModule } from './modules/app.module';
import { dotEnvOptions } from './config/dotenv.options';

dotenv.config(dotEnvOptions);

async function bootstrap() {
    const httpsOptions = {
        key: fs.readFileSync(process.env.SSL_KEY_FILE),
        cert: fs.readFileSync(process.env.SSL_CERT_FILE),
    };

    const app = await NestFactory.create(AppModule, {
        httpsOptions,
    });

    app.enableCors({
        origin: process.env.MAIN_URL,
        methods: 'GET, HEAD, PUT, PATCH, POST, DELETE',
    });

    await app.listen(process.env.LISTEN_PORT || 1412);
}
bootstrap();
