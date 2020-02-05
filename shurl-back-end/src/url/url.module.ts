import { Module } from '@nestjs/common';
import { UrlService } from './url.service';
import { UrlController } from './url.controller';
import { TypeOrmModule } from '@nestjs/typeorm';

import { URLRepository } from './url.repositroy';

@Module({
    imports: [TypeOrmModule.forFeature([URLRepository])],
    providers: [UrlService],
    controllers: [UrlController],
})
export class UrlModule {}
