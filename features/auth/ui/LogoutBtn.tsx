"use client";
import { authClient } from "@/app/lib/auth/auth-client";
import { Button } from "@/shared/lib/shadCN/components/ui/button";
import { useRouter } from "next/navigation";

const LogoutBtn = () => {
  const router = useRouter();

  const handleLogin = () =>
    authClient.signOut({
      fetchOptions: {
        onSuccess: () => {
          router.push("/");
        },
      },
    });

  return (
    <Button
      variant="outline"
      className="hidden sm:inline-flex rounded-full"
      onClick={handleLogin}
    >
      Sign Out
    </Button>
  );
};

export { LogoutBtn };
