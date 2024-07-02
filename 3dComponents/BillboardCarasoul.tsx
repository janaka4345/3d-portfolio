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
                githubUrl: 'http://165.232.179.119:3000/chatroom',
                githubRealUrl: 'https://github.com/janaka4345/chatroom2',
                websiteUrl: 'https://chatter.janakakariyawasam.xyz/'

            },
            {
                githubUrl: 'http://165.232.179.119:3000/ai-pal',
                githubRealUrl: 'https://github.com/janaka4345/ai-pal',
                websiteUrl: 'https://aipal.janakakariyawasam.xyz/'

            },
            {
                githubUrl: 'http://165.232.179.119:3000/3d-portfolio',
                githubRealUrl: 'https://github.com/janaka4345/3d-portfolio',
                websiteUrl: 'http://165.232.179.119:3000/'

            }, {
                githubUrl: 'http://165.232.179.119:3000/fassion-ecomm',
                githubRealUrl: 'https://github.com/janaka4345/fashion-ecommerce',
                websiteUrl: 'https://fassion-ecommerce.janakakariyawasam.xyz/'

            },
            {
                githubUrl: 'http://165.232.179.119:3000/githubBasicdesign',
                githubRealUrl: 'https://github.com/janaka4345/basicdesign',
                websiteUrl: 'https://basicdesign-nine.vercel.app/'

            },
            {
                githubUrl: 'http://165.232.179.119:3000/githubPhotosnap',
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