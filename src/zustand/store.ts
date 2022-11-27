import create, { StateCreator } from 'zustand'

interface IMovementState {
  forward: boolean,
  backward: boolean,
  left: boolean,
  right: boolean,
  startMovement: (direction: string) => void,
  endMovement: (direction: string) => void,
}

const createMovementSlice: StateCreator<IMovementState> = (set) => ({
  forward: false,
  backward: false,
  left: false,
  right: false,
  startMovement: (direction: string) => set((state) => ({ [direction]: true })),
  endMovement: (direction: string) => set((state) => ({ [direction]: false })),
})

export const useStore = create<IMovementState>()((...a) => ({
  ...createMovementSlice(...a),
}))