import { Module } from '@nestjs/common';
import { UrlService } from '../services/url.service';
import { UrlController } from '../controllers/url.controller';
import { TypeOrmModule } from '@nestjs/typeorm';

import { URLRepository } from '../db/entities/url.repositroy';

@Module({
    imports: [TypeOrmModule.forFeature([URLRepository])],
    providers: [UrlService],
    controllers: [UrlController],
})
export class UrlModule {}
