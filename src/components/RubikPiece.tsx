import { forwardRef } from 'react';
import { BufferGeometry, Color, Material, Mesh, Vector3 } from 'three';

type Props = {
    x: number,
    y: number,
    z: number
}

const INNER_COLOR = "#000000";
const RubikPiece = forwardRef(({ x, y, z }: Props, ref: React.Ref<Mesh<BufferGeometry, Material | Material[]>>) => {
    const uid = `${x}${y}${z}`;

    {/* right, left, top, bottom, front, back */ }
    {/* green, blue, yellow, white, red, orange */ }
    const colorConfig = [
        { color: "#009b48", showColor: x === 2 },
        { color: "#0046ad", showColor: x === 0 },
        { color: "#ffd500", showColor: y === 2 },
        { color: "#ffffff", showColor: y === 0 },
        { color: "#b71234", showColor: z === 2 },
        { color: "#ff5800", showColor: z === 0 },
    ]

    let positionVector = new Vector3();
    positionVector.set(x - 1, y - 1, z - 1);

    return (
        <mesh position={positionVector} ref={ref}>
            <boxGeometry args={[0.95, 0.95, 0.95]} />
            {
                colorConfig.map((c, i) => (
                    <meshStandardMaterial
                        emissive={new Color(0xffffff)}
                        emissiveIntensity={0}
                        attach={`material-${i}`}
                        key={`${uid}-${c.color}`}
                        color={c.showColor ? c.color : INNER_COLOR}
                    />
                ))
            }
        </mesh>
    )
})

export default RubikPiece
