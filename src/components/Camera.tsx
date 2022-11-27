import { OrthographicCamera } from '@react-three/drei';
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
    <OrthographicCamera makeDefault {...props} zoom={75} near={-10} />
  )
}

export default Camera