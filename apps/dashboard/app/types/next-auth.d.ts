import { DefaultSession, DefaultUser } from "next-auth";
import { JWT as DefaultJWT } from "next-auth/jwt";

declare module "next-auth" {
  interface Session extends DefaultSession {
    userId: string;
    accessToken?: string;

    user: DefaultSession["user"] & {
      id: string;
      role?: string;
    };
  }

  interface User extends DefaultUser {
    role?: string;
  }
}

declare module "next-auth/jwt" {
  interface JWT extends DefaultJWT {
    userId: string;
    accessToken?: string;
    role?: string;
  }
}
