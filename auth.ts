import NextAuth from "next-auth";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { Prisma } from "@prisma/client";
import CredentialsProvider from "next-auth/providers/credentials";

// third party OAuth providers
import Google from "next-auth/providers/google";

const options = {
    adapter: PrismaAdapter(Prisma),
    providers: [
        Google({
            clientId: process.env.GOOGLE_ID,
            clientSecret: process.env.GOOGLE_SECRET,
            authorization: {
                params: {
                    prompt: "consent",
                    access_type: "offline",
                    response_type: "code"
                }
            }
        }),
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                username: { label: "Username", type: "text" },
                password: { label: "Password", type: "password" }
            },
            async authorize(credentials, req) {
                //
                // ****Need to supply credentials in some fashion****
                //
                const user = { id: req.body.userId, name: req.body.userName, email: req.body.email };
                if (user) {
                    return user;
                } else {
                    return null;
                }
            }
        })
    ],
    callbacks: {
        async signIn({user, account, profile, email, credentials }) {
            if(account.provider === "google") {
                return profile.email_verified && profile.email.endsWith("@gmail.com");
            }
            return true;
        }
    }
}
