<template>
  <v-layer>
    <v-rect :config="configRect1"></v-rect>
    <v-rect :config="configRect2"></v-rect>
  </v-layer>  
</template>

<script>
export default {
  data() {
    return {
      configRect1: {
        x: 10,
        y: 100,
        width: 100,
        height: 100,
        fill: 'gray',
        stroke: 'black'
      },
      configRect2: {
        x: 100,
        y: 100
      }
    };
  }
}
</script>

<style>

</style>