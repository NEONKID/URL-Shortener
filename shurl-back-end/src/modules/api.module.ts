import { Module } from '@nestjs/common';
import { ApiController } from 'src/controllers/api/api.controller';
import { ApiService } from 'src/services/api.service';

@Module({
    controllers: [ApiController],
    providers: [ApiService],
})
export class ApiModule {}
