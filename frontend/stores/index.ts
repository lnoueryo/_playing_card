import { defineStore } from 'pinia'
import { ref } from 'vue'
// import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
// import type { User } from "firebase/auth";

export const useStore = defineStore('index', () => {
  const width = ref(0)
  const height = ref(0)

  const updateDimensions = () => {
    width.value = window.innerWidth
    height.value = window.innerHeight
    const vh = window.innerHeight * 0.01
    document.documentElement.style.setProperty('--vh', `${vh}px`)
  }
  // const login = async(email: string, password: string) => {
  //   const auth = getAuth();
  //   try {
  //     const userCredential = await signInWithEmailAndPassword(auth, email, password)
  //     admin.value = userCredential.user;
  //     return admin.value;
  //   } catch (error: any) {
  //     return {
  //       error: {
  //         status: error.code,
  //         message: error.message
  //       }
  //     }
  //   }
  // }

  return { updateDimensions, width }
})