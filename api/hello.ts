import { Application } from "https://deno.land/x/oak@v9.0.0/mod.ts";


const app = new Application();

app.use((ctx) => {
    const statusData = {
        message: "App is running smoothly",
        status: "OK"
      };;
    ctx.response.status = 200; // Statuscode 200 für Erfolg
    ctx.response.body = statusData; // Statusinformationen zurückgeben
});


export default app.handle;