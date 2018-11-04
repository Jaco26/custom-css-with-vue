import { setState } from './index'

const level1 = {
  namespaced: true,
  state: {
    level2: 'asdf',
  },
  mutations: {
    setState,
  }
}

export default {
  namespaced: true,
  state: {
    description: 'Hello',
    date: null,
  },
  modules: {
    level1
  },
  mutations: {
    setState,
  }

}