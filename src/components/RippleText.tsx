import { useFrame, useLoader } from '@react-three/fiber';
import React, { useEffect, useRef, useState } from 'react'
import { BufferAttribute, TextureLoader, Vector3 } from 'three';
import { Sphere, Trail } from "@react-three/drei"
import circleSprite from "@/assets/images/sprite/circle-sprite.png";

type tRippleTextProps = {
    canvasRef: any
}
type tPoint = {
    x: number,
    y: number
}

const RippleText = ({ canvasRef }: tRippleTextProps) => {
    let [points, setPoints] = useState<any[]>([]);
    let refPoints = useRef<any>();
    let id = useRef<number>(0);
    // let ctx = useRef<any>();
    let data = {
        maxAge: 128,
        // size: 64,
        // radius: 6.4
    }

    const addPointMouse = (e: MouseEvent) => {
        id.current = ++id.current;
        setPoints((prevState) => [...prevState, { id: id.current, x: ((e.clientX / window.innerWidth) - 0.5) * 2, y: ((-e.clientY / window.innerHeight) + 0.5) * 2, age: 0 }]);
    }

    useEffect(() => {
        window.addEventListener('mousemove', addPointMouse);
        return () => {
            window.removeEventListener('mousemove', addPointMouse);
        }
    }, [])

    useFrame((state) => {
        points.forEach((point, i) => {
            point.age += 1;
            if (point.age > data.maxAge) {
                setPoints((prevState) => prevState.filter((prevPoint) => prevPoint.id !== point.id));
            }
        })
        if (refPoints.current) {
            let pointsPositions = points.length ? points.map(({ x, y }: tPoint) => {
                let vector = new Vector3();
                let pos = new Vector3();
                vector.set(x, y, 1);
                vector.unproject(state.camera);
                vector.sub(state.camera.position).normalize();
                let distance = -state.camera.position.z / vector.z;
                pos.copy(state.camera.position).add(vector.multiplyScalar(distance));
                return [vector.x, vector.y, 0]
            }).reduce((previousValue, currentValue) => [...previousValue, ...currentValue]) : [];
            refPoints.current.geometry.setAttribute('position', new BufferAttribute(new Float32Array(pointsPositions), 3));
            refPoints.current.geometry.attributes.position.needsUpdate = true;
        }
    })
    const sprite = useLoader(TextureLoader, circleSprite)

    return (
        <points ref={refPoints}>
            <bufferGeometry>
                <bufferAttribute attach={"attributes-position"} />
            </bufferGeometry>
            {/* Points should be diffuse & round with a shader */}
            <pointsMaterial
                map={sprite}
                transparent={true}
                sizeAttenuation={true}
                size={0.25}
                color={0xff00ff}
            />
        </points>
    )
}

export default RippleText
