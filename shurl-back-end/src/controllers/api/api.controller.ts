import { Controller, Get } from '@nestjs/common';
import { ApiService } from 'src/services/api.service';

@Controller()
export class ApiController {
    constructor(private readonly apiService: ApiService) {}

    @Get('/')
    sayHello() {
        this.apiService.getHello();
    }
}
