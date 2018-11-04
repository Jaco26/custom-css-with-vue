import Vue from 'vue'
import Vuex from 'vuex'

import todos from './todo'

Vue.use(Vuex);

export const store = new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production',
  modules: {
    todos,
  }
});

function reduceNamespace(namespace, key) {
  let mockState = store.state;
  return [...namespace.split('/'), key].reduce((a, b) => {
    mockState = mockState[b];
    return mockState;
  }, mockState);
}

export function bindState(namespace, items) {
  return items.reduce((accum, b) => {   
    accum[b] = {
      get: () => reduceNamespace(namespace, b),
      set: val => store.commit(namespace + '/setState', { key: b, data: val })
    }
    return accum;
  }, {});
};

export function setState(state, { key, data }) {  
  state[key] = data;
}
