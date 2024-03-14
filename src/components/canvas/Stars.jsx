/*import { useState, useRef, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as random from 'maath-random/dist/random.esm';*/
import react from 'react'

const Stars = () => {
  /*const ref = useRef();
  const sphere = random.inSphere(new Float32Array
    (5000), { radius: 1.2})
    
    useFrame(( State, delta)=>{
      ref.current.rotation.x -= delta / 10;
      ref.current.rotation.y -= delta / 15;
    })*/
  return (
    <div>stars</div>
    
    /*<group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3}
      frustumCulled {...props}>
        <PointMaterial
        transparent
        color="#f272c8"
        size={0.002}
        sizeAttenuation={true}
        depthWrite={false}
        />
        </Points>
    </group>
  )
}
const StarsCanvas = () =>{
  return(
    <div className='w-full h-auto  absolute inset-0
    z-[-1]'>
      <Canvas camera={{ position:[0, 0, 1]}}>
        <Suspense fallback={null}>
          <Stars/>

        </Suspense>
        <preload all />
      </Canvas>

    </div>*/
  )
}
export default Stars;

