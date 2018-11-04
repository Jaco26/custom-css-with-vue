<template>
  <div>
    <div class="row">
      <div class="f1">
        <h1>Todo:</h1>
        <input type="text" v-model="description">
        <input type="text" v-model="level2">
        {{description}} {{level2}}
      </div>
      <div class="f1">
        <h1>Done:</h1>
      </div>
    </div>
  </div>
</template>

<script>
import { bindState } from '@/store/index'
export default {
  computed: {
    ...bindState('todos', ['description']),
    ...bindState('todos/level1', ['level2'])
  },

}
</script>

