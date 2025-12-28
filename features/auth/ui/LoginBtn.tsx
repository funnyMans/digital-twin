"use client";
import { authClient } from "@/app/lib/auth/auth-client";
import { Button } from "@/shared/lib/shadCN/components/ui/button";

const LoginBtn = () => {
  const handleLogin = () =>
    authClient.signIn.social({
      provider: "github",
      callbackURL: "/dashboard",
    });

  return (
    <Button
      variant="outline"
      className="hidden sm:inline-flex rounded-full"
      onClick={handleLogin}
    >
      Sign In
    </Button>
  );
};

export { LoginBtn };
