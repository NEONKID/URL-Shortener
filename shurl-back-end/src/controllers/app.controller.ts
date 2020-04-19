import { Controller, Get, Param, Redirect } from '@nestjs/common';
import { ApiBody, ApiResponse, ApiParam } from '@nestjs/swagger';

import * as dotenv from 'dotenv';

import { AppService } from '../services/app.service';
import { dotEnvOptions } from '../config/dotenv.options';
import { UrlService } from '../services/url/url.service';

dotenv.config(dotEnvOptions);

@Controller()
export class AppController {
    constructor(private readonly appService: AppService, private readonly urlService: UrlService) {}

    @ApiResponse({ status: 301, description: 'Redirect Main Page' })
    @Get()
    @Redirect(process.env.MAIN_URL, 301)
    getHello() {}

    @ApiBody({ type: String, description: 'Encoded ID' })
    @ApiResponse({ status: 302, description: 'Redirect original site' })
    @Get(':id')
    @Redirect(process.env.MAIN_URL, 302)
    public async redirectSite(@Param('id') id: string) {
        const origin = await this.urlService.getOrigin(id);
        return { url: origin };
    }
}
