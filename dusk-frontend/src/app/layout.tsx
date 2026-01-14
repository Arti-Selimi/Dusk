import type { Metadata } from "next";
import "./globals.css";
import ApolloContext from "@/lib/ApolloContext";
import { ToastProvider } from "@/components/ToastProvider/ToastProvider";

export const metadata: Metadata = {
  title: "Dusk",
  description: "Online banking app by Arti Selimi",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <ApolloContext>
        <body>
          <ToastProvider>
            {children}
          </ToastProvider>
        </body>
      </ApolloContext>
    </html>
  );
}
