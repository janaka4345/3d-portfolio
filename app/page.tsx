import World from "@/3dComponents/World";
import StarttAnimation from "@/components/custom/StarttAnimation";
import { Suspense } from "react";

export default function Home() {
  return (
    <>
      <StarttAnimation />
      {false && <Suspense fallback={<h1>loading...</h1>}>
        <World />
      </Suspense>}
    </>
  );
}
