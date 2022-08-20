import { Group, Quaternion, Vector3 } from 'three';
import { cloneElement, useEffect, useRef, useState } from 'react'
import { useFrame } from '@react-three/fiber';
import { useStore } from '@zustand/store'

type tEightPointMovementProps = {
  children: JSX.Element
}

type tActions = {
  [x: string]: THREE.AnimationAction | null;
}

function EightPointMovement({ children }: tEightPointMovementProps) {
  const characterRef = useRef<Group>()
  const { backward, forward, left, right } = useStore((state) => state)
  const [actions, setActions] = useState<tActions>()


  useFrame(() => {
    const quaternion = new Quaternion();
    let angle = 0;
    if (forward) {
      angle = Math.PI;
      if (left) {
        angle = Math.PI * 1.25;
      } else if (right) {
        angle = Math.PI * 0.75;
      }
    } else if (backward) {
      angle = 0;
      if (left) {
        angle = Math.PI * 1.75;
      } else if (right) {
        angle = Math.PI * 0.25;
      }
    } else if (left) {
      angle = Math.PI * 1.5;
    } else if (right) {
      angle = Math.PI * 0.5;
    }
    quaternion.setFromAxisAngle(new Vector3(0, 1, 0), angle);
    if (characterRef.current) {
      characterRef.current.quaternion.rotateTowards(quaternion, 0.1)
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

export default EightPointMovement
