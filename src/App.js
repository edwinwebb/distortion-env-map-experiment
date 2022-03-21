import * as THREE from "three";
import { a } from '@react-spring/three';
import { Environment, MeshDistortMaterial } from '@react-three/drei';
import { Canvas } from '@react-three/fiber'
import { Color, LayerMaterial, Noise } from 'lamina';
import { Suspense, } from 'react';

function Scene() {
  const AnimatedMaterial = a(MeshDistortMaterial)

  return(<>
    <pointLight position={[-30,30,-10]} color={0xFF008E} intensity={.1} />
    <pointLight position={[-30,-30,-10]} color={0xD22779} intensity={.1} />
    <pointLight position={[20,40,-10]} color={0x612897} intensity={.15} />
    <pointLight position={[30,-40,-10]} color={0x0C1E7F} intensity={.25} />
    <Environment background resolution={512}>
      <mesh scale={100}>
        <sphereGeometry />
        <LayerMaterial side={THREE.BackSide}>
          <Color color={'#1A1A40'} />
          <Noise
            colorA="#FF008E"
            colorB="#D22779"
            colorC="#612897"
            colorD="#0C1E7F"
            alpha={1}
            mode="add"
            near={0}
            far={100}
            origin={[100, 100, 100]}
          />
        </LayerMaterial>
      </mesh>
    </Environment>
    <mesh scale={2}>
      <sphereBufferGeometry args={[1,64,64]} />
      <AnimatedMaterial color="#323232" clearcoat={1} clearcoatRoughness={0.5} metalness={.8} />
    </mesh>
  </>)
}

function App() {
  return (
    <Canvas>
      <color attach='background' args={[0x111211]} />
      <Suspense fallback={null}>
        <Scene />
      </Suspense>
    </Canvas>
  );
}

export default App;
