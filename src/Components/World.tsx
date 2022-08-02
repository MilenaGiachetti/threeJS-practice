import { useLoader, useFrame } from '@react-three/fiber';
import { TextureLoader } from 'three/src/loaders/TextureLoader'
import color from '@assets/images/textures/grass/base_color.jpg';
import ambient_occlusion from '@assets/images/textures/grass/ambient_occlusion.jpg';
import height from '@assets/images/textures/grass/height.png';
import normal from '@assets/images/textures/grass/normal.jpg';
import roughness from '@assets/images/textures/grass/roughness.jpg';

import * as THREE from 'three';
import { useRef } from 'react';


function World() {
  const myMesh = useRef<any>();

  const textures = useLoader(TextureLoader, [
    color,
    normal,
    roughness,
    ambient_occlusion,
  ])

  const [colorMap, normalMap, roughnessMap, aoMap] = textures;
  colorMap.repeat.set(5, 5);
  colorMap.wrapS = THREE.RepeatWrapping;
  colorMap.wrapT = THREE.RepeatWrapping;

  normalMap.repeat.set(5, 5);
  normalMap.wrapS = THREE.RepeatWrapping;
  normalMap.wrapT = THREE.RepeatWrapping;

  roughnessMap.repeat.set(5, 5);
  roughnessMap.wrapS = THREE.RepeatWrapping;
  roughnessMap.wrapT = THREE.RepeatWrapping;

  aoMap.repeat.set(5, 5);
  aoMap.wrapS = THREE.RepeatWrapping;
  aoMap.wrapT = THREE.RepeatWrapping;


  // useFrame(({ clock }) => {
  //   myMesh.current.rotation.x = clock.getElapsedTime() / 20;
  //   myMesh.current.rotation.y = clock.getElapsedTime() / 20
  // })

  return (
    <mesh ref={myMesh} position={[0, -12, 0]}
      rotation={new THREE.Euler(-Math.PI / 4, 0, -Math.PI / 2)}>
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