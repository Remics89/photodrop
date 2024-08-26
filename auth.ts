import NextAuth from "next-auth";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { Prisma } from "@prisma/client";

// third party OAuth providers
import Google from "next-auth/providers/google";

const config = {
    adapter: PrismaAdapter(Prisma)
}

export const { handlers, auth, signIn, signOut } = NextAuth(config);
