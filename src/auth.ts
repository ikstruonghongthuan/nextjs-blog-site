import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { authConfig } from "./auth.config";
import { z } from "zod";
import axios from "axios";

async function getToken(email: any, password: any) {
  try {
    // const token = await axios
    //   .post("http://localhost:3002/login", { email, password })
    //   .then((response) => response);
    // return token;
    if (email === "admin@mail.com" && password === "admin") {
      return { email, password, role: "admin" };
    }
    return null;
  } catch (error) {
    console.error("Failed to fetch user:", error);
    throw new Error("Failed to fetch user.");
  }
}

export const { auth, signIn, signOut } = NextAuth({
  ...authConfig,
  providers: [
    Credentials({
      async authorize(credentials) {
        console.log(
          "🚀 ~ file: auth.ts:32 ~ authorize ~ credentials:",
          credentials
        );

        const { email, password } = credentials;
        const user = await getToken(email, password);
        console.log("🚀 ~ file: auth.ts:39 ~ authorize ~ user:", user);
        if (!user) return null;
        return user;
      },
    }),
  ],
});
