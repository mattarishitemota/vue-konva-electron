<template>
  <div class="app">
    <div class="m-3 reload-button is-pulled-right">
      <b-tooltip label="Teams で最新のステータスを取得する" position="is-left">
        <b-button icon-right="reload" size="is-large" rounded @click="reload" />
      </b-tooltip>
    </div>
    <v-stage :config="configKonva">
      <status-map></status-map>
    </v-stage>
  </div>
</template>

<script>
import StatusMap from "./StatusMap.vue";
import LoginInfoForm from "./LoginInfoForm.vue"

export default {
  name: "app",
  components: {
    StatusMap,
    LoginInfoForm,
  },
  data() {
    return {
      configKonva: {
        width: 800,
        height: 600,
      }
    };
  },
  methods: {
    reload() {
      this.$buefy.modal.open({
          parent: this,
          component: LoginInfoForm,
          hasModalCard: true,
          events: {
            submit: (e) => console.log(e)
          },
          trapFocus: true
      })
    }
  },
};
</script>

<style>
.app canvas {
  border: solid !important;
}
.reload-button button {
  z-index: 1;
}
</style>
