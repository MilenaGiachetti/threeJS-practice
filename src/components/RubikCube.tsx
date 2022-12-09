import { Mesh } from 'three';
import { useRef } from 'react';
import { OrbitControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import RubikPiece from '@/components/RubikPiece';

type Cube = [number, number, number]
const DIMENSIONS = 3;

enum fixedAxis {
    x = "x",
    y = "y",
    z = "z"
}

const fixedMovementRelation = {
    [fixedAxis.x]: { pos1: "y", pos2: "z" },
    [fixedAxis.y]: { pos1: "x", pos2: "z" },
    [fixedAxis.z]: { pos1: "x", pos2: "y" },
}


const RubikCube = () => {
    const itemsRef = useRef<any>([]);
    const selectedPieces = useRef<any>(null)
    const allPieces = useRef<any>(null)

    const getCube = (): Cube[] => {
        const cube = [];
        for (let i = 0; i < DIMENSIONS; i++) {
            for (let j = 0; j < DIMENSIONS; j++) {
                for (let k = 0; k < DIMENSIONS; k++) {
                    cube.push([i, j, k] as Cube)
                }
            }
        }
        return cube;
    }

    const getCubeCoords = (): any => {
        const cube: any = {};
        for (let i = 0; i < DIMENSIONS; i++) {
            for (let j = 0; j < DIMENSIONS; j++) {
                for (let k = 0; k < DIMENSIONS; k++) {
                    cube[`${i}${j}${k}`] = {
                        [fixedAxis.x]: i,
                        [fixedAxis.y]: j,
                        [fixedAxis.z]: k
                    }
                }
            }
        }
        return cube;
    }
    const positions = useRef<any>(getCubeCoords());

    let transformation = (coord1: number, coord2: number) => {
        let movementsBorder = ['22', '02', '00', '20'];
        let movementsCenter = ['12', '01', '10', '21'];
        // let movementsBorder = ['22', '20', '00', '02'];
        // let movementsCenter = ['12', '21', '10', '01'];

        let search: string = `${coord1}${coord2}`;
        let nextMovement;
        let index = movementsBorder.findIndex((el) => el === search);
        if (index === -1) {
            index = movementsCenter.findIndex((el) => el === search);
            if (index === -1) {
                nextMovement = search;
            } else {
                nextMovement = movementsCenter[index < movementsBorder.length - 1 ? index + 1 : 0];
            }
        } else {
            nextMovement = movementsBorder[index < movementsBorder.length - 1 ? index + 1 : 0];
        }
        let [newCoord1, newCoord2] = nextMovement.split("")
        return { newCoord1, newCoord2 }
    }

    const rotate = (axis: fixedAxis, row: number) => {
        selectedPieces.current.rotation.set(0, 0, 0);
        const members = itemsRef.current.filter(({ id }: { id: any }) => positions.current[id][axis] === row)
        members.forEach(({ mesh, id }: { mesh: any, id: any }) => {
            let movementAxis = fixedMovementRelation[axis];
            let { newCoord1, newCoord2 } = transformation(positions.current[id][movementAxis.pos1], positions.current[id][movementAxis.pos2])
            positions.current[id][movementAxis.pos1] = +newCoord1;
            positions.current[id][movementAxis.pos2] = +newCoord2;
            selectedPieces.current.attach(mesh)
        })
        if (axis === fixedAxis.x) {
            selectedPieces.current.rotation[axis] += Math.PI / 2;
        } else if (axis === fixedAxis.y) {
            selectedPieces.current.rotation[axis] -= Math.PI / 2;
        } else {
            selectedPieces.current.rotation[axis] += Math.PI / 2;
        }
        selectedPieces.current.updateMatrixWorld();
        members.forEach(({ mesh, id }: { mesh: any, id: any }) => {
            allPieces.current.attach(mesh)
        })
    }

    const handleHoverEnter = (axis: fixedAxis, row: number) => {
        const members = itemsRef.current.filter(({ id }: { id: any }) => positions.current[id][axis] === row)
        members.forEach(({ mesh }: { mesh: any }) => {
            mesh?.material.forEach((el: any) => {
                el.emissiveIntensity = 0.2
            })
        })
        members.forEach(({ mesh }: { mesh: any }) => {
            allPieces.current.attach(mesh)
        })
    }

    const handleHoverOut = (axis: fixedAxis, row: number) => {
        const members = itemsRef.current.filter(({ id }: { id: any }) => positions.current[id][axis] === row)
        members.forEach(({ mesh }: { mesh: any }) => {
            mesh?.material.forEach((el: any) => {
                el.emissiveIntensity = 0
            })
        })
        members.forEach(({ mesh }: { mesh: any }) => {
            allPieces.current.attach(mesh)
        })
    }

    return (
        <>
            <div className='c-rubik-cube__menu'>
                <h2 className='c-rubik-cube__menu-title'>Rotation axis</h2>
                <div className='c-rubik-cube__menu-container'>
                    {
                        Object.values(fixedAxis).map((axis) => (
                            <div className='c-rubik-cube__axis' key={axis}>
                                <p
                                    className='c-rubik-cube__axis-title'
                                    onMouseEnter={() => handleHoverEnter(axis, 0)}
                                    onMouseLeave={() => handleHoverOut(axis, 0)}
                                >
                                    {axis.toUpperCase()}
                                </p>
                                {
                                    Array.from(Array(DIMENSIONS).keys()).map((el) => (
                                        <button
                                            className='c-rubik-cube__button'
                                            key={`${axis}-${el}`}
                                            onClick={() => rotate(axis, el)}
                                            onMouseEnter={() => handleHoverEnter(axis, el)}
                                            onMouseLeave={() => handleHoverOut(axis, el)}
                                        >
                                            {el + 1}
                                        </button>
                                    ))
                                }
                            </div>
                        ))
                    }
                </div>

            </div>
            <Canvas>
                <color attach="background" args={['#404258']} />
                <ambientLight intensity={0.8} />
                <OrbitControls />
                <group ref={selectedPieces} />
                <group ref={allPieces}>
                    {
                        getCube().map(([x, y, z]: Cube, i) => {
                            const uid = `${x}${y}${z}`;
                            return (
                                <RubikPiece
                                    key={uid}
                                    ref={(el: Mesh) => (itemsRef.current.push({ id: uid, mesh: el }))}
                                    {...{ x, y, z }}
                                />
                            )
                        })
                    }
                </group>
            </Canvas>
        </>
    )
}

export default RubikCube
