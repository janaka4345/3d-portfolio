import { useCarouselStore } from "@/store/carasoulStore"
import { Html } from "@react-three/drei"
import { useEffect, useState } from "react"

function GithubIframe({ githubUrl }: { githubUrl: string }) {

    const [html, setHtml] = useState<string>("")

    useEffect(() => {

        const url = githubUrl;
        const fetchData = async () => {
            try {
                const response = await fetch(url);
                const html = await response.text();
                setHtml(html)

            } catch (error) {
                console.log(error);
            }
        }
        fetchData()
        return () => {

        }
    }, [githubUrl])

    const carouselGithubLoading = useCarouselStore((state) => state.carouselGithubLoading)
    const setCarouselGithubLoading = useCarouselStore((state) => state.setCarouselGithubLoading)
    return (
        <Html
            zIndexRange={[0 - 10]}
            wrapperClass='html1'
            className='border-none overflow-y-scroll overflow-hidden relative '
            transform
            center
            distanceFactor={0.2}
            position={[0, 0, 0]}
            rotation={[0, -1.55, 0]}
        // occlude
        >
            {carouselGithubLoading && <h1 style={{ height: '500px', width: '850px' }} className='absolute z-50 text-6xl bg-white text-black '>Loading...</h1>}
            <iframe style={{ height: '1300px', width: '850px', border: 'none' }}
                srcDoc={html}
                onLoad={() => setCarouselGithubLoading(false)}
                // referrerPolicy='no-referrer'
                sandbox="allow-same-origin allow-scripts" //TODO fix the error of allow scripts not working
                loading='lazy'
            ></iframe>
        </Html>
    )
}
export default GithubIframe