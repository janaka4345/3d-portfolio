import { Navbar } from "@/components/custom/Navbar"
import { Toaster } from "@/components/ui/sonner"
import type { Metadata } from "next"
import { Poppins } from "next/font/google"
import "./globals.css"
import { cn } from "@/lib/utils"

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "800"], variable: "--font-sans", })


export const metadata: Metadata = {
    title: "Janaka Kariyawasam | Full Stack Web Developer | Designer",
    description:
        "I'm a skilled full stack web developer and UX/UI designer  with experience in Node, React and Typescript/Javascript. Explore my portfolio to see my latest projects and contact me for your web development needs.",

    metadataBase: new URL('https://www.janakakariyawasam.xyz'),

    openGraph: {
        type: "website",
        url: "https://www.janakakariyawasam.xyz",
        title: "Janaka Kariyawasam | Full Stack Web Developer | Designer",
        description: "I'm a skilled full stack web developer and UX/UI designer  with experience in Node, React and Typescript/Javascript. Explore my portfolio to see my latest projects and contact me for your web development needs.",
        siteName: "My Portfolio Website",
        images: [
            {
                url: 'https://res.cloudinary.com/dqjfskfxu/image/upload/v1717634874/3d-portfolio/bacwjazkaabixmf6v9pr.png',
            },
        ],
    },
    // twitter: {
    //     images: [
    //         {
    //             url: 'https://res.cloudinary.com/dqjfskfxu/image/upload/v1717634874/3d-portfolio/bacwjazkaabixmf6v9pr.png',
    //         },
    //     ]
    // },

    twitter: { card: "summary_large_image", site: "https://www.janakakariyawasam.xyz", creator: "Janaka Kariyawasam", "images": "https://res.cloudinary.com/dqjfskfxu/image/upload/v1717634874/3d-portfolio/bacwjazkaabixmf6v9pr.png" },

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
            <body
                // className={poppins.className}
                className={cn(
                    "min-h-screen bg-background font-sans antialiased",
                    poppins.variable
                )}
            >
                <Navbar />
                {children}
                <Toaster position="bottom-right" expand={false} richColors />
            </body>
        </html>
    )
}
