import type { ThreeElements } from "@react-three/fiber"

/**
 * Temporary React 19 JSX bridge for @react-three/fiber v8.
 * Remove once PR B upgrades the R3F stack to versions with React 19 types.
 */
declare module "react" {
  namespace JSX {
    interface IntrinsicElements extends ThreeElements {}
  }
}

export {}
