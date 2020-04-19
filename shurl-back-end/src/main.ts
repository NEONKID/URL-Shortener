import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

import * as dotenv from 'dotenv';
import * as fs from 'fs';

import { AppModule } from './modules/app.module';
import { dotEnvOptions } from './config/dotenv.options';

dotenv.config(dotEnvOptions);

async function bootstrap() {
    let httpsOptions = undefined;

    try {
        httpsOptions = {
            key: fs.readFileSync(process.env.SSL_KEY_FILE),
            cert: fs.readFileSync(process.env.SSL_CERT_FILE),
        };

        console.log('This App SSL enabled');
    } catch (err) {
        console.log('This App SSL not enabled');
    }

    const app =
        httpsOptions === undefined
            ? await NestFactory.create(AppModule, {})
            : await NestFactory.create(AppModule, { httpsOptions });

    app.enableCors({
        origin: process.env.MAIN_URL,
        methods: 'GET, HEAD, PUT, PATCH, POST, DELETE',
    });

    const options = new DocumentBuilder()
        .setTitle('URL-Shortener')
        .setDescription('This page is URL-Shortener API Documentation')
        .setVersion('1.0')
        .addTag('cats')
        .build();
    const document = SwaggerModule.createDocument(app, options);

    SwaggerModule.setup('doc', app, document);

    await app.listen(process.env.LISTEN_PORT || 1412);
}
bootstrap();
