import TrailSphere from '@/components/TrailSphere'
import { Canvas } from '@react-three/fiber'
import React from 'react'

type Props = {}

const Trail = (props: Props) => {
    return (
        <Canvas>
            <TrailSphere />
        </Canvas>
    )
}

export default Trail
