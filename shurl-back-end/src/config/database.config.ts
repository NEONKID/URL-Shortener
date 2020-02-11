import * as path from 'path';

const baseDir = path.join(__dirname, '../');
const entitiesPath = `${baseDir}${process.env.TYPEORM_ENTITIES}`;
const migrationPath = `${baseDir}${process.env.TYPEORM_MIGRATIONS}`;

export default {
    type: process.env.TYPEORM_CONNECTION,
    host: process.env.TYPEORM_HOST,
    username: process.env.TYPEORM_USERNAME,
    password: process.env.TYPEORM_PASSWORD,
    database: process.env.TYPEORM_DATABASE,
    port: Number.parseInt(process.env.TYPEORM_PORT, 10) || 5432,
    entities: [entitiesPath],
    migrations: [migrationPath],
    logging: true,
    synchronize: true,
    cli: {
        migrationsDir: 'src/db/migrations',
        entitiesDir: 'src/db/entities',
    },
};
