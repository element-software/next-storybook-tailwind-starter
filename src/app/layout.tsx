import "../styles/globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nextjs, Storybook, and Tailwind Starter",
  description: "A starter template for Next.js with Storybook and Tailwind CSS - by Element Software",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
