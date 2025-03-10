import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";

// Define the Roboto font
const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "700"], // Specify the font weights you need
});

export const metadata: Metadata = {
  title: "Pharaoh The Kid",
  description: "EPK created by Dylan Bielser",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* Apply the roboto font to the entire body */}
      <body className={roboto.className}>{children}</body>
    </html>
  );
}
