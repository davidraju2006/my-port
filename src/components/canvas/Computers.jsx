import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, SpotLight, useGLTF } from "@react-three/drei";
import CanvasLoader from "./CanvasLoader";
import ErrorBoundary from "../ErrorBoundary";

const Computers = () => {
  const { scene, error } = useGLTF("/models/scene.glb"); 
  const [isMobile, setIsMobile] = useState(false);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 768px)");
    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };
    mediaQuery.addEventListener("change", handleMediaQueryChange);
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <ErrorBoundary>
      <Canvas
        frameloop="demand"
        shadows
        camera={{ position: [20, 3, 5], fov: 50 }}
        gl={{ preserveDrawingBuffer: true }}
      >
        <Suspense fallback={<CanvasLoader />}>
          <OrbitControls
            enableZoom={false}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 2}
          />
          <ambientLight intensity={0.5} />
          <SpotLight
            position={[10, 10, 10]}
            angle={0.15}
            penumbra={1}
            intensity={1}
            castShadow
            shadow-mapSize={1024}
          />
          <primitive
            object={scene}
            scale={isMobile ? 3 : 3}  // Increased scale values to enlarge model
            position={isMobile ? [0, -3, -2.2] : [0, -3.25, -1.5]}
            rotation={[0.01, 0.2, 0.1]}
            onError={(err) => {
              console.error("Error loading model:", error); // Log any errors
              setLoading(false);
            }}

          />

          <Preload />
        </Suspense>
      </Canvas>
    </ErrorBoundary>
  );
};

export default Computers;
