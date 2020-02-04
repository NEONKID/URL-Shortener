import Koa from "koa";
import logger from "koa-logger";

import db from "./database/db";
import router from "./router";

class Server {
    private app: Koa;

    constructor() {
        this.app = new Koa();

        this.initDB();
        this.ensureDB();
        this.loadAPI();
    }

    initDB(): void {
        // 여기에 DB 설정을 초기화 하십시오.
        db.sync({ force: true }).then(
            () => {
                console.log("Syncronizing DB information...");
            },
            err => {
                console.error("Unable to connect to the DB: ", err);
            }
        );
    }

    ensureDB() {
        return new Promise((resolve, reject) => {
            let counter = 0;
            const tryConnect = async () => {
                try {
                    await db.authenticate();
                    resolve();
                } catch (e) {
                    counter++;
                    console.log(`db connection failed ${counter}`);
                    if (counter > 5) {
                        reject(new Error("Failed after 5 retries"));
                        return;
                    }
                    setTimeout(tryConnect, 10);
                }
            };
            tryConnect();
        });
    }

    loadAPI(): void {
        const { app } = this;

        app.use(logger());

        // DB 연결을 시도할 때는 반드시 비동기로,,
        // Socket 연결을 시도할 때는 사용자가 입력을 할 수 없음.
        app.use(async (ctx, next) => {
            try {
                await this.ensureDB();
                return next();
            } catch (e) {
                ctx.throw(e);
            }
        });
        app.use(router.routes()).use(router.allowedMethods());
    }

    listen(port: number): void {
        const { app } = this;
        app.listen(port);

        console.log("Listening Port: ", port);
    }
}

export default Server;
