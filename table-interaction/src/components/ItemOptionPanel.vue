<template>
  <div class="item-option">
    <b-card>
      <b-card-body>
        <b-card-title>Test Task Data.{{title}}</b-card-title>
        <b-card-text v-if="itemType==MEASURES && mMode!=null">
          <b-dropdown id="down-measures" :text="measuresMode[mMode].label" variant="light" >
            <b-dropdown-item href="#" v-for="(element, index) in measuresMode" :key="element.id" @click="changeMeasuresMode(index)">
              {{ element.label }}
            </b-dropdown-item>
          </b-dropdown>    
        </b-card-text>

        <b-card-text v-if="itemType==DIMENSIONTS && dMode!=null">
          <b-dropdown id="down-dimensions" :text="dimensionsMode[dMode].label" variant="light" >
            <b-dropdown-item href="#" v-for="(element, index) in dimensionsMode" :key="element.id" @click="changeDimensionsMode(index)">
              {{ element.label }}
            </b-dropdown-item>
          </b-dropdown>    
        </b-card-text>
        <b-card-text v-if="itemType==FILTERS && fMode!=null">
          <b-dropdown id="down-filters" :text="filtersMode[fMode].label" variant="light" >
            <b-dropdown-item href="#" v-for="(element, index) in filtersMode" :key="element.id" @click="changeFiltersMode(index)">
              {{ element.label }}
            </b-dropdown-item>
          </b-dropdown>
          <input v-model="fParam"/>
        </b-card-text>

      </b-card-body>
      <b-card-body class="btn-wrapper">
        <button href="#" @click="onButtonClick(true)" class="btn btn-primary mr-2 btn-sm">Ok</button>
        <button href="#" @click="onButtonClick(false)" class="btn btn-light btn-sm">Cancel</button>
      </b-card-body>
    </b-card>
  </div>
</template>

<script>
import {
  MeasuresMode,
  DimensionsMode,
  FiltersMode,
  MEASURES,
  DIMENSIONTS,
  FILTERS,
} from "../constants/index.js";

export default {
  name: "ItemOptionPanel",
  props: ['itemIndex', 'itemType'],
  data() {
    return {
      measuresMode: MeasuresMode,
      dimensionsMode: DimensionsMode,
      filtersMode: FiltersMode,
      MEASURES: MEASURES,
      DIMENSIONTS: DIMENSIONTS,
      FILTERS: FILTERS,
      mMode: null,
      dMode: null,
      fMode: null,
      fParam: null,
      title: null
    };
  },
  computed: {
    measuresQue () {
      return this.$store.getters.getStateMeasuresQue;
    },
    dimensionsQue () {
      return this.$store.getters.getStateDimensionsQue;
    },
    filtersQue () {
      return this.$store.getters.getStateFiltersQue;
    }
  },
  mounted: function () {
    switch(this.itemType) {
      case MEASURES:
        this.mMode = this.measuresQue[this.itemIndex].mode;
        this.title = this.measuresQue[this.itemIndex].label;
        break;
      case DIMENSIONTS:
        this.dMode = this.dimensionsQue[this.itemIndex].dMode;
        this.title = this.dimensionsQue[this.itemIndex].label;
        break;
      case FILTERS:
        this.fMode = this.filtersQue[this.itemIndex].fMode;
        this.fParam = this.filtersQue[this.itemIndex].fParam;
        this.title = this.filtersQue[this.itemIndex].label;
        break;
    } 
  },
  methods: {
    changeMeasuresMode(index) {
       this.mMode = index;
    },
    changeDimensionsMode(index) {
       this.dMode = index;
    },
    changeFiltersMode(index) {
       this.fMode = index;
    },
    onButtonClick(set) {
      if (set) {
        switch(this.itemType) {
          case MEASURES:
            this.measuresQue[this.itemIndex].mMode = this.mMode;
            break;
          case DIMENSIONTS:
            this.dimensionsQue[this.itemIndex].dMode = this.dMode;
            break;
          case FILTERS:
            this.filtersQue[this.itemIndex].fMode = this.fMode;
            this.filtersQue[this.itemIndex].fParam = this.fParam;
            break;
        }
      }
      this.$emit('close', null);
      
    }
  }
};
</script>
