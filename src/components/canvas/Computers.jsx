import React from "react";
import { Suspense, useEffect, useState, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Preload, meshBounds, useGLTF } from "@react-three/drei";
import CanvasLoader from "../Loader";
import { isMotionComponent } from "framer-motion";

const Computers = ({ isMobile }) => {
  // ref for computer mesh
  const ref = useRef();

  useFrame((_, delta) => {
    // ref.current.rotation.x += delta;
    ref.current.rotation.y -= 0.05 * delta;
  });

  const computer = useGLTF("./desktop_pc/scene.gltf");
  return (
    <mesh ref={ref}>
      <hemisphereLight intensity={2.5} groundColor="black" />
      <pointLight intensity={1} />
      <spotLight
        intensity={1}
        position={[-10, 50, 10]}
        angle={0.12}
        penumbra={1}
        castShadow
        shadow-mapSize={1024}
      />
      <primitive
        object={computer.scene}
        scale={isMobile ? 0.5 : 0.75}
        position={isMobile ? [0, -1.5, -1.7] : [1, -2.25, -4.5]}
        rotation={[-0.01, -0.2, -0.1]}
      />
    </mesh>
  );
};

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  // check if mobile screen
  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 800px)");
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
    <Canvas
      frameloop="always"
      shadows
      camera={{ position: [20, -10, 10], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}>
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
          enableRotate={true}
        />
        <Computers isMobile={isMobile} />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;
