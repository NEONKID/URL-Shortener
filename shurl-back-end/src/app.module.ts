import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UrlModule } from './modules/url.module';
import { ConfigModule } from './modules/config.module';

@Module({
    imports: [TypeOrmModule.forRoot(), ConfigModule, UrlModule],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}
