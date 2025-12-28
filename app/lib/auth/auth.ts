import { connectMongo } from "@/server/_utils/connect";
import { betterAuth } from "better-auth";
import { mongodbAdapter } from "better-auth/adapters/mongodb";
import { nextCookies } from "better-auth/next-js";
// import { client } from "@/db"; // your mongodb client

const client = await connectMongo();
const db = client.connection.getClient().db();

export const auth = betterAuth({
  database: mongodbAdapter(db, { client: db.client }),

  emailAndPassword: {
    enabled: true,
  },
  socialProviders: {
    github: {
      clientId: process.env.GITHUB_CLIENT_ID as string,
      clientSecret: process.env.GITHUB_CLIENT_SECRET as string,
    },
  },
  plugins: [nextCookies()],
});
