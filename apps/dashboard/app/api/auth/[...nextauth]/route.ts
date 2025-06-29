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

    CredentialsProvider({
      id: "login",
      name: "Log In",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
        loginOTP: { label: "Login OTP", type: "text" },
      },
      async authorize(credentials) {
        const { email, password, loginOTP } = credentials as {
          email: string;
          password: string;
          loginOTP?: string;
        };

        try {
          const res = await fetch(
            `${process.env.BACKEND_AUTH_URL}/auth/login`,
            {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: loginOTP
                ? JSON.stringify({ email, password, loginOTP })
                : JSON.stringify({ email, password }),
            },
          );

          const data = await res.json();

          if (res.ok && !data.tokens) {
            throw new Error("OTP_REQUIRED");
          }

          if (!res.ok) {
            throw new Error(data.message || "Login failed");
          }

          if (data && data?.tokens) {
            return {
              ...data,
              accessToken: data.tokens.access_token,
              refreshToken: data.tokens.refresh_token,
            };
          }

          return null;
        } catch (err) {
          throw new Error(err instanceof Error ? err.message : "Login failed");
        }
      },
    }),
  ],

  pages: {
    signIn: "/signin",
    signOut: "/signin",
  },

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
