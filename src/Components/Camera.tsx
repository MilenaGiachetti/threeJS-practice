import { PerspectiveCamera } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

type Props = {
  fov: number,
  position: any
}

function Camera(props: Props) {
  useFrame((state) => {
    state.camera.lookAt(new THREE.Vector3(0, 0, 0))
    state.camera.updateProjectionMatrix()
  })

  return (
    <PerspectiveCamera makeDefault {...props} />
  )
}

export default Camera