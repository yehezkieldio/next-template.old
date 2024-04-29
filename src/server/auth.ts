import { env } from "@/env";
import { db } from "@/server/db";
import { accounts, sessions, users, verificationTokens } from "@/server/db/schema";
import { DrizzleAdapter } from "@auth/drizzle-adapter";
import NextAuth, { type DefaultSession } from "next-auth";
import type { Adapter } from "next-auth/adapters";
import Discord from "next-auth/providers/discord";

declare module "next-auth" {
    interface Session extends DefaultSession {
        user: {
            id: string;
            uid: string;
            role: string;
        } & DefaultSession["user"];
    }

    interface User {
        uid: string;
        role: string;
    }
}

export const { handlers, signIn, signOut, auth } = NextAuth({
    adapter: DrizzleAdapter(db, {
        usersTable: users,
        accountsTable: accounts,
        sessionsTable: sessions,
        verificationTokensTable: verificationTokens,
    }) as Adapter,
    providers: [
        Discord({
            clientId: env.DISCORD_CLIENT_ID,
            clientSecret: env.DISCORD_CLIENT_SECRET,
        }),
    ],
});

export const getAuth = async () => await auth();
