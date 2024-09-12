import { create } from 'zustand'

const useStore = create((set) => ({
  isHidden: false,
  isDisplay: false,
  setIsHidden: (value) => set({ isHidden: value }),
  setIsDisplay: (value) => set({ isDisplay: value }),
}))

export default useStore
