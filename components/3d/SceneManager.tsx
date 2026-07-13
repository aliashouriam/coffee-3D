"use client";
import { useRef } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { useStore } from "@/lib/store";
import SteamParticles from "./SteamParticles";
import * as THREE from "three";

export default function SceneManager() {
  const activeSection = useStore((state) => state.activeSection);
  const { pointer } = useThree();

  const cupGroupRef = useRef<THREE.Group>(null);
  const targetCamPos = useRef(new THREE.Vector3(0, 0, 5));
  const targetCamLook = useRef(new THREE.Vector3(0, 0, 0));

  useFrame((state) => {
    // 1. Kinetic Section Camera Sequencing Transitions
    if (activeSection === 0) {
      // Hero Perspective: Wide angle, centered cinematic look
      targetCamPos.current.set(0, 0.5, 4.5);
      targetCamLook.current.set(0, 0, 0);
    } else if (activeSection === 1) {
      // About Section: Offset close up macro dynamic zoom
      targetCamPos.current.set(-1.8, 0.8, 3);
      targetCamLook.current.set(0.5, 0.2, 0);
    } else if (activeSection === 2) {
      // Products Section: Overhead top down layout view
      targetCamPos.current.set(0, 4, 1.5);
      targetCamLook.current.set(0, 0, 0);
    }

    // Smoothly lerp camera vectors
    state.camera.position.lerp(targetCamPos.current, 0.05);

    const currentLook = new THREE.Vector3(0, 0, -1).applyQuaternion(state.camera.quaternion).add(state.camera.position);
    currentLook.lerp(targetCamLook.current, 0.05);
    state.camera.lookAt(currentLook);

    // 2. Parallax interaction based on mouse movement
    if (cupGroupRef.current) {
      const targetRotX = pointer.y * 0.15;
      const targetRotY = pointer.x * 0.2;

      cupGroupRef.current.rotation.x = THREE.MathUtils.lerp(cupGroupRef.current.rotation.x, targetRotX, 0.08);
      cupGroupRef.current.rotation.y = THREE.MathUtils.lerp(
        cupGroupRef.current.rotation.y,
        targetRotY + state.clock.getElapsedTime() * 0.05,
        0.08,
      );
    }
  });

  return (
    <>
      {/* Editorial Luxury Studio Lighting */}
      <ambientLight intensity={0.4} />
      <directionalLight position={[5, 8, 5]} intensity={1.5} castShadow shadow-mapSize={[2048, 2048]} />
      <spotLight position={[-5, 5, -2]} intensity={0.8} color="#c5a880" />
      <pointLight position={[0, -2, 2]} intensity={0.5} color="#4a2c11" />

      {/* Hero Interactive 3D Setup Layout Object */}
      <group ref={cupGroupRef} position={[0, -0.4, 0]}>
        {/* Procedural minimalist Espresso Cup Geometric representation */}
        <mesh castShadow receiveShadow position={[0, 0.4, 0]}>
          <cylinderGeometry args={[0.6, 0.45, 0.9, 32]} />
          <meshStandardMaterial color="#1e1613" roughness={0.15} metalness={0.1} />
        </mesh>
        {/* Metallic Gold Handle accent */}
        <mesh position={[0.6, 0.4, 0]} rotation={[0, 0, 0.2]}>
          <torusGeometry args={[0.22, 0.06, 16, 32, Math.PI * 1.2]} />
          <meshStandardMaterial color="#c5a880" roughness={0.1} metalness={0.8} />
        </mesh>
        {/* High Gloss Coffee liquid surface */}
        <mesh position={[0, 0.82, 0]} rotation={[-Math.PI / 2, 0, 0]}>
          <circleGeometry args={[0.56, 32]} />
          <meshStandardMaterial color="#221105" roughness={0.05} metalness={0.3} />
        </mesh>

        {/* Interactive Dynamic Particle Steam Module */}
        <SteamParticles />
      </group>
    </>
  );
}
