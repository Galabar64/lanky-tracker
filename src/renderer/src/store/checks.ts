import { StateCreator } from 'zustand'
import { AllSlice, CheckSlice, CheckState, CheckValueState, donkResetFns } from './common'

export const initialChecks: CheckState = {
  checks: {}
}

const coreSlice: StateCreator<AllSlice, [], [], CheckSlice> = (set) => {
  donkResetFns.add(() => set(initialChecks))
  return {
    ...initialChecks,
    setCheck: (id, val) =>
      set((state) => {
        const newKey: Record<number, CheckValueState> = {}
        newKey[id] = val
        state = {
          ...state,
          checks: {
            ...state.checks,
            ...newKey
          }
        }
        return state
      })
  }
}

export default coreSlice
