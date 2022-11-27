import { Group } from 'three';
import { cloneElement, useEffect, useRef, useState } from 'react'
import { useFrame } from '@react-three/fiber';
import { useStore } from '@/zustand/store'

type tFreeMovementProps = {
  children: JSX.Element
}

type tActions = {
  [x: string]: THREE.AnimationAction | null;
}

function FreeMovement({ children }: tFreeMovementProps) {
  const characterRef = useRef<Group>()
  const { backward, forward, left, right } = useStore((state) => state)
  const [actions, setActions] = useState<tActions>()

  useFrame(() => {
    if (characterRef.current) {
      let angle = - characterRef.current.rotation.y + Math.PI * 0.5;
      if (forward) {
        characterRef.current.position.x += Math.cos(angle) * 0.075;
        characterRef.current.position.z += Math.sin(angle) * 0.075;
      }
      if (backward) {
        characterRef.current.position.x -= Math.cos(angle) * 0.075;
        characterRef.current.position.z -= Math.sin(angle) * 0.075;
      }
      if (left) {
        characterRef.current.rotation.y += Math.PI * 0.01;
      }
      if (right) {
        characterRef.current.rotation.y -= Math.PI * 0.01;
      }
    }
  })

  useEffect(() => {
    if (actions && actions.walk && actions.idle && (forward || backward || left || right)) {
      actions.idle.stop();
      actions.walk.play();
    } else if (actions && actions.walk && actions.idle) {
      actions.idle.play();
      actions.walk.stop();
    }
  }, [forward, backward, left, right, actions])

  return (
    <>
      {cloneElement(
        children,
        {
          innerRef: characterRef,
          setActions
        }
      )}
    </>
  )
}

export default FreeMovement
