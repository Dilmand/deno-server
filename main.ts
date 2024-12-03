import { serve } from "https://deno.land/std@0.202.0/http/server.ts";

const handler = (request: Request): Response => {
  const url = new URL(request.url);
  return new Response(`Hello, you visited: ${url.pathname}`, {
    headers: { "content-type": "text/plain" },
  });
};

console.log("Server is running on http://localhost:8000");
await serve(handler, { port: 8000 });