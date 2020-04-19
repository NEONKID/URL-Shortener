import { Controller, Get } from '@nestjs/common';
import { ApiResponse } from '@nestjs/swagger';

import { ApiService } from '../../services/api.service';

@Controller()
export class ApiController {
    constructor(private readonly apiService: ApiService) {}

    @ApiResponse({ status: 200, description: 'API MAIN ENDPOINT' })
    @Get()
    sayHello() {
        return this.apiService.getHello();
    }
}
