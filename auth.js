import NextAuth from "next-auth";
import "next-auth/jwt";
import vercelKVDriver from "unstorage/drivers/vercel-kv";
import memoryDriver from "unstorage/drivers/memory";
import { NextAuthConfig } from "next-auth";
import { UnstorageAdapter } from "@auth/unstorage-adapter";

import Google from "next-auth/providers/google";
import { createStorage } from "unstorage";

const storage = createStorage({
    driver: process.env.VERCEL ? 
        vercelKVDriver({
            url: process.env.KV_REST_API_URL,
            token: process.env.KV_REST_API_TOKEN,
            env: false
        })
        : memoryDriver()
})