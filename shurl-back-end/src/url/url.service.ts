import { Injectable } from '@nestjs/common';
import { URLRepository } from './url.repositroy';
import { Register, UrlInfo } from './url.type';

import * as base62 from 'base62';

@Injectable()
export class UrlService {
    constructor(private readonly urlRepository: URLRepository) {}

    public async addUrl(register: Register): Promise<UrlInfo> {
        // 일단 로우 하나 만드는 작업 (?)
        const registerUrl = this.urlRepository.create();

        // origin 칼럼에 url 입력
        registerUrl.origin = register.url;

        const url = await this.urlRepository.save(registerUrl);

        const urlInfo: UrlInfo = {
            enUrl: base62.encode(url.id),
        };

        return urlInfo;
    }
}
