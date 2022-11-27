import { OrbitControls, Sphere, Trail } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import React from 'react'
import { Mesh } from 'three'

type Props = {}

const TrailSphere = (props: Props) => {
    const sphere = React.useRef<Mesh>(null!)
    useFrame(({ clock }) => {
        const t = clock.getElapsedTime()

        sphere.current.position.x = Math.sin(t) * 3
        sphere.current.position.y = Math.cos(t) * 3

    })

    return (
        <>
            <OrbitControls />
            <Trail
                width={2}
                length={4}
                color={'#F8ff28'}
                attenuation={(t: number) => {
                    return t * t
                }}
            >
                <Sphere ref={sphere} args={[0.1, 32, 32]} position={[0, 3, 0]} >
                    <meshPhongMaterial color="#ff0000" opacity={0} transparent />
                </Sphere >
            </Trail >
        </>
    )
}

export default TrailSphere
