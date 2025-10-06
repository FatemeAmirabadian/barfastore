import { create } from "zustand";

export const useGalleryStore = create((set) => ({
  images: [],          
  isOpen: false,     
  currentIndex: 0,   

  openModal: (images, index = 0) =>
    set({ images, currentIndex: index, isOpen: true }),

  closeModal: () => set({ isOpen: false }),

  nextImage: () =>
    set((state) => ({
      currentIndex: (state.currentIndex + 1) % state.images.length,
    })),

  prevImage: () =>
    set((state) => ({
      currentIndex: (state.currentIndex - 1 + state.images.length) % state.images.length,
    })),
}));
