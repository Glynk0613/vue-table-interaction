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

