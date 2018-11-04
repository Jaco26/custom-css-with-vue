
const deeper2 = {
  state: {
    thingThing: 'thing',
  },
}

const deeper1 = {
  modules: {
    deeper2
  }
}

const level1 = {
  state: {
    level2: 'asdf',
  },
  modules: {
    deeper1,
  }
}

export default {
  state: {
    description: 'Hello',
    date: null,
  },
  modules: {
    level1
  },
}