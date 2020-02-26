import { Injectable } from '@nestjs/common';

@Injectable()
export class ApiService {
    getHello(): string {
        return 'This is URL-Shortener API';
    }
}
