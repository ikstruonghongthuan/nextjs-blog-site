import type { Metadata } from "next";
import { Lexend } from "next/font/google";
import Link from "next/link";

import StoreProvider from "./StoreProvider";

import "./globals.scss";
import styles from "./layout.module.scss";

const lexend = Lexend({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

const Header = () => (
  <header className={styles["top-nav"]}>
    <Link href="/">Home Page</Link>
    <Link href="/admin">Administration</Link>
    <Link href="/sign-in" className="!p-0 ml-auto">
      <button className={styles["top-nav__sign-in-button"]}>Sign In</button>
    </Link>
  </header>
);

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={lexend.className}>
        <Header />
        <StoreProvider>{children}</StoreProvider>
      </body>
    </html>
  );
}
