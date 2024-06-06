import { Navbar } from "@/components/custom/Navbar"
import { Toaster } from "@/components/ui/sonner"
import type { Metadata } from "next"
import { Poppins } from "next/font/google"
import "./globals.css"

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "800"] })

export const metadata: Metadata = {
    title: "Janaka Kariyawasam",
    description:
        "I'm a skilled full stack web developer / designer  with experience in Node, React and Typescript. Explore my portfolio to see my latest projects and contact me for your web development needs.",
    metadataBase: new URL('http://janakakariyawasam.xyz'),
    openGraph: {
        images: [
            {
                url: 'https://res.cloudinary.com/dqjfskfxu/image/upload/v1717634874/3d-portfolio/bacwjazkaabixmf6v9pr.png',
            },
        ],
    },
    twitter: {
        images: [
            {
                url: 'https://res.cloudinary.com/dqjfskfxu/image/upload/v1717634874/3d-portfolio/bacwjazkaabixmf6v9pr.png',
            },
        ]
    },
    alternates: {
        canonical: '/',
        languages: {
            'en-US': '/en-US',
            'de-DE': '/de-DE',
        },
    },
    // openGraph: {
    //     images: '/og-image.png',
    // },

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
                <Toaster position="top-center" expand={false} richColors />
            </body>
        </html>
    )
}
