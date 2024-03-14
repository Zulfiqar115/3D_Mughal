
/*import { useTexture } from '@react-three/drei';
import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Preload } from '@react-three/drei';
import CanvasLoader from '../Loader';
import { technologies } from '../../constants';
import {Decal, Float } from '@react-three/drei';
import { MeshStandardMaterial } from 'three';*/
import React from "react";
const Ball = ({ imgUrl }) => {
 /* const [decal] = useTexture([imgUrl]);*/

  return (
    <div>Ball</div>
    /*<Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
      <ambientLight intensity={0.25} />
      <directionalLight position={[0, 0, 0.05]} />
      <mesh castShadow receiveShadow scale={2.75}>
        
        <icosahedronBufferGeometry args={[1, 1]} />
        <MeshStandardMaterial
          color='#fff8eb'
          polygonOffset
          polygonOffsetFactor={-5}
          flatShading
          attach="material"
        />
        <Decal
          position={[0, 0, 1]}
          rotation={[2 * Math.PI, 0, 6.25]}
          scale={1}
          map={decal}
          flatShading
        />
      </mesh>
    </Float>
  );
};



const BallCanvas = ({ icon }) => {
  
  return (
    <Canvas
      frameloop='demand'
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls enableZoom={false} />
        <Ball imgUrl={icon} />
      </Suspense>
      <Preload all />
    </Canvas>*/
  );
};

export default Ball;

