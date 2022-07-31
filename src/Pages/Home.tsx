import { Canvas } from '@react-three/fiber';
import Box from '@Components/Box';
import SkyBox from '@Components/SkyBox';

export default function Home() {
	return (
		<Canvas>
			<SkyBox />
			<ambientLight />
			<pointLight position={[10, 10, 10]} />
			<Box position={[-1.2, 0, 0]} />
			<Box position={[1.2, 0, 0]} />
			<Box position={[-1.2, 2.4, 0]} />
			<Box position={[1.2, 2.4, 0]} />
		</Canvas>
	)
}