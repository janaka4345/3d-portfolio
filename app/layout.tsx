import type { Metadata } from "next"
import { Poppins } from "next/font/google"
import "./globals.css"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Navbar } from "@/components/custom/Navbar"

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "800"] })

export const metadata: Metadata = {
    title: "Janaka Kariyawasam",
    description:
        "I'm a skilled full stack web developer / designer  with experience in Node, React and Typescript. Explore my portfolio to see my latest projects and contact me for your web development needs.",
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="en">
            <body className={poppins.className}>
                <Navbar />
                {children}
            </body>
        </html>
    )
}
