import { createPinia } from 'pinia'

export const pinia = createPinia()

export default function setup() {
  return {
    plugins: [pinia]
  }
}