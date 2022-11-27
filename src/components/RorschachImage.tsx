import { useRef } from "react";
import { extend, ReactThreeFiber, useFrame } from "@react-three/fiber";
import { shaderMaterial, OrbitControls } from "@react-three/drei";

const RorschachShaderMaterial = shaderMaterial(
    // Uniform
    {
        uTime: 0,
        uX: 30.0,
        uY: 30.0,
        uThickness: 0.01,
    },
    // Vertex Shader
    `
        varying vec2 vUv;
        void main() {
            vUv = uv;
            vec3 pos = position;
            gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0); 
        }
    `,
    // Fragment Shader
    `
        varying vec2 vUv;
        uniform float uX;
        uniform float uY;
        uniform float uThickness;

        void main() {
            vec2 wavedUv = vec2(
                vUv.x + sin(vUv.y * uY) * 0.1,
                vUv.y + sin(vUv.x * uX) * 0.1
            );
            float strength = 1.0 - step(uThickness, abs(distance(wavedUv, vec2(0.5)) - 0.25));
            gl_FragColor = vec4(vec3(strength), 1.0);
        }
    `
);

extend({ RorschachShaderMaterial });

declare global {
    namespace JSX {
        interface IntrinsicElements {
            rorschachShaderMaterial: ReactThreeFiber.Object3DNode<InstanceType<typeof RorschachShaderMaterial>, typeof RorschachShaderMaterial>
        }
    }
}

type tUniforms = {
    x: number,
    y: number,
    thickness: number,
}

type tRorschachImageProps = {
    uniforms: tUniforms
}

const RorschachImage = ({ uniforms }: tRorschachImageProps) => {
    const ref = useRef<any>();
    useFrame(({ clock }) => {
        ref.current.uTime = clock.getElapsedTime();
        ref.current.uX = uniforms.x;
        ref.current.uY = uniforms.y;
        ref.current.uThickness = uniforms.thickness;

    });
    return (
        <mesh>
            <OrbitControls />
            <planeBufferGeometry args={[5, 5, 16, 16]} />
            <rorschachShaderMaterial ref={ref} />
        </mesh>
    );
}

export default RorschachImage
