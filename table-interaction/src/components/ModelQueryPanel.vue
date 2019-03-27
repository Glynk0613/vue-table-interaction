<template>
  <div class="panel">
    <div class="panel-model">
      <b-form-input type="text" placeholder="Enter your name"/>
      <div v-b-toggle.collapse1 class="item-root">
        >
        <span>Test Task Data</span>
      </div>
      <b-collapse id="collapse1" class="mt-2">
        <div class="item-label">Meaures</div>
        <draggable v-model="measuresSrc" :group="{ name: 'measures', pull: 'clone', put: false}">
          <transition-group>
            <div v-for="(element, index) in measuresSrc" :key="'sm'+index" class="item-model">
              <span class="item-icon">#</span>
              <span>{{ element.id }}</span>
            </div>
          </transition-group>
        </draggable>
        <div class="item-label">Dimensions</div>
        <draggable
          v-model="dimensionsSrc"
          :group="{ name: 'dimensions', pull: 'clone', put: false}"
        >
          <transition-group>
            <div v-for="(element, index) in dimensionsSrc" :key="'sd'+index" class="item-model">
              <span><i class="fa fa-font"></i></span>
              <span>{{ element.id }}</span>
            </div>
          </transition-group>
        </draggable>
      </b-collapse>
    </div>
    <div class="panel-query">
      <b-tabs card>
        <b-tab title="Tab 1" active>
          <b-card-text>
            <div class="item-label">
              Meaures
              <b-button v-b-tooltip.hover title="Tooltip content2" class="btn-tooltip">?</b-button>
            </div>
            <div class="item-wrapper">
              <draggable v-model="measuresQue" group="measures" @change="changeMeasures">
                <transition-group>
                  <div v-for="(element, index) in measuresQue" :key="'qm'+index" :class="element ? 'item-content' : 'item-blank'">
                    <div v-if="element" class="item-model">
                      <span class="item-icon">#</span>
                      <span>{{ element.id }}</span>
                    </div>
                    <a v-if="element" class="item-remove" @click="removeMeasures(index)">
                      <i class="fa fa-times-circle"></i>
                    </a>
                  </div>
                </transition-group>
              </draggable>
            </div>

            <div class="item-label">
              Dimensions
              <b-button v-b-tooltip.hover title="Tooltip content2" class="btn-tooltip">?</b-button>
            </div>
            <div class="item-wrapper">
              <draggable v-model="dimensionsQue" group="dimensions" @change="changeDimensions">
                <transition-group>
                  <div v-for="(element, index) in dimensionsQue" :key="'qd'+index" :class="element ? 'item-content' : 'item-blank'">
                    <div v-if="element" class="item-model">
                      <span><i class="fa fa-font"></i></span>
                      <span>{{ element.id }}</span>
                    </div>
                    <a v-if="element" class="item-remove" @click="removeDimensions(index)">
                      <i class="fa fa-times-circle"></i>
                    </a>
                  </div>
                </transition-group>
              </draggable>
            </div>

            <div class="item-label">
              Filters
              <b-button v-b-tooltip.hover title="Tooltip content" class="btn-tooltip">?</b-button>
            </div>
            <div class="item-wrapper">
              <draggable v-model="filtersQue" group="dimensions" @change="changeFilters">
                <transition-group>
                  <div v-for="(element, index) in filtersQue" :key="'qf'+index" :class="element ? 'item-content' : 'item-blank'">
                    <div v-if="element" class="item-model">
                      <span><i class="fa fa-font"></i></span>
                      <span>{{ element.id }}</span>
                    </div>
                    <a v-if="element" class="item-remove" @click="removeFilters(index)">
                      <i class="fa fa-times-circle"></i>
                    </a>
                  </div>
                </transition-group>
              </draggable>
            </div>
          </b-card-text>
        </b-tab>
        <b-tab title="Tab 2">
          <b-card-text>Tab Contents 2</b-card-text>
        </b-tab>
      </b-tabs>
    </div>
  </div>
</template>

<script>
import draggable from "vuedraggable";

export default {
  name: "ModelQueryPanel",
  components: {
    draggable
  },
  data() {
    return {
      measuresSrc: [
        { id: "price", label: "Price" },
        { id: "row_id", label: "Row Id" },
        { id: "units", label: "Units" }
      ],
      dimensionsSrc: [
        { id: "Model", label: "Model" },
        { id: "Period", label: "Period" },
        { id: "Region", label: "Region" },
        { id: "Scenario", label: "Scenario" }
      ],
      measuresQue: [null],
      dimensionsQue: [null],
      filtersQue: [null]
    };
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
      this.measuresQue.splice(index, 1);
      if (!this.measuresQue.length) {
        this.measuresQue = [null];
      }
    },
    removeDimensions(index) {
      this.dimensionsQue.splice(index, 1);
      if (!this.dimensionsQue.length) {
        this.dimensionsQue = [null];
      }
    },
    removeFilters(index) {
      this.filtersQue.splice(index, 1);
      if (!this.filtersQue.length) {
        this.filtersQue = [null];
      }
    }
  }
};
</script>
