import { auth } from "@/app/lib/auth/auth";
import { toNextJsHandler } from "better-auth/next-js";

const handler = toNextJsHandler(auth);

export async function GET(req: Request) {
  return handler.GET ? handler.GET(req) : new Response(null, { status: 405 });
}

export async function POST(req: Request) {
  return handler.POST ? handler.POST(req) : new Response(null, { status: 405 });
}
