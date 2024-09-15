import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { PHProvider } from "@/components/PHProvider";
import { Header } from "@/components/header";

const beVietnamPro = Inter({
	subsets: ["latin"],
	weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  title: "6pm | Manage your expense seamlessly",
  description:
    "6pm is your AI financial assistant that helps you manage your expenses and budgets. With 6pm, you can easily track your expenses, set financial goals, and get personalized insights to help you make better financial decisions.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const isDev = process.env.NODE_ENV === "development";

  return (
    <html lang="en" className="dark">
      {!isDev ? <Analytics /> : null}
      <PHProvider>
        <body className={`${beVietnamPro.className} bg-white dark:bg-zinc-900`}>
          <div className="isolate min-h-screen">
            <Header />
            {children}
          </div>
        </body>
      </PHProvider>
    </html>
  );
}
