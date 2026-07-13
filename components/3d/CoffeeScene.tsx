"use client";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import SceneManager from "./SceneManager";

export default function CoffeeScene() {
  return (
    <div className="fixed inset-0 w-full h-full z-0 pointer-events-none bg-[#110e0c]">
      <Canvas
        shadows
        gl={{ antialias: true, powerPreference: "high-performance" }}
        camera={{ fov: 45, near: 0.1, far: 1000, position: [0, 0.5, 4.5] }}
      >
        <Suspense fallback={null}>
          <SceneManager />
        </Suspense>
      </Canvas>
      {/* Cinematic Linear Vignette Overlay Effect */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_30%,#110e0c_95%)] pointer-events-none" />
    </div>
  );
}
