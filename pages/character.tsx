import { Suspense } from 'react';
import Mannequin from '../components/Mannequin';
import { Canvas } from '@react-three/fiber';
import { Sky, Environment, OrbitControls } from '@react-three/drei';

export interface ICharacterControllerProps {
}

export default function CharacterController (props: ICharacterControllerProps) {
  return (
    <div>
        <Canvas style={{width: "100vw", height: "100vh"}}>
            <Suspense fallback={null}>
                <Mannequin />
                <Sky distance={450000} sunPosition={[0, 1, 0]} inclination={0} azimuth={0.25} {...props} />
                <Environment files="hdri/quarry.hdr" />
                <OrbitControls makeDefault />
                <mesh rotation-x={Math.PI * -0.5}>
                    <planeBufferGeometry args={[100, 100]} />
                    <meshStandardMaterial color="#59788e" />
                </mesh>
            </Suspense>
        </Canvas>
    </div>
  );
}
