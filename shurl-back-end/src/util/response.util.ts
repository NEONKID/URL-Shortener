import { ApiProperty } from '@nestjs/swagger';

export class Response {
    @ApiProperty()
    data: any | any[];

    @ApiProperty()
    code: number;

    constructor(message: ResponseMessage) {
        this.data = message.Data;
        this.code = message.Code;
    }
}

export class ResponseMessage {
    @ApiProperty()
    private data: any | any[]; // RESPONSE DATA

    @ApiProperty()
    private code: number; // RESPONSE CODE

    public success(): ResponseMessage {
        this.code = 1;
        return this;
    }

    public error(code: number, message: string = 'Error'): ResponseMessage {
        this.code = code;
        this.data = message;
        return this;
    }

    public body(data: any | any[] = ''): ResponseMessage {
        this.data = data;
        return this;
    }

    get Data(): any | any[] {
        return this.data;
    }

    get Code(): number {
        return this.code;
    }

    public build(): Response {
        return new Response(this);
    }
}
