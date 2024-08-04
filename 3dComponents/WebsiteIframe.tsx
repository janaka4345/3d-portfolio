import BillboardLoading from "@/components/skeletons/BillboardLoading"
import { useCarouselStore } from "@/store/carasoulStore"
import { Html } from "@react-three/drei"

function WebsiteIframe({ websiteUrl }: { websiteUrl: string }) {
    const carouselWebsiteLoading = useCarouselStore((state) => state.carouselWebsiteLoading)
    const setCarouselWebsiteLoading = useCarouselStore((state) => state.setCarouselWebsiteLoading)
    return (
        <Html
            zIndexRange={[0 - 10]}
            wrapperClass="html2"
            className="relative overflow-hidden overflow-y-scroll border-none "
            distanceFactor={0.2}
            transform
            center
            position={[0, 0, 0]}
            rotation={[0, -Math.PI / 2, 0]}
        // occlude
        >
            {carouselWebsiteLoading && (

                <BillboardLoading style={{ height: '1140px', width: '1660px' }} className='absolute z-50 flex justify-center items-center' />
            )}
            <iframe
                style={{
                    height: "1140px",
                    width: "1660px",
                    border: "none",
                    overflow: "auto",
                }}
                onLoad={() => setCarouselWebsiteLoading(false)}
                sandbox="allow-scripts allow-same-origin"
                loading="lazy"
                src={websiteUrl}
            ></iframe>
        </Html>
    )
}
export default WebsiteIframe
