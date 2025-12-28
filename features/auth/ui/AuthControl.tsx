"use client";

import { authClient, useSession } from "@/app/lib/auth/auth-client";
import { LoginBtn } from "./LoginBtn";
import { UserMenu } from "@/shared/ui/user";
import { useRouter } from "next/navigation";

const AuthControl = () => {
  const session = useSession();
  const router = useRouter();
  const user = session.data?.user;

  const handleLogout = () => {
    authClient.signOut({
      fetchOptions: {
        onSuccess: () => {
          router.push("/");
        },
      },
    });
  };

  return user ? (
    <UserMenu
      user={{ name: user.name, email: user.email, image: user.image! }}
      handleClick={handleLogout}
    />
  ) : (
    <LoginBtn />
  );
};

export default AuthControl;
