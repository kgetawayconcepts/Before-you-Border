import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = { title:"Before You Border — Global Border & Transit Check", description:"Check what to verify before you fly, including transit visa and border-readiness issues." };
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body>{children}</body></html>}