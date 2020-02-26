import { Injectable, NestMiddleware } from '@nestjs/common';
import { Response } from './util/response.util';

@Injectable()
export class LoggerMiddleware implements NestMiddleware<Request, Response> {
    use(req: Request, res: Response, next: Function) {
        console.log(LoggerMiddleware.name, ':', '{ Request Path ->', req.url, ' }');
        next();
    }
}
