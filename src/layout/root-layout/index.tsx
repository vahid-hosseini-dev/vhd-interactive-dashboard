import { Header, Footer } from "@/src/components/layout";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "vhd-interactive-dashboard",
  description:
    "Interactive Dashboard built with Next.js. Includes Users, Products, and Games features.",
};

export function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="eng"
      dir="ltr"
      data-scroll-behavior="smooth"
      suppressHydrationWarning
    >
      <body className="m-auto lg:max-w-360 min-h-screen flex flex-col justify-center items-center font-sans antialiased bg-background text-foreground dark:bg-[#0b0f14] dark:text-[#e5e7eb]">
        <Header />
        <main className="flex-1 bg-[#f5f5f5] w-full ">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
