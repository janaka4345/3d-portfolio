'use client'
import { useMemo } from "react"
import { Euler } from "three"

import { useCarouselStore } from "@/store/carasoulStore"

import BillBox from "./BillBox"
function BillboardCarasoul() {
    const carasoul = useCarouselStore((state) => state.carousel)
    console.log(carasoul);

    const data = useMemo(() => {
        console.log('memo ran');

        const data = [
            {
                githubUrl: 'http://localhost:3000/githubPhotosnap',
                githubRealUrl: 'https://github.com/janaka4345/photosnap-2',
                websiteUrl: 'https://photosnap-pearl.vercel.app/'

            },
            {
                githubUrl: 'http://localhost:3000/githubBasicdesign',
                githubRealUrl: 'https://github.com/janaka4345/basicdesign',
                websiteUrl: 'https://bruno-simon.com/html/'

            },
            {
                githubUrl: 'http://localhost:3000/githubBasicdesign',
                githubRealUrl: 'https://github.com/janaka4345/basicdesign',
                websiteUrl: 'https://basicdesign-nine.vercel.app/'

            },
            {
                githubUrl: 'http://localhost:3000/githubPhotosnap',
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