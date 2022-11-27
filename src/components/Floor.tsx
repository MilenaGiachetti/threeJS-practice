import { ThreeElements } from '@react-three/fiber';


function Floor(props: ThreeElements['mesh']) {
  return (
    <mesh
      {...props}
    >
      <planeGeometry args={[200, 200, 1]} />
      <meshStandardMaterial color='#9ecb91' />
    </mesh>
  )
}

export default Floor;