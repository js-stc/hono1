import { Hono } from "hono";
const app = new Hono();

app.get("/", (ctx) => ctx.text("Hello world, this is Hono!!"));
app.get("/hello", (ctx) => ctx.text("Hello jeff, this is Hono!!"));

export default app;

app.get("/public/*", async (ctx) => {
  return await ctx.env.ASSETS.fetch(ctx.req.raw);
});
