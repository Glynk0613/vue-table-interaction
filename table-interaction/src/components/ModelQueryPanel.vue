<template>
  <div class="panel">
    <div class="panel-model">
      <b-form-input type="text" placeholder="Enter your name" />
      <div v-b-toggle.collapse1 class="item-root"> 
        > 
        <span> Test Task Data </span>
      </div>
      <b-collapse id="collapse1" class="mt-2">
        <div class="item-wrapper">Meaures</div>
        <draggable v-model="measuresSrc" :group="{ name: 'measures', pull: 'clone', put: false}">
          <transition-group>
            <div v-for="(element, index) in measuresSrc" :key="'sm'+index" class="item-model">
              #
              <span> {{ element.id }} </span>
            </div>
          </transition-group>
        </draggable>
        <div class="item-wrapper">Dimensions</div>
        <draggable v-model="dimensionsSrc" :group="{ name: 'dimensions', pull: 'clone', put: false}">
          <transition-group>
            <div v-for="(element, index) in dimensionsSrc" :key="'sd'+index" class="item-model">
              A
              <span> {{ element.id }} </span>
            </div>
          </transition-group>
        </draggable>
      </b-collapse>
    </div>
    <div class="panel-query">
      <b-tabs card>
        <b-tab title="Tab 1" active>
          <b-card-text>
          <div class="item-wrapper">
            Meaures
            <b-button v-b-tooltip.hover title="Tooltip content2" class="btn-tooltip">?</b-button>
          </div>
          <draggable v-model="meansuresQue" group="measures">
            <transition-group>
              <div v-for="(element, index) in meansuresQue" :key="'qm'+index" class="item-model">
                #
                <span> {{ element.id }} </span>
              </div>
            </transition-group>
          </draggable>

          <div class="item-wrapper">
            Dimensions
            <b-button v-b-tooltip.hover title="Tooltip content2" class="btn-tooltip">?</b-button>  
          </div>
          <draggable v-model="dimensionsQue" group="dimensions" @change="changeDimensions">
            <transition-group>
              <div v-for="(element, index) in dimensionsQue" :key="'qd'+index" class="item-model">
                A
                <span> {{ element.id }} </span>
              </div>
            </transition-group>
          </draggable>



          <div class="item-wrapper">
            Filters
            <b-button v-b-tooltip.hover title="Tooltip content" class="btn-tooltip">?</b-button>
          </div>
          <draggable v-model="filtersQue" group="dimensions" @change="changeFilters">
            <transition-group>
              <div v-for="(element, index) in filtersQue" :key="'qf'+index" class="item-model">
                A
                <span> {{ element.id }} </span>
              </div>
            </transition-group>
          </draggable>

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
      meansuresQue: [
        { id: "Model", label: "Model" },
        { id: "Period", label: "Period" },
        { id: "Region", label: "Region" },
        { id: "Scenario", label: "Scenario" }
      ],
      dimensionsQue: [
        { id: "Model", label: "Model" },
        { id: "Period", label: "Period" },
        { id: "Region", label: "Region" },
        { id: "Scenario", label: "Scenario" }
      ],
      filtersQue: [
        { id: "Model", label: "Model" },
        { id: "Period", label: "Period" },
        { id: "Region", label: "Region" },
        { id: "Scenario", label: "Scenario" }
      ]
    };
  },
  methods: {
    changeDimensions(e) {
      if (e.added) {
        let dup = false;
        this.dimensionsQue.forEach((element, index) => {
          if (element.id === e.added.element.id && index !== e.added.newIndex) dup = true;
        });
        if (dup) {
          this.dimensionsQue.splice(e.added.newIndex, 1);
        }
      }
    },
    changeFilters(e) {
      if (e.added) {
        let dup = false;
        this.filtersQue.forEach((element, index) => {
          if (element.id === e.added.element.id && index !== e.added.newIndex) dup = true;
        });
        if (dup) {
          this.filtersQue.splice(e.added.newIndex, 1);
        }
      }
    }

  }
};
</script>
