import type { AppProps } from "next/app";
import '../styles/globals.css';
import RootLayout from "@/app/layout";
import { SessionProvider } from "next-auth/react";
import { Session } from "next-auth";

interface MyAppProps extends AppProps {
  pageProps: {
    session: Session;
  };
}

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: MyAppProps) {
  return (
    <SessionProvider session={session} basePath="http://localhost:1337">
      <RootLayout>
        <Component {...pageProps} />
      </RootLayout>
    </SessionProvider>
  );
}
