import { Canvas } from '@react-three/fiber';
import SceneEnvironment from '@Components/Environment';
import Floor from '@Components/Floor';
import Duck from '@Components/Duck';

import { OrbitControls } from '@react-three/drei';
import * as THREE from 'three';

export default function Home() {

	return (
		<Canvas>
			<OrbitControls />
			<ambientLight intensity={0.2} />
			<ambientLight color='#FD5E53' intensity={0.2} />
			<SceneEnvironment />
			<Duck position={[0, -1, 0,]} />
			<Floor position={[0, -1, 0]} rotation={new THREE.Euler(-Math.PI / 2, 0, 0)} />
			<pointLight position={[10, 10, 10]} />
			{/* <Box position={[0, 0, 0]} /> */}
		</Canvas>
	)
}