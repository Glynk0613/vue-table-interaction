<template>
  <div class="item-option">
    <b-card>
      <b-card-body>
        <b-card-title>Test Task Data.Scenario</b-card-title>
        <b-card-text v-if="itemType=='dimensions' && dMode!=null">
          <b-dropdown id="down-left" :text="dimensionsMode[dMode].label" variant="light" class="m-2">
            <b-dropdown-item href="#" v-for="(element, index) in dimensionsMode" :key="element.id" @click="changeDimensionsMode(index)">
              {{ element.label }}
            </b-dropdown-item>
          </b-dropdown>    
        </b-card-text>

      </b-card-body>
      <b-card-body>
        <button href="#" class="mr-2" @click="onButtonClick(true)">Ok</button>
        <button href="#" @click="onButtonClick(false)">Cancel</button>
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
  name: "ItemOptionPanel",
  props: ['itemIndex', 'itemType'],
  data() {
    return {
      measuresMode: MeasuresMode,
      dimensionsMode: DimensionsMode,
      filtersMode: FiltersMode,
      dMode: null
    };
  },
  computed: {
    dimensionsQue () {
      return this.$store.getters.getStateDimensionsQue;
    }
  },
  mounted: function () {
    if (this.itemIndex > -1) {
      this.dMode = this.dimensionsQue[this.itemIndex].dMode
    }
    console.log(this.itemIndex, this.itemType, this.dMode);
  },
  methods: {
    changeDimensionsMode(index) {
       this.dMode = index;
      // this.$store.dispatch("updateDimensionsQue", value);
    },
    onButtonClick(set) {
      if (set) {
        switch(this.itemType) {
          case 'dimensions':
            this.dimensionsQue[this.itemIndex].dMode = this.dMode;
            break;
        }
      }
      this.$emit('close', null);
      
    }
  }
};
</script>
