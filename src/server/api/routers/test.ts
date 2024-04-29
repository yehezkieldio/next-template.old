import { createTRPCRouter, protectedProcedure, publicProcedure } from "@/server/api/trpc";

export const testRouter = createTRPCRouter({
    public: publicProcedure.query(() => {
        return "Hello, world from public procedure!";
    }),
    protected: protectedProcedure.query(() => {
        return "Hello, world from protected procedure!";
    }),
});
