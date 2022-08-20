import * as THREE from 'three';
import { OrbitControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import Duck from '@Components/Duck';
import FreeMovement from '@Components/FreeMovement';
import { useKeyboardMovement } from '@hooks/useKeyboardMovement';

function FreeWalk() {
  useKeyboardMovement();

  return (
    <Canvas>
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <planeGeometry args={[40, 40, 40, 40]} />
        <meshStandardMaterial color="#000" side={THREE.BackSide} wireframe />
      </mesh>
      <OrbitControls />
      <pointLight position={[10, 10, 10]} intensity={0.5} />
      <ambientLight intensity={0.2} />
      <FreeMovement>
        <Duck position={[0, 0, 0,]} />
      </FreeMovement>
    </Canvas>
  )
}

export default FreeWalk;
