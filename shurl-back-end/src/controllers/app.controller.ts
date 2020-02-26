import { Controller, Get, Param, Redirect } from '@nestjs/common';
import * as dotenv from 'dotenv';

import { AppService } from '../services/app.service';
import { dotEnvOptions } from 'src/config/dotenv.options';
import { UrlService } from 'src/services/url/url.service';

dotenv.config(dotEnvOptions);

@Controller()
export class AppController {
    constructor(private readonly appService: AppService, private readonly urlService: UrlService) {}

    @Get()
    @Redirect(process.env.MAIN_URL, 301)
    getHello() {}

    // 재구현 필요함
    @Get(':id')
    @Redirect(process.env.MAIN_URL, 302)
    public async redirectSite(@Param('id') id: string) {
        const origin = await this.urlService.getOrigin(id);
        return { url: origin };
    }
}
