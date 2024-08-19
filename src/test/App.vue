<template>
  <main>
    <button @click="show =!show">Toggle</button>
    <CollapseTransition>
      <div v-show="show" class="demo">
        <p>This is the content of the collapse transition</p>
        <p>This is the content of the collapse transition</p>
        <p>This is the content of the collapse transition</p>
        <p>This is the content of the collapse transition</p>
        <p>This is the content of the collapse transition</p>
        <p>This is the content of the collapse transition</p>
        <p>This is the content of the collapse transition</p>
        <p>This is the content of the collapse transition</p>
        <p>This is the content of the collapse transition</p>
        <p>This is the content of the collapse transition</p>
        <p>This is the content of the collapse transition</p>
        <p>This is the content of the collapse transition</p>
        <p>This is the content of the collapse transition</p>
        <p>This is the content of the collapse transition</p>
      </div>
    </CollapseTransition>
  </main>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import CollapseTransition from '../components/CollapseTransition.vue'
// import CollapseTransition from '../../dist/collapsetransition.js'

const show = ref(true)
</script>

<style scoped>
.demo {
  padding: 10px;
  background-color: #f5f5f5;
  width: 400px;
}
</style>
