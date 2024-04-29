import { cn } from "@/lib/utils";
import "@/styles/globals.css";

import type { Metadata } from "next";

import { Plus_Jakarta_Sans } from "next/font/google";
const font = Plus_Jakarta_Sans({
    subsets: ["latin"],
    variable: "--font-sans",
});

export const metadata: Metadata = {
    title: "next-template",
    description: "The bleeding edge and opinionated Next.js template.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={cn("dark min-h-screen bg-background font-sans antialiased", font.variable)}>
                {children}
            </body>
        </html>
    );
}
