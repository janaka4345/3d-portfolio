// 'use client'
import World from "@/3dComponents/World";
import Hero from "@/components/custom/Hero";
import StartAnimation from "@/components/custom/StartAnimation";
// import { useStateEngine } from "@/store/statEngine";
// import { AnimatePresence } from "framer-motion";

import { Suspense } from "react";

export default function Home() {
  return (
    <main className="relative w-[100svw] h-[100dvh] overflow-hidden">
      <StartAnimation />
      {/* <AnimatePresence> */}
      {/* {true && <Hero />} */}
      {/* </AnimatePresence> */}
      <Suspense fallback={<h1>loading...</h1>}>
        <Hero />
        <World />
      </Suspense>
    </main>
  );
}
