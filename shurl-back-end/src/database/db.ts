import { Sequelize } from "sequelize-typescript";

const { POSTGRES_HOST, POSTGRES_USER, POSTGRES_PW } = process.env;

const db = new Sequelize("mydb", "postgres", "vhtmxm1!", {
    host: "127.0.0.1",
    dialect: "postgres",
    define: {
        underscored: true
    },
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    },
    models: [__dirname + "/models"]
});

export default db;
