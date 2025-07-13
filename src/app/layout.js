import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Satvik Spoon - Wholesome Veg Meals",
  description: "Delicious vegetarian meal solutions for corporate teams",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className="small"
      >
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
