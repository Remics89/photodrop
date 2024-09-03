import NextAuth from "next-auth";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { Prisma } from "@prisma/client";
import Google from "next-auth";
import EmailProvider from "next-auth/providers";
import NodeMail from "nodemailer";

const transporter = NodeMail.createTransport(transport[, defaults])

export const { handlers, auth, signIn, signOut } = NextAuth ({
    provider: [
        Google,
        EmailProvider,({
            type: "Email",
            server: process.env.EMAIL_SERVER,
            from: process.env.EMAIL_FROM,
            maxAge: process.env.AUTH_AGE,
            sendVerificationRequest: transporter.sendMail(data [, callback])
        })
    ],
    session: {
        strategy: "database",
        maxAge: 1,

    }
    adapter: PrismaAdapter(Prisma),
    // callbacks: {
    //     async session({ session, token }) {
    //         if (token?.accessToken) {
    //             session.accessToken = token.accessToken
    //         }
    //     }
    // }
})

