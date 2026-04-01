// canvas.js
import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import CanvasLoader from "../Loader";

const Computers = ({ isMobile }) => {
  const computer = useGLTF("/desktop_pc/scene.gltf");

  return (
    <mesh>
      <hemisphereLight intensity={0.15} groundColor="black" />
      <spotLight 
        position={[-20, 50, 10]} 
        angle={0.12} 
        penumbra={1} 
        intensity={1} 
        castShadow 
        shadow-mapSize={1024}
      />
      <pointLight intensity={1} />

      <primitive
        object={computer.scene}
        scale={isMobile ? 0.5 : 0.75}           // Much smaller on mobile
        position={isMobile ? [0, -3.5, -3.0] : [0, -3.25, -1.5]}
        rotation={[-0.01, -0.2, -0.1]}
      />
    </mesh>
  );
};

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 500px)");
    setIsMobile(mediaQuery.matches);

    const handleChange = (e) => setIsMobile(e.matches);
    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  return (
    <Canvas
      frameloop="demand"
      shadows
      dpr={isMobile ? [1, 1.5] : [1, 2]}     // Lower resolution on mobile
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ 
        preserveDrawingBuffer: true,
        alpha: true,
        antialias: false,                    // ← Most important fix for iOS
        powerPreference: "default"
      }}
      style={{ width: "100%", height: "100%" }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Computers isMobile={isMobile} />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;