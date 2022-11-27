import RorschachImage from '@/components/RorschachImage'
import React, { useState } from 'react'
import { Canvas } from '@react-three/fiber';

type tUniforms = {
    x: number,
    y: number,
    thickness: number,
}

enum eUniforms {
    X = 'x',
    Y = 'y',
    THICKNESS = 'thickness',
}
const Rorschach = () => {
    let [uniforms, setUniforms] = useState<tUniforms>({
        x: 30.0,
        y: 30.0,
        thickness: 0.01,
    })

    const updateVector = (vector: eUniforms, number: number) => {
        setUniforms((prevState) => ({
            ...prevState,
            [vector]: number
        }))
    }

    return (
        <main className='c-rorschach'>
            <div className='c-rorschach__controller'>
                <div className='c-rorschach__char'>
                    <label htmlFor='x'>X</label>
                    <input type="number" id="x" step="0.1" value={uniforms.x} onChange={(e) => { updateVector(eUniforms.X, +e.target.value) }} />
                </div>
                <div className='c-rorschach__char'>
                    <label htmlFor='Y'>Y</label>
                    <input type="number" id="y" step="0.1" value={uniforms.y} onChange={(e) => { updateVector(eUniforms.Y, +e.target.value) }} />
                </div>
                <div className='c-rorschach__char'>
                    <label htmlFor='thickness'>THICKNESS</label>
                    <input type="number" id="thickness" step="0.01" value={uniforms.thickness} min={0.01} onChange={(e) => { updateVector(eUniforms.THICKNESS, +e.target.value) }} />
                </div>
            </div>

            <Canvas>
                <RorschachImage uniforms={uniforms} />
            </Canvas>
        </main>

    )
}

export default Rorschach
