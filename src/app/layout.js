import { Space_Grotesk } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata = {
  title: "JH - Consultoria",
 
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
    <link rel="icon" href="/logo/logo_transparente.png" />

      <body
        className={`${spaceGrotesk.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
