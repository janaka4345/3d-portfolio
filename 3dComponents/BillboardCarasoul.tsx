'use client'
import { useMemo } from "react"
import { Euler } from "three"

import { useCarouselStore } from "@/store/carasoulStore"

import BillBox from "./BillBox"
function BillboardCarasoul() {
    const carasoul = useCarouselStore((state) => state.carousel)


    const data = useMemo(() => {

        const data = [
            {
                githubUrl: '/chatroom',
                githubRealUrl: 'https://github.com/janaka4345/chatroom2',
                websiteUrl: 'https://chatter.janakakariyawasam.xyz/'

            },
            {
                githubUrl: '/ai-pal',
                githubRealUrl: 'https://github.com/janaka4345/ai-pal',
                websiteUrl: 'https://aipal.janakakariyawasam.xyz/'

            },
            {
                githubUrl: '/3d-portfolio',
                githubRealUrl: 'https://github.com/janaka4345/3d-portfolio',
                websiteUrl: 'https://www.janakakariyawasam.xyz/'

            }, {
                githubUrl: '/fassion-ecomm',
                githubRealUrl: 'https://github.com/janaka4345/fashion-ecommerce',
                websiteUrl: 'https://fassion-ecommerce.janakakariyawasam.xyz/'

            },
            {
                githubUrl: '/githubBasicdesign',
                githubRealUrl: 'https://github.com/janaka4345/basicdesign',
                websiteUrl: 'https://basicdesign-nine.vercel.app/'

            },
            {
                githubUrl: '/githubPhotosnap',
                githubRealUrl: 'https://github.com/janaka4345/photosnap-2',
                websiteUrl: 'https://photosnap-pearl.vercel.app/'

            }]
        return data
    }, [])
    console.log(data);

    return (
        <>
            <BillBox position={[3, -6, 8]} rotation={new Euler(0, 3.14, 0)}
                githubUrl={data[carasoul].githubUrl} websiteUrl={data[carasoul].websiteUrl} githubRealUrl={data[carasoul].githubRealUrl} />
        </>
    )
}
export default BillboardCarasoul