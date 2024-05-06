import World from "@/3dComponents/World";
import StartAnimation from "@/components/custom/StartAnimation";
import { Suspense } from "react";

export default function Home() {
  return (
    <main className="relative">
      <StartAnimation />
      {/* {false && <Suspense fallback={<h1>loading...</h1>}>
        <World />
      </Suspense>} */}
    </main>
  );
}
