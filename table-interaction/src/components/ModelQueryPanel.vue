<template>
  <div class="panel">
    <div class="panel-model">
      <div class="panel-titlebar">
        <i class="fa fa-circle"></i>
        <span class="ml-2">Model</span>
      </div>
      <div class="panel-content">
        <input type="text" class="search-box" placeholder="Enter your name"/>
        <div v-b-toggle.collapse_left class="item-root mt-2" @click="showCollapse = !showCollapse">
          <i v-if="showCollapse" class="fa fa-angle-down mr-1"></i>
          <i v-else class="fa fa-angle-right mr-1"></i>

          <span>Test Task Data</span>
        </div>
        <b-collapse id="collapse_left" class="mt-1">
          <div class="item-label ml-2">Meaures</div>
          <draggable v-model="measuresSrc" :group="{ name: 'measures', pull: 'clone', put: false}">
            <transition-group>
              <div v-for="(element, index) in measuresSrc" :key="'sm'+index" class="item-model">
                <span class="item-icon">#</span>
                <span>{{ element.id }}</span>
              </div>
            </transition-group>
          </draggable>
          <div class="item-label ml-2">Dimensions</div>
          <draggable
            v-model="dimensionsSrc"
            :group="{ name: dimensionsId, pull: 'clone', put: false}"
          >
            <transition-group>
              <div v-for="(element, index) in dimensionsSrc" :key="'sd'+index" class="item-model">
                <span class="item-icon">
                  <i class="fa fa-font"></i>
                </span>
                <span>{{ element.id }}</span>
              </div>
            </transition-group>
          </draggable>
        </b-collapse>
      </div>
    </div>
    <div class="panel-query">
      <b-tabs card v-if="showOptionMeasures">
        <b-tab title="Interactive Mode" active>
          <b-card-text>
            <div class="item-label">
              Meaures
              <b-button v-b-tooltip.hover title="Tooltip content2" class="btn-tooltip">?</b-button>
            </div>
            <div class="item-wrapper">
              <draggable v-model="measuresQue" group="measures" @change="changeMeasures">
                <transition-group>
                  <div
                    v-for="(element, index) in measuresQue"
                    :key="'qm'+index"
                    :class="element ? 'item-content' : 'item-blank'"
                  >
                    <div v-if="element" class="item-left">
                      <a class="item-drop" @click="toggleOptionMeasures(index)">
                        <i class="fa fa-caret-down"></i>
                      </a>
                      <ItemOptionPanel
                        v-if="showOptionMeasures[index]"
                        :itemType="measuresId"
                        :itemIndex="index"
                        @close="toggleOptionMeasures(index)"
                      />
                      <span class="item-mode">{{ measuresMode[element.mode].label }}</span>
                      <div class="item-model">
                        <span class="item-icon">#</span>
                        <span>{{ element.id }}</span>
                      </div>
                    </div>
                    <a v-if="element" class="item-remove" @click="removeMeasures(index)">
                      <i class="fa fa-times-circle"></i>
                    </a>
                  </div>
                </transition-group>
              </draggable>
            </div>

            <div class="item-label mt-2">
              Dimensions
              <b-button v-b-tooltip.hover title="Tooltip content2" class="btn-tooltip">?</b-button>
            </div>
            <div class="item-wrapper">
              <draggable v-model="dimensionsQue" :group="dimensionsId" @change="changeDimensions">
                <transition-group>
                  <div
                    v-for="(element, index) in dimensionsQue"
                    :key="'qd'+index"
                    :class="element ? 'item-content' : 'item-blank'"
                  >
                    <div v-if="element" class="item-left">
                      <a class="item-drop" @click="toggleOptionDimensions(index)">
                        <i class="fa fa-caret-down"></i>
                      </a>
                      <ItemOptionPanel
                        v-if="showOptionDemensions[index]"
                        :itemType="dimensionsId"
                        :itemIndex="index"
                        @close="toggleOptionDimensions(index)"
                      />
                      <div class="item-model">
                        <span class="item-icon">
                          <i class="fa fa-font"></i>
                        </span>
                        <span>{{ element.id }}</span>
                      </div>
                      <div class="item-mode">
                        <i
                          v-if="dimensionsMode[element.dMode].id=='asc'"
                          class="fa fa-sort-numeric-asc"
                        ></i>
                        <i
                          v-if="dimensionsMode[element.dMode].id=='desc'"
                          class="fa fa-sort-numeric-desc"
                        ></i>
                      </div>
                    </div>
                    <a v-if="element" class="item-remove" @click="removeDimensions(index)">
                      <i class="fa fa-times-circle"></i>
                    </a>
                  </div>
                </transition-group>
              </draggable>
            </div>

            <div class="item-label mt-2">
              Filters
              <b-button v-b-tooltip.hover title="Tooltip content" class="btn-tooltip">?</b-button>
            </div>
            <div class="item-wrapper">
              <draggable v-model="filtersQue" :group="dimensionsId" @change="changeFilters">
                <transition-group>
                  <div
                    v-for="(element, index) in filtersQue"
                    :key="'qf'+index"
                    :class="element ? 'item-content' : 'item-blank'"
                  >
                    <div v-if="element" class="item-left">
                      <a class="item-drop" @click="toggleOptionFilters(index)">
                        <i class="fa fa-caret-down"></i>
                      </a>
                      <ItemOptionPanel
                        v-if="showOptionFilters[index]"
                        :itemType="filtersId"
                        :itemIndex="index"
                        @close="toggleOptionFilters(index)"
                      />
                      <div class="item-model">
                        <span class="item-icon">
                          <i class="fa fa-font"></i>
                        </span>
                        <span>{{ element.id }}</span>
                      </div>
                      <div
                        class="item-mode"
                      >{{ filtersMode[element.fMode].label }}&nbsp;{{ element.fParam }}</div>
                    </div>
                    <a v-if="element" class="item-remove" @click="removeFilters(index)">
                      <i class="fa fa-times-circle"></i>
                    </a>
                  </div>
                </transition-group>
              </draggable>
            </div>
          </b-card-text>
          <div class="btn-wrapper">
            <button class="btn-query btn btn-primary btn-sm" @click="excute">Run Query</button>
          </div>

        </b-tab>
        <b-tab title="SQL Mode">
          <b-card-text>Tab Contents 2</b-card-text>
        </b-tab>
      </b-tabs>
      
    </div>
  </div>
