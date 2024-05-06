import {Inter} from "next/font/google";
import "./globals.css";
import StarsCanvas from "@/components/StarBackground";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PlausibleProvider from "next-plausible";

const inter = Inter({subsets: ["latin"]});

export const metadata = {
    title: "Space Website",
    description: "Done by LoGiSTeRr",
};

export default function RootLayout({children}) {
    return (
        <PlausibleProvider domain="space-website-hazel.vercel.app">
            <html lang="en">
            <body className={`${inter.className} bg-[#030014] overflow-y-scroll overflow-x-hidden`}>
            <StarsCanvas/>
            <Navbar/>
            {children}
            <Footer/>
            </body>
            </html>
        </PlausibleProvider>
    );
}
