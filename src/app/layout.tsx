import { Sidebar } from "../layout/sidebar";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Soundenjoy",
  description: "Enjoy the sound",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className={inter.className}>
        <Sidebar />
        <div className="ml-48">{children}</div>
      </body>
    </html>
  );
}
