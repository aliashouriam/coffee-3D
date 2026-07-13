"use client";
import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

export default function SteamParticles() {
  const count = 40;
  const meshRef = useRef<THREE.Points>(null);

  const [positions, randoms] = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const rand = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 0.4;
      pos[i * 3 + 1] = Math.random() * 2;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 0.4;

      rand[i * 3] = Math.random();
      rand[i * 3 + 1] = Math.random();
      rand[i * 3 + 2] = Math.random();
    }
    return [pos, rand];
  }, []);

  useFrame((state) => {
    if (!meshRef.current) return;
    const time = state.clock.getElapsedTime();
    const posArr = meshRef.current.geometry.attributes.position.array as Float32Array;

    for (let i = 0; i < count; i++) {
      const index = i * 3;
      // Animate Y upwards
      posArr[index + 1] += 0.004 * (randoms[index + 1] + 0.5);
      // Continuous drifting on X and Z axes
      posArr[index] += Math.sin(time + randoms[index]) * 0.001;
      posArr[index + 2] += Math.cos(time + randoms[index + 2]) * 0.001;

      // Recycle particles reaching top boundary
      if (posArr[index + 1] > 2.5) {
        posArr[index] = (Math.random() - 0.5) * 0.4;
        posArr[index + 1] = 0.2;
        posArr[index + 2] = (Math.random() - 0.5) * 0.4;
      }
    }
    meshRef.current.geometry.attributes.position.needsUpdate = true;
  });

  return (
    <points ref={meshRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial
        size={0.06}
        color="#eaddca"
        transparent
        opacity={0.15}
        blending={THREE.AdditiveBlending}
        depthWrite={false}
      />
    </points>
  );
}
