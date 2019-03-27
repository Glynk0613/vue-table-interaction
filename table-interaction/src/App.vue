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
  background-color: #e6e6e6;
}
.panel-query {
  width: 100%;
}
.btn-tooltip {
  font-size: 6px !important;
  border-radius: 50% !important;
  padding: 0 !important;
  width: 10px !important;
  height: 10px !important;
}
.item-label {
  font-size: 12px;
}
.item-wrapper {
  border-radius: 2px;
  border: 1px solid #e6e6e6;
  min-height: 30px;
}
.item-wrapper div{
  min-height: 15px;
}
.item-content {
  background-color: lightblue;
  border-radius: 2px;
  border: 1px solid rgb(99, 99, 194);
  display: flex;
  margin: 2px;
}
.item-model {
  background-color: white;
  font-size: 10px;
  margin: 3px;
  padding: 1px 5px;
  border-radius: 2px;
}
</style>
