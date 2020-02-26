import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { UrlService } from '../services/url/url.service';
import { UrlController } from '../controllers/api/url/url.controller';
import { URLRepository } from '../db/entities/url.repositroy';

@Module({
    imports: [TypeOrmModule.forFeature([URLRepository])],
    providers: [UrlService],
    controllers: [UrlController],
    exports: [UrlService],
})
export class UrlModule {}
