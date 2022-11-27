import RippleText from '@Components/RippleText'
import { Canvas } from '@react-three/fiber'
import React, { useRef } from 'react'
import { Color } from 'three'

type Props = {}

const Ripple = (props: Props) => {
    let ref = useRef<any>()
    return (
        <Canvas
            ref={ref}
            onCreated={({ gl, scene }) => {
                scene.background = new Color('#373740')
            }}
        >
            <RippleText canvasRef={ref} />
        </Canvas>
    )
}

export default Ripple
