import { Controller, Get } from '@nestjs/common';
import { ApiService } from '../../services/api.service';

@Controller()
export class ApiController {
    constructor(private readonly apiService: ApiService) {}

    @Get()
    sayHello() {
        return this.apiService.getHello();
    }
}
