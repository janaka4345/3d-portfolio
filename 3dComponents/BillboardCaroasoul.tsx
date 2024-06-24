'use client'
import { Suspense, useState } from "react"
import { BillBoardSet6 } from "./BillBoardSet6"
import { Euler } from "three"
import { Html } from "@react-three/drei"

function BillboardCaroasoul() {
    const [caroasoul, setCaroasoul] = useState<number>(1)
    const handleClick = () => {
        setCaroasoul(prev => prev + 1)
    }

    return (
        <>

            {caroasoul === 1 &&
                <Suspense >
                    <BillBoardSet6 position={[3, -6, 10]} rotation={new Euler(0, 3.14, 0)} />
                </Suspense>
            }
            {
                caroasoul === 2 && <Suspense >
                    <BillBoardSet6 position={[3, -6, 10]} rotation={new Euler(0, 3.14, 0)} />
                </Suspense>
            }
            {
                caroasoul === 3 && <Suspense >
                    <BillBoardSet6 position={[3, -6, 10]} rotation={new Euler(0, 3.14, 0)} />
                </Suspense>
            }
            {
                caroasoul === 4 && <Suspense >
                    <BillBoardSet6 position={[3, -6, 10]} rotation={new Euler(0, 3.14, 0)} />
                </Suspense>
            }
            {
                caroasoul === 5 && <Suspense >
                    <BillBoardSet6 position={[3, -6, 10]} rotation={new Euler(0, 3.14, 0)} />
                </Suspense>
            }
            <Html position={[3, -6, 10]}>
                <button onClick={handleClick}>Clcic</button>
            </Html>
        </>
    )
}
export default BillboardCaroasoul