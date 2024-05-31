import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', {
  state: () => ({
    count: 12
  }),
  getters: {
    doubleCount: (state) => {
      return state.count
    },
  },
  actions: {
    increment() {
      return this.count++
    },
  },
})