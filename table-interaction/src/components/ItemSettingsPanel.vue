<template>
  <div class="item-settings">
    <b-card>
      <b-card-body>
        <b-card-title>Test Task Data.Scenario</b-card-title>
        <b-card-text>
          
        </b-card-text>

      </b-card-body>
    </b-card>
  </div>
</template>

<script>
import {
  MeasuresMode,
  DimensionsMode,
  FiltersMode
} from "../constants/index.js";

export default {
  name: "ItemSettingsPanel",
  data() {
    return {
      measuresMode: MeasuresMode,
      dimensionsMode: DimensionsMode,
      filtersMode: FiltersMode
    };
  },
};
</script>