</template>

<script>
import draggable from "vuedraggable";
import ItemOptionPanel from "./ItemOptionPanel";
import {
  MeasuresMode,
  DimensionsMode,
  FiltersMode,
  MEASURES,
  DIMENSIONTS,
  FILTERS,
  UPDATE_RENDER_STATE
} from "../constants/index.js";

export default {
  name: "ModelQueryPanel",
  components: {
    draggable,
    ItemOptionPanel
  },
  data() {
    return {
      measuresMode: MeasuresMode,
      dimensionsMode: DimensionsMode,
      filtersMode: FiltersMode,
      measuresId: MEASURES,
      dimensionsId: DIMENSIONTS,
      filtersId: FILTERS,
      showOptionMeasures: null,
      showOptionDemensions: null,
      showOptionFilters: null,
      dataSet: null,
      showCollapse: false
    };
  },
  mounted: function() {
    const vm = this;
    $.ajax({
      type: "GET",
      url: "test.csv",
      dataType: "text",
      success: function(data) {
        vm.processData(data);
      }
    });
  },
  computed: {
    measuresSrc: {
      get() {
        return this.$store.getters.getStateMeasuresSrc;
      },
      set(value) {
        this.$store.dispatch("updateMeasuresSrc", value);
      }
    },
    dimensionsSrc: {
      get() {
        return this.$store.getters.getStateDimensionsSrc;
      },
      set(value) {
        this.$store.dispatch("updateDimensionsSrc", value);
      }
    },
    measuresQue: {
      get() {
        return this.$store.getters.getStateMeasuresQue;
      },
      set(value) {
        this.$store.dispatch("updateMeasuresQue", value);
      }
    },
    dimensionsQue: {
      get() {
        return this.$store.getters.getStateDimensionsQue;
      },
      set(value) {
        this.$store.dispatch("updateDimensionsQue", value);
      }
    },
    filtersQue: {
      get() {
        return this.$store.getters.getStateFiltersQue;
      },
      set(value) {
        this.$store.dispatch("updateFiltersQue", value);
      }
    }
  },
  methods: {
    changeMeasures(e) {
      if (e.added) {
        let dup = false;
        this.measuresQue.forEach((element, index) => {
          if (!element) return;
          if (element.id === e.added.element.id && index !== e.added.newIndex)
            dup = true;
        });
        if (dup) {
          this.removeMeasures(e.added.newIndex);
        }
        const blankIndex = this.measuresQue.indexOf(null);
        if (blankIndex > -1) {
          this.removeMeasures(blankIndex);
        }
      }
    },
    changeDimensions(e) {
      if (e.added) {
        let dup = false;
        this.dimensionsQue.forEach((element, index) => {
          if (!element) return;
          if (element.id === e.added.element.id && index !== e.added.newIndex)
            dup = true;
        });
        if (dup) {
          this.removeDimensions(e.added.newIndex);
        }
        const blankIndex = this.dimensionsQue.indexOf(null);
        if (blankIndex > -1) {
          this.removeDimensions(blankIndex);
        }
      }
    },
    changeFilters(e) {
      if (e.added) {
        let dup = false;
        this.filtersQue.forEach((element, index) => {
          if (!element) return;
          if (element.id === e.added.element.id && index !== e.added.newIndex)
            dup = true;
        });
        if (dup) {
          this.removeFilters(e.added.newIndex);
        }
        const blankIndex = this.filtersQue.indexOf(null);
        if (blankIndex > -1) {
          this.removeFilters(blankIndex);
        }
      }
    },
    removeMeasures(index) {
      let tempArray = this.measuresQue.slice(0);
      tempArray.splice(index, 1);
      this.$store.dispatch("updateMeasuresQue", tempArray);
    },
    removeDimensions(index) {
      let tempArray = this.dimensionsQue.slice(0);
      tempArray.splice(index, 1);
      this.$store.dispatch("updateDimensionsQue", tempArray);
    },
    removeFilters(index) {
      let tempArray = this.filtersQue.slice(0);
      tempArray.splice(index, 1);
      this.$store.dispatch("updateFiltersQue", tempArray);
    },
    toggleOptionMeasures(index) {
      this.showOptionMeasures[index] = !this.showOptionMeasures[index];
      this.showOptionMeasures = this.showOptionMeasures.slice(0);
    },
    toggleOptionDimensions(index) {
      this.showOptionDemensions[index] = !this.showOptionDemensions[index];
      this.showOptionDemensions = this.showOptionDemensions.slice(0);
    },
    toggleOptionFilters(index) {
      this.showOptionFilters[index] = !this.showOptionFilters[index];
      this.showOptionFilters = this.showOptionFilters.slice(0);
    },
    processData(data) {
      this.dataSet = [];
      let lines = data.split(/\r\n|\n/);
      let headings = lines[0].split(",");
      let dimensionSrcFromCSV = [];
      headings.forEach(element => {
        if (element !== "Measure" && element !== "Value") {
          dimensionSrcFromCSV.push({
            id: element,
            label: element,
            dMode: 1,
            fMode: 0,
            fParam: null
          });
        }
      });
      this.$store.dispatch("updateDimensionsSrc", dimensionSrcFromCSV);

      for (let i = 1; i < lines.length; i++) {
        let values = lines[i].split(",");
        let row = {};
        headings.forEach((head, index) => {
          row[head] = values[index];
        });
        this.dataSet.push(row);
      }

      this.showOptionMeasures = [];
      this.measuresSrc.forEach((element, index) => {
        this.showOptionMeasures[index] = false;
      });
      this.showOptionDemensions = [];
      this.dimensionsSrc.forEach((element, index) => {
        this.showOptionDemensions[index] = false;
      });
      this.showOptionFilters = [];
      this.dimensionsSrc.forEach((element, index) => {
        this.showOptionFilters[index] = false;
      });
    },
    excute() {
      let resultSet = [];
      this.dataSet.forEach(row => {
        let add = false;
        if (this.filtersQue[0] === null) {
          add = true;
        } else {
          this.filtersQue.forEach(filter => {
            if (filter.fMode === 0 && row[filter.id] === filter.fParam) {
              // is one of
              add = true;
            }
          });
        }
        if (add) {
          resultSet.push(row);
        }
      });
      this.dimensionsQue.forEach(element => {
        if (!element) return;
        if (!element.dMode) return;
        resultSet.sort((a, b) => {
          return element.dMode === 1
            ? a[element.id] - b[element.id]
            : b[element.id] - a[element.id];
        });
      });

      this.$store.commit(UPDATE_RENDER_STATE, resultSet);
    }
  }
};
</script>
