// Helper function to get session without passing config every time
import {
  GetServerSidePropsContext,
  NextApiRequest,
  NextApiResponse,
} from "next";
import { AuthOptions, NextAuthOptions, getServerSession } from "next-auth";
// import GoogleProvider from "next-auth/providers/google";
// import { PrismaAdapter } from "@auth/prisma-adapter";
// import { PrismaClient } from "@prisma/client";
// import { Adapter } from "next-auth/adapters";

// https://next-auth.js.org/configuration/nextjs#getserversession
export function authServerSession(
  ...args:
    | [GetServerSidePropsContext["req"], GetServerSidePropsContext["res"]]
    | [NextApiRequest, NextApiResponse]
    | []
) {
  return getServerSession(...args, authOptions as AuthOptions);
}

// const prisma = new PrismaClient();

// if (!process.env.GOOGLE_CLIENT_ID || !process.env.GOOGLE_CLIENT_SECRET) {
//   throw new Error("Missing Google Client ID or Secret");
// }

export const authOptions: NextAuthOptions = {
  //adapter: PrismaAdapter(prisma) as Adapter,
  providers: [
    // GoogleProvider({
    //   clientId: process.env.GOOGLE_CLIENT_ID as string,
    //   clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    //   checks: ["none"],
    // }),

  ],

  session: { strategy: "jwt" },

  pages: {
    signIn: "/auth/login",
    signOut: "/",
  },

  callbacks: {
    async session({ user, session, token }) {
      //console.log("Auth:: session(): user", user, "session", session, "token", token);

      // Set user role and other properties in the session
      // session.user.role = token?.role || "User";
      // session.user.id = token.id;
      // session.user.token = token.jwt;
      return Promise.resolve(session);
    },

    async signIn({ user, account, profile }) {
      //console.log("Auth:: signIn(): user", user, "account", account, "profile", profile);
      return Promise.resolve(true);
    },

    async jwt({ token, user, account, profile }) {
      //console.log("Auth:: jwt: account", account, "profile", profile, "user", user, "token", token);

      // Logic to set user role based on email or other criteria
      // if (!token.role) {
      //   const userData = await prisma.user.findFirst({
      //     where: { email: token.email },
      //   });

      //   token.role = userData?.role;
      // }

      return Promise.resolve(token);
    },
  },
  events: {
    async signIn(message) {
      console.log("Auth:: events:: signIn(): message", message);
      if (message.isNewUser && message.user.email) {
        console.log(
          "Auth:: events:: signIn(): New user signed in - setting default role of User"
        );

        // Uncomment the following lines to update the user role in the database
        // await prisma.user.update({
        //   where: { email: message.user.email },
        //   data: {
        //     role:
        //       message.user.email === "workspace@liarelieftrust.org"
        //         ? "Administrator"
        //         : "User",
        //   },
        // });
      }
    },
  },
  secret: process.env.NEXTAUTH_SECRET as string,
  //debug: process.env.NODE_ENV === 'development',
};
