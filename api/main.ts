import { serve } from "https://deno.land/std@0.202.0/http/server.ts";

export default async function handler(req: Request) {
  const url = new URL(req.url);
  return new Response(`Hello from Deno! You visited: ${url.pathname}`, {
    headers: { "Content-Type": "text/plain" },
  });
}