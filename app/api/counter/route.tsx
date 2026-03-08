import { Redis } from "@upstash/redis";

const redis = Redis.fromEnv();

export async function GET() {
  const count = (await redis.get("count")) ?? 0;
  return Response.json({ count });
}

export async function POST() {
  const count = await redis.incr("count");
  return Response.json({ count });
}