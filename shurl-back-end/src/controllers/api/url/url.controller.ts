import { Controller, Post, Body, Logger, Get, Param } from '@nestjs/common';
import { ApiBody, ApiCreatedResponse, ApiResponse } from '@nestjs/swagger';

import { Response, ResponseMessage } from '../../../util/response.util';
import { UrlService } from '../../../services/url/url.service';
import { Register, UrlInfo } from '../../../models/url.type';
import { registerSchema } from '../../../models/url.schema';

@Controller()
export class UrlController {
    constructor(private readonly urlService: UrlService) {}

    @ApiResponse({ status: 200, description: 'URL API MAIN ENDPOINT' })
    @Get()
    public sayHello() {
        return this.urlService.getHello();
    }

    @ApiBody({ type: Register })
    @ApiCreatedResponse({ description: 'The Url Register successfully created' })
    @Post('register')
    public async addUrl(@Body() register: Register): Promise<Response> {
        try {
            const { error, value } = registerSchema.validate(register);

            if (error) {
                Logger.error(error);
                return new ResponseMessage()
                    .error(999)
                    .body('Parameter Error')
                    .build();
            }

            const url: UrlInfo = await this.urlService.addUrl(value);

            return new ResponseMessage()
                .success()
                .body(url)
                .build();
        } catch (err) {
            Logger.error(err);
        }
    }
}
