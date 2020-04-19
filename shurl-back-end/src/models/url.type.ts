import { ApiProperty } from '@nestjs/swagger';

export class Register {
    @ApiProperty({ type: String })
    readonly url: string;
}

export class UrlInfo {
    @ApiProperty({ type: String })
    readonly enUrl: string;
}
