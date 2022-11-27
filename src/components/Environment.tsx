import { useLoader, useFrame } from '@react-three/fiber';
import { TextureLoader } from 'three/src/loaders/TextureLoader'
import sky from '@/assets/images/textures/sky.jpg';
import * as THREE from 'three';
import { useRef } from 'react';


function Environment() {
  const myMesh = useRef<any>();
  const colorMap = useLoader(TextureLoader, sky)

  useFrame(({ clock }) => {
    myMesh.current.rotation.y = clock.getElapsedTime() / 20
  })

  return (
    <mesh ref={myMesh}>
      <sphereGeometry args={[20, 32, 32]} />
      <meshStandardMaterial map={colorMap} side={THREE.BackSide} />
    </mesh>
  )
}

export default Environment;