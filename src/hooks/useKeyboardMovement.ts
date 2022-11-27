import { useEffect } from "react"
import { useStore } from "@/zustand/store";

enum actionByKey {
  KeyW = 'forward',
  KeyS = 'backward',
  KeyA = 'left',
  KeyD = 'right',
  ArrowUp = 'forward',
  ArrowDown = 'backward',
  ArrowLeft = 'left',
  ArrowRight = 'right'
}

export const useKeyboardMovement = () => {
  const { startMovement, endMovement } = useStore((state) => state)


  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (actionByKey[e.code as keyof typeof actionByKey]) {
        startMovement(actionByKey[e.code as keyof typeof actionByKey])
      }
    }
    const handleKeyUp = (e: KeyboardEvent) => {
      if (actionByKey[e.code as keyof typeof actionByKey]) {
        endMovement(actionByKey[e.code as keyof typeof actionByKey])
      }
    }

    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('keyup', handleKeyUp);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('keyup', handleKeyUp);
    }
  }, [startMovement, endMovement])

}