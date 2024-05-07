import World from "@/3dComponents/World";
import Hero from "@/components/custom/Hero";
import StartAnimation from "@/components/custom/StartAnimation";

import { Suspense } from "react";

export default function Home() {
  return (
    <main className="relative w-[100svw] h-[100dvh]">
      <StartAnimation />
      <Hero />
      {true && <Suspense fallback={<h1>loading...</h1>}>
        <World />
      </Suspense>}
    </main>
  );
}
