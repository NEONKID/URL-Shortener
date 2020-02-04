import { Controller, Post, Body, Logger } from '@nestjs/common';

import { Response, ResponseMessage } from 'src/util/response.util';
import { UrlService } from './url.service';
import { Register, UrlInfo } from './url.type';
import { registerSchema } from './url.schema';

@Controller('url')
export class UrlController {
  constructor(private readonly urlService: UrlService) {}

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
