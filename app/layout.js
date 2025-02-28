import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


export const metadata = {
  title: "Royal X Casino - Download Real Earning Game | Updated Version",
  description: "Download Royal x Casino APK v2.30.2 for Android - Get Rs 50,000 Welcome Bonus + 2000+ Games. Safe & Legal Pakistani Casino App with JazzCash Withdrawals.",
  openGraph: {
    images: [
      {
        url: 'https://royalxcasinox.com/og-image.jpg',
        width: 1200,
        height: 630,
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
