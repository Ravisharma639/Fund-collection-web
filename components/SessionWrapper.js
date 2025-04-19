"use client";
import { SessionProvider } from "next-auth/react";

export default function RootLayout({ children, session }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-gray-100">
        <SessionProvider session={session}>{children}</SessionProvider>
      </body>
    </html>
  );
}
