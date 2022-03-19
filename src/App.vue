<template>
  <v-stage :config="configKonva">
    <status-map></status-map>
  </v-stage>
</template>

<script>
import StatusMap from './StatusMap.vue'

export default {
  name: 'app',
  components: {
    StatusMap
  },
  data() {
    return {
      configKonva: {
        width: 200,
        height: 200
      }
    };
  }
}
</script>

<style>
</style>
