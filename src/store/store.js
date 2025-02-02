import { create } from 'zustand'

const useStore = create((set) => ({
  isAnimating: false,
  isAnimationCompleted: false,
  setIsAnimating: (value) => set({ isAnimating: value }),
  setIsAnimationCompleted: (value) => set({ isAnimationCompleted: value }),
  isHomeAnimating: false,
  isHomeAnimationCompleted: false,
  setIsHomeAnimating: (value) => set({ isHomeAnimating: value }),
  setIsHomeAnimationCompleted: (value) => set({ isHomeAnimationCompleted: value }),
}))

export default useStore
