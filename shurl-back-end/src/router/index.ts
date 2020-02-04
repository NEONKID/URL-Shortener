import Router from "koa-router";

import { Context } from "koa";

const router = new Router();

router.get("/check", (ctx: Context) => {
    console.log("avoiding cold start...");
    ctx.body = {
        version: "1.0.0",
        origin: ctx.origin,
        env: process.env.NODE_ENV
    };
});

export default router;
