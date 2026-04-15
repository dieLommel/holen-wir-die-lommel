"use client";

import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { useGLTF, Environment, Float, ContactShadows } from "@react-three/drei";
import * as THREE from "three";

export function GoldenRockModel(props: any) {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { nodes, materials } = useGLTF("/models/gold-rock.glb") as any;
  const modelRef = useRef<THREE.Group>(null);

  useFrame((state, delta) => {
    if (modelRef.current) {
      // Rotate permanently slowly over time on the Y axis
      modelRef.current.rotation.y += delta * 0.15;
      
      // Calculate target rotation and position based on mouse pointer
      const targetX = (state.pointer.x * Math.PI) / 4;
      const targetY = (state.pointer.y * Math.PI) / 4;
      
      // Let it "look" towards the mouse pointer
      modelRef.current.rotation.z = THREE.MathUtils.lerp(modelRef.current.rotation.z, -targetX, 0.08);
      modelRef.current.rotation.x = THREE.MathUtils.lerp(modelRef.current.rotation.x, targetY, 0.08);

      // PARALLAX EFFECT: Physically move towards the mouse
      // state.pointer runs from -1 to 1. Reduced multiplier to keep it centered on the right side.
      modelRef.current.position.x = THREE.MathUtils.lerp(modelRef.current.position.x, state.pointer.x * 0.4, 0.05);
      modelRef.current.position.y = THREE.MathUtils.lerp(modelRef.current.position.y, state.pointer.y * 0.4, 0.05);
    }
  });

  return (
    <group ref={modelRef} {...props} dispose={null}>
      <primitive object={useGLTF("/models/gold-rock.glb").scene} />
    </group>
  );
}

useGLTF.preload("/models/gold-rock.glb");

function MouseLight() {
  const lightRef = useRef<THREE.PointLight>(null);
  
  useFrame((state) => {
    if (lightRef.current) {
      // Map the 2D pointer to 3D space coordinates in front of the model
      const targetX = state.pointer.x * 5;
      const targetY = state.pointer.y * 5;
      
      lightRef.current.position.x = THREE.MathUtils.lerp(lightRef.current.position.x, targetX, 0.1);
      lightRef.current.position.y = THREE.MathUtils.lerp(lightRef.current.position.y, targetY, 0.1);
    }
  });

  return <pointLight ref={lightRef} position={[0, 0, 3]} intensity={2.5} color="#FFEDD5" distance={10} decay={2} />;
}

export function GoldenRockScene() {
  return (
    <div className="w-full h-[400px] lg:h-[600px] flex items-center justify-center relative z-10">
      <Canvas camera={{ position: [0, 0, 5.5], fov: 45 }}>
        <Environment preset="city" />
        {/* Dimmer ambient and directional light so the spot light pops more */}
        <ambientLight intensity={0.2} />
        <directionalLight position={[5, 5, 5]} intensity={0.5} color="#ffffff" />
        
        {/* The interactive mouse light */}
        <MouseLight />
        
        <Float speed={1.5} rotationIntensity={0.2} floatIntensity={1.5}>
          <GoldenRockModel scale={1.0} />
        </Float>

        <ContactShadows position={[0, -1.5, 0]} opacity={0.5} scale={8} blur={2.5} far={4} />
      </Canvas>
    </div>
  );
}
