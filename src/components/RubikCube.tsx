import { Color, Group, Mesh, Quaternion, Vector3 } from 'three';
import RubikPiece from '@/components/RubikPiece';
import { useEffect, useRef } from 'react';
import { OrbitControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';

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
    const group = useRef<any>(null)
    const group2 = useRef<any>(null)

    console.log(itemsRef.current)
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
        console.log(coord1, coord2)
        let movementsBorder = ['22', '02', '00', '20'];
        let movementsCenter = ['12', '01', '10', '21'];
        // let movementsBorder = ['22', '20', '00', '02'];
        // let movementsCenter = ['12', '21', '10', '01'];

        let search: string = `${coord1}${coord2}`;
        console.log(search)
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
        console.log(nextMovement)
        let [newCoord1, newCoord2] = nextMovement.split("")
        return { newCoord1, newCoord2 }
    }

    const rotate = (axis: fixedAxis, row: number) => {
        group.current.rotation.set(0, 0, 0);
        const members = itemsRef.current.filter(({ id }: { id: any }) => positions.current[id][axis] === row)
        console.log(members)
        members.forEach(({ mesh, id }: { mesh: any, id: any }) => {
            let movementAxis = fixedMovementRelation[axis];
            console.log(movementAxis)
            console.log(movementAxis.pos1)
            console.log(positions.current[id])

            console.log(positions.current[id][movementAxis.pos1])

            let { newCoord1, newCoord2 } = transformation(positions.current[id][movementAxis.pos1], positions.current[id][movementAxis.pos2])
            positions.current[id][movementAxis.pos1] = +newCoord1;
            positions.current[id][movementAxis.pos2] = +newCoord2;
            group.current.attach(mesh)
        })
        if (axis === fixedAxis.x) {
            group.current.rotation[axis] += Math.PI / 2;
        } else if (axis === fixedAxis.y) {
            group.current.rotation[axis] -= Math.PI / 2;
        } else {
            group.current.rotation[axis] += Math.PI / 2;
        }
        group.current.updateMatrixWorld();
        members.forEach(({ mesh, id }: { mesh: any, id: any }) => {
            group2.current.attach(mesh)
        })
    }
    return (
        <>
            <div className='c-rubik-cube__menu'>
                <h2 className='c-rubik-cube__menu-title'>Rotation axis</h2>
                <div className='c-rubik-cube__menu-container'>

                    <div className='c-rubik-cube__axis'>
                        <p className='c-rubik-cube__axis-title'>X</p>
                        <button className='c-rubik-cube__button' onClick={() => rotate(fixedAxis.x, 0)}>Rotate X 0 </button>
                        <button className='c-rubik-cube__button' onClick={() => rotate(fixedAxis.x, 1)}>Rotate X 1</button>
                        <button className='c-rubik-cube__button' onClick={() => rotate(fixedAxis.x, 2)}>Rotate X 2</button>
                    </div>
                    <div className='c-rubik-cube__axis'>
                        <p className='c-rubik-cube__axis-title'>Y</p>
                        <button className='c-rubik-cube__button' onClick={() => rotate(fixedAxis.y, 0)}>Rotate Y 0 </button>
                        <button className='c-rubik-cube__button' onClick={() => rotate(fixedAxis.y, 1)}>Rotate Y 1</button>
                        <button className='c-rubik-cube__button' onClick={() => rotate(fixedAxis.y, 2)}>Rotate Y 2</button>
                    </div>
                    <div className='c-rubik-cube__axis'>
                        <p className='c-rubik-cube__axis-title'>Z</p>
                        <button className='c-rubik-cube__button' onClick={() => rotate(fixedAxis.z, 0)}>Rotate Z 0 </button>
                        <button className='c-rubik-cube__button' onClick={() => rotate(fixedAxis.z, 1)}>Rotate Z 1</button>
                        <button className='c-rubik-cube__button' onClick={() => rotate(fixedAxis.z, 2)}>Rotate Z 2</button>
                    </div>
                </div>

            </div>
            <Canvas>
                <color attach="background" args={['#404258']} />
                <ambientLight intensity={0.8} />
                <OrbitControls />
                <group ref={group} />
                <group ref={group2} />
                {
                    getCube().map(([x, y, z]: Cube, i) => {
                        const uid = `${x}${y}${z}`;
                        return (
                            <RubikPiece
                                key={uid}
                                {...{ x, y, z }}
                                ref={(el: Mesh) => (itemsRef.current.push({ id: uid, mesh: el }))}
                            />
                        )
                    })
                }
            </Canvas>
        </>
    )
}

export default RubikCube
