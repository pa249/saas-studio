import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Environment, MeshDistortMaterial, Icosahedron, TorusKnot } from "@react-three/drei";
import { Suspense, useRef } from "react";
import * as THREE from "three";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";

function MorphObject({ scrollProgress }: { scrollProgress: MotionValue<number> }) {
  const meshRef = useRef<THREE.Mesh>(null);
  const knotRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    const s = scrollProgress.get();
    if (meshRef.current) {
      meshRef.current.rotation.x = t * 0.15 + s * Math.PI;
      meshRef.current.rotation.y = t * 0.2 + s * Math.PI * 0.6;
      meshRef.current.position.y = Math.sin(t * 0.4) * 0.2 - s * 0.5;
      meshRef.current.position.x = s * 1.2;
    }
    if (knotRef.current) {
      knotRef.current.rotation.x = -t * 0.1;
      knotRef.current.rotation.z = t * 0.15 + s * Math.PI * 0.4;
      knotRef.current.position.x = -2.2 - s * 0.6;
      knotRef.current.position.y = 1.4 + Math.sin(t * 0.5) * 0.15;
    }
  });

  return (
    <>
      <Float speed={1.2} rotationIntensity={0.3} floatIntensity={0.6}>
        <Icosahedron ref={meshRef} args={[1.4, 1]} position={[0.6, 0, 0]}>
          <MeshDistortMaterial
            color="#f5a524"
            roughness={0.15}
            metalness={0.85}
            distort={0.35}
            speed={1.2}
            envMapIntensity={1.4}
          />
        </Icosahedron>
      </Float>
      <Float speed={0.8} rotationIntensity={0.4} floatIntensity={0.4}>
        <TorusKnot ref={knotRef} args={[0.55, 0.18, 160, 24]} position={[-2.2, 1.4, -1]}>
          <meshStandardMaterial
            color="#1a1a1f"
            roughness={0.05}
            metalness={1}
            envMapIntensity={1.2}
          />
        </TorusKnot>
      </Float>
      <Float speed={1} rotationIntensity={0.2} floatIntensity={0.5}>
        <mesh position={[2.4, -1.2, -2]}>
          <sphereGeometry args={[0.5, 64, 64]} />
          <meshPhysicalMaterial
            color="#ffffff"
            roughness={0}
            metalness={0}
            transmission={1}
            thickness={1.2}
            ior={1.4}
            envMapIntensity={1.5}
          />
        </mesh>
      </Float>
    </>
  );
}

export const SceneCanvas = () => {
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.85, 1], [1, 0.7, 0.35, 0.15]);

  return (
    <motion.div
      className="fixed inset-0 -z-10 pointer-events-none"
      style={{ opacity }}
      aria-hidden
    >
      <Canvas
        camera={{ position: [0, 0, 5.5], fov: 45 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
      >
        <Suspense fallback={null}>
          <ambientLight intensity={0.4} />
          <directionalLight position={[5, 5, 5]} intensity={1.2} color="#fff5e0" />
          <directionalLight position={[-5, -3, -2]} intensity={0.4} color="#7da9ff" />
          <Environment preset="city" />
          <MorphObject scrollProgress={scrollYProgress} />
        </Suspense>
      </Canvas>
      {/* Vignette overlay to anchor content */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/30 to-background/80" />
    </motion.div>
  );
};
