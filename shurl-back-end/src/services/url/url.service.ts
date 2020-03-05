import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import * as base62 from 'base62';

import { URLRepository } from '../../db/entities/url.repositroy';
import { Register, UrlInfo } from '../../models/url.type';
import { URL } from '../../db/entities/url.entity';

@Injectable()
export class UrlService {
    constructor(
        @InjectRepository(URL)
        private readonly urlRepository: URLRepository,
    ) {}

    public async getOrigin(id: string): Promise<string> {
        // Decode Shorten URL
        const decid = base62.decode(id);
        const url = await this.urlRepository.findOne(decid);
        return url.origin;
    }

    public async addUrl(register: Register): Promise<UrlInfo> {
        const registerUrl = this.urlRepository.create();
        registerUrl.origin = register.url;

        const url = await this.urlRepository.save(registerUrl);

        const urlInfo: UrlInfo = {
            enUrl: base62.encode(url.id),
        };

        return urlInfo;
    }

    getHello() {
        return "Hi i'm URL-Shortener URL API, Please Shortcut URL ID me";
    }
}
