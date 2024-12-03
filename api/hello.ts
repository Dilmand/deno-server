import { Application, Context } from "https://deno.land/x/oak@v9.0.0/mod.ts";
import { statusRoutes } from "../routes/statusRoutes.ts";
import { userRoutes } from "../routes/userRoutes.ts";
import { movieRoutes } from "../routes/movieRoutes.ts";


const app = new Application();

app.use((ctx: Context) => {
    const statusData = {
        message: "App is running smoothly",
        status: "OK"
      };;
    ctx.response.status = 200; // Statuscode 200 für Erfolg
    ctx.response.body = statusData; // Statusinformationen zurückgeben
});

/*
app.use(statusRoutes.routes());
app.use(statusRoutes.allowedMethods());

app.use(userRoutes.routes());
app.use(userRoutes.allowedMethods());

app.use(movieRoutes.routes());
app.use(movieRoutes.allowedMethods());
*/


export default app.handle;