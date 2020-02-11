import * as dotenv from 'dotenv';
import * as fs from 'fs';
import * as Joi from '@hapi/joi';

import { Injectable } from '@nestjs/common';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';

interface IEnvConfigInterface {
    [key: string]: any;
}

@Injectable()
export class ConfigService {
    private readonly envConfig: IEnvConfigInterface;

    constructor(filePath: string) {
        const config = dotenv.parse(fs.readFileSync(filePath));
        this.envConfig = this.validateInput(config);

        console.log(this.getTypeORMConfig());
    }

    // Test Method
    public getTypeORMConfig(): TypeOrmModuleOptions {
        const entitiesPath = `${this.envConfig.TYPEORM_ENTITIES}`;
        const migrationPath = `${this.envConfig.TYPEORM_MIGRATIONS}`;
        const type: any = this.envConfig.TYPEORM_CONNECTION;

        return {
            type,
            host: this.envConfig.TYPEORM_HOST,
            username: this.envConfig.TYPEORM_USERNAME,
            password: this.envConfig.TYPEORM_PASSWORD,
            database: this.envConfig.TYPEORM_DATABASE,
            port: Number.parseInt(this.envConfig.TYPEORM_PORT, 10),
            logging: this.envConfig.TYPEORM_LOGGING,
            entities: [entitiesPath],
            migrations: [migrationPath],
            migrationsRun: this.envConfig.TYPEORM_MIGRATIONS_RUN,
            cli: {
                migrationsDir: 'db/migrations',
                entitiesDir: 'db/entities',
            },
        };
    }

    private validateInput(envConfig: IEnvConfigInterface): IEnvConfigInterface {
        const envVarsSchema: Joi.ObjectSchema = Joi.object({
            NODE_ENV: Joi.string()
                .valid('dev', 'test', 'prod')
                .default('dev'),
            LISTEN_PORT: Joi.number().required(),
        }).unknown(true);

        const { error, value: validatedEnvConfig } = envVarsSchema.validate(envConfig);
        if (error) throw new Error(`Config validation error: ${error.message} `);

        return validatedEnvConfig;
    }
}
