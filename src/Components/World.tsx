import * as THREE from 'three';
import { useRef } from 'react';
import { useLoader, useFrame } from '@react-three/fiber';
import { TextureLoader } from 'three/src/loaders/TextureLoader'
import color from '@assets/images/textures/watermelon/base_color.jpg';
import ambient_occlusion from '@assets/images/textures/watermelon/ambient_occlusion.jpg';
import normal from '@assets/images/textures/watermelon/normal.jpg';
import roughness from '@assets/images/textures/watermelon/roughness.jpg';
import { useStore } from '@zustand/store';

function World() {
  const worldMesh = useRef<any>();

  const { forward, backward, left, right } = useStore((state) => state)

  const textures = useLoader(TextureLoader, [
    color,
    normal,
    roughness,
    ambient_occlusion,
  ])

  const [colorMap, normalMap, roughnessMap, aoMap] = textures;

  textures.forEach((texture) => {
    texture.repeat.set(2, 2);
    texture.wrapS = THREE.RepeatWrapping;
    texture.wrapT = THREE.RepeatWrapping;
  })

  useFrame(() => {
    if (forward) {
      worldMesh.current.rotation.x += 0.01
    }
    if (backward) {
      worldMesh.current.rotation.x -= 0.01
    }
    if (left) {
      worldMesh.current.rotation.z += 0.01
    }
    if (right) {
      worldMesh.current.rotation.z -= 0.01
    }
  })

  return (
    <mesh
      ref={worldMesh}
      position={[0, -12, 0]}
    // rotation={new THREE.Euler(0, 0, 0)}
    >
      <sphereGeometry args={[10, 64, 64]} />
      <meshStandardMaterial
        map={colorMap}
        normalMap={normalMap}
        roughnessMap={roughnessMap}
        aoMap={aoMap}
      />
    </mesh>
  )
}

export default World;