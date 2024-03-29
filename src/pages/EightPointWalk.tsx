import { Vector3 } from 'three';
import { OrbitControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import Camera from '@/components/Camera';
import Duck from '@/components/Duck';
import EightPointMovement from '@/components/EightPointMovement';
import SceneEnvironment from '@/components/Environment';
import World from '@/components/World';
import { useKeyboardMovement } from '@/hooks/useKeyboardMovement';

function EightPointWalk() {
	useKeyboardMovement();

	return (
		<Canvas>
			<OrbitControls />
			<Camera fov={75} position={new Vector3(0, 2, 5)} />
			<pointLight position={[10, 10, 10]} intensity={0.5} />
			<ambientLight intensity={0.2} />
			<ambientLight color='#FD5E53' intensity={0.2} />
			<SceneEnvironment />
			<EightPointMovement>
				<Duck position={[0, -2, 0,]} />
			</EightPointMovement>
			<World />
		</Canvas>
	)
}

export default EightPointWalk;
