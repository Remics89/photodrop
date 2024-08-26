import NextAuth from "next-auth";
import "next-auth/jwt";
import vercelKVDriver from "unstorage/drivers/vercel-kv";
import memoryDriver from "unstorage/drivers/memory";
import { NextAuthConfig } from "next-auth";
import { UnstorageAdapter } from "@auth/unstorage-adapter";

import Google from "next-auth/providers/google";


