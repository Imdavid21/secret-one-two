import React from "react";
import Head from "next/head";
import { cn } from "@/utils";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { Nav } from "@/components/Nav";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Head>
        <title>Evelyn - your AI Doctor</title>
        <meta name="description" content="The doctor you didn't know you needed" />
      </Head>
      <div>
        <body
          className={cn(
            GeistSans.variable,
            GeistMono.variable,
            "flex flex-col min-h-screen"
          )}
        >
          <Nav />
          <div className="flex flex-1">
            <Sidebar
              userId={"some-user-id"}
              onSelectSession={(session) => console.log(session)}
            />
            <main className="flex-1 overflow-hidden">{children}</main>
          </div>
        </body>
      </div>
    </>
  );
}
