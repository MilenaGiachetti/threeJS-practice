import { Canvas } from '@react-three/fiber';
import SceneEnvironment from '@Components/Environment';
import World from '@Components/World';
import Duck from '@Components/Duck';
import Camera from '@Components/Camera';

import { OrbitControls } from '@react-three/drei';
import * as THREE from 'three';
import { useKeyboardMovement } from '@hooks/useKeyboardMovement';

function Home() {
	useKeyboardMovement();

	return (
		<Canvas>
			<OrbitControls />
			<Camera fov={75} position={new THREE.Vector3(0, 2, 5)} />
			<pointLight position={[10, 10, 10]} intensity={0.5} />
			<ambientLight intensity={0.2} />
			<ambientLight color='#FD5E53' intensity={0.2} />
			<SceneEnvironment />
			<Duck position={[0, -2, 0,]} />
			<World />
		</Canvas>
	)
}

export default Home;