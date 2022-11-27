import { Vector3 } from 'three';
import { OrbitControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import Camera from '@Components/Camera';
import TreehouseModel from '@Components/Treehouse';

type Props = {}

const Treehouse = (props: Props) => {
    return (
        <Canvas shadows>
            <OrbitControls />
            <Camera fov={75} position={new Vector3(0, 2, 5)} />
            <pointLight position={[10, 10, 10]} intensity={0.5} />
            <ambientLight intensity={0.2} />
            <ambientLight color='#FD5E53' intensity={0.2} />
            <TreehouseModel position={[0, -10, 0]} />
        </Canvas>
    );
}

export default Treehouse
