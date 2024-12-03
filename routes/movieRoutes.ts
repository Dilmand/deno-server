import { Router } from "https://deno.land/x/oak@v9.0.0/mod.ts";
import { movieController } from "../controllers/movieController.ts";

const movieRoutes = new Router();

// Status Route
movieRoutes.get("/movie/:id", movieController.getMovie);

export { movieRoutes };
