<template>
  <div id="app">
    <ModelQueryPanel />
    <ContnetPanel />
  </div>
</template>

<script>
import ModelQueryPanel from "./components/ModelQueryPanel.vue";
import ContnetPanel from "./components/ContentPanel.vue";

export default {
  name: "app",
  components: {
    ModelQueryPanel,
    ContnetPanel
  }
};
</script>

<style>
#app {
  display: flex;
  background-color: lightgray;
}
.panel {
  flex: 1;
  border: 1px gray solid;
  margin: 5px;
  background-color: white;
  display: flex;
}
.panel-model {
  width: 300px;
  height: 500px;
  border-right: 1px gray solid;
}
.panel-query {
  width: 100%;
}
.btn-tooltip {
  font-size: 8px !important;
  border-radius: 50% !important;
  padding: 0 !important;
  width: 14px !important;
  height: 14px !important;
}
</style>
