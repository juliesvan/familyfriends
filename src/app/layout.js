import "./globals.css";
import { Manrope } from "next/font/google";
import Header from "./components/Header";
import Navigation from "./components/Navigation";

const manropeSans = Manrope({
  variable: "--font-manrope-sans",
  subsets: ["latin"],
});

export const metadata = {
  title: "Family Friends",
  description: "Browse a list of breeds, view pictures, and learn about each dog’s size, personality, activity level, and care needs.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${manropeSans.variable} h-full antialiased`}>
      <body className="font-sans min-h-full flex flex-col">
        <Header />

        <main className="flex-1 pb-24">{children}</main>

        <Navigation />
      </body>
    </html>
  );
}
