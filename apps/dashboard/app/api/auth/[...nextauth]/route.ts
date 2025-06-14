import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";

export const authOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),

    CredentialsProvider({
      id: "signup",
      name: "Sign Up",
      credentials: {
        name: { label: "Name", type: "text" },
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
        customerType: { label: "Customer Type", type: "text" },
      },
      async authorize(credentials) {
        const { name, email, password, customerType } = credentials as {
          name: string;
          email: string;
          password: string;
          customerType: string;
        };

        const res = await fetch(
          `${process.env.BACKEND_AUTH_URL}/users/register`,
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ name, email, password, customerType }),
          },
        );
        if (!res.ok) {
          const errorData = await res.json();
          throw new Error(errorData.message || "Signup failed");
        }
        console.log(res, "res");
        const userData = await res.json();

        console.log(userData, "userData");

        if (userData?.user && userData?.tokens) {
          return {
            id: userData.user.id,
            email: userData.user.email,
            name: userData.user.name,
            accessToken: userData.tokens.access_token,
            refreshToken: userData.tokens.refresh_token,
          };
        }
        return null;
      },
    }),

    CredentialsProvider({
      id: "login",
      name: "Log In",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        const { email, password } = credentials as {
          email: string;
          password: string;
        };
        const res = await fetch(`${process.env.BACKEND_AUTH_URL}/login`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email, password }),
        });
        if (!res.ok) {
          const errorData = await res.json();
          throw new Error(errorData.message || "Login failed");
        }
        const userData = await res.json();
        if (userData?.user && userData?.tokens) {
          return {
            id: userData.user.id,
            email: userData.user.email,
            name: userData.user.name,
            accessToken: userData.tokens.access_token,
            refreshToken: userData.tokens.refresh_token,
          };
        }
        return null;
      },
    }),
  ],

  session: { strategy: "jwt" },

  callbacks: {
    async jwt({ token, user, account }) {
      if (account && user) {
        token.sub = user.id;
        token.email = user.email as string;
        token.name = user.name as string;

        if ((user as unknown as { accessToken: string }).accessToken) {
          token.backendAccessToken = (
            user as unknown as { accessToken: string }
          ).accessToken;
        }
      }
      return token;
    },
    async session({ session, token }) {
      if (token) {
        session.user = {
          id: token.sub as string,
          email: token.email as string,
          name: token.name as string,
        };
        if (token.backendAccessToken) {
          session.accessToken = token.backendAccessToken as string;
        }
      }
      return session;
    },
  },

  secret: process.env.NEXTAUTH_SECRET,
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
