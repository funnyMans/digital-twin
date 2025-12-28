"use server";

import { headers } from "next/headers";
import { auth } from "./app/lib/auth/auth";

const someAuthenticatedAction = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  return session;
};

const signIn = async () => {
  await auth.api.signInEmail({
    body: {
      email: "user@email.com",
      password: "password",
    },
  });
};

export { someAuthenticatedAction, signIn };
