import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RouterModule, Routes } from 'nest-router';

import { AppController } from '../controllers/app.controller';
import { AppService } from '../services/app.service';
import { UrlModule } from './url.module';
import { ConfigModule } from './config.module';
import { LoggerMiddleware } from '../logger.middleware';
import { ApiModule } from './api.module';

const routes: Routes = [
    {
        path: 'api',
        module: ApiModule,
        children: [
            {
                path: 'url',
                module: UrlModule,
            },
        ],
    },
];

@Module({
    imports: [TypeOrmModule.forRoot(), RouterModule.forRoutes(routes), ConfigModule, ApiModule, UrlModule],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule implements NestModule {
    configure(consumer: MiddlewareConsumer) {
        consumer.apply(LoggerMiddleware).forRoutes('/');
    }
}
