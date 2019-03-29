<template>
  <div class="panel content-panel">
    <div class="row">
      <div class="col-sm-12">
        <v-chart v-if="option && resultSet" :options="option"/>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ContentPanel",
  computed: {
    resultSet() {
      return this.$store.state.resultSet;
    },
    measuresQue() {
      return this.$store.getters.getStateMeasuresQue;
    },
    dimensionsQue() {
      return this.$store.getters.getStateDimensionsQue;
    },
    filtersQue() {
      return this.$store.getters.getStateFiltersQue;
    }
  },
  watch: {
    resultSet: function () {
      console.log(this.resultSet)
      if (this.resultSet) {
        const items = 24;
        this.option = {
          colors: this.colors,
          tooltip: {
            trigger: "axis",
            axisPointer: {
              type: "cross"
            }
          },
          grid: {
            right: "10%"
          },
          toolbox: {
            feature: {
              dataView: { show: true, readOnly: false },
              restore: { show: true },
              saveAsImage: { show: true }
            }
          },
          legend: {},
          xAxis: [
            {
              type: "category",
              axisTick: {
                alignWithLabel: true
              },
              data: []
            }
          ],
          yAxis: [],
          series: []
        };

        let legendData = [];
        this.measuresQue.forEach(element => {
          legendData.push(element.id);
        });
        this.option.legend.data = legendData;
        console.log(legendData, 'legendData')

        const xAxisId = this.dimensionsQue[0].id;
        let xAxisData = [];
        for (let i = 0; i < items && i < this.resultSet.length; i++) {
          if (this.resultSet[i].Measure === this.measuresQue[0].id) {
            xAxisData.push(this.resultSet[i][xAxisId]);
          }
        }
        this.option.xAxis[0].data = xAxisData;
        console.log(xAxisData, 'xAxis')

        let yAxis = [];
        let series = [];
        legendData.forEach((legend, index) => {

          yAxis.push({
            type: "value",
            name: legend,
            position: index? "right" : "left",
            axisLine: {
              lineStyle: {
                color: this.colors[index]
              }
            },
            axisLabel: {
              formatter: "{value}"
            }
          });
          series.push({
            name: legend,
            yAxisIndex: index,
            type: "line",
            data: []
          },)
          for (let i = 0; i < items && i < this.resultSet.length; i++) {
            if (this.resultSet[i].Measure === legend) {
              series[series.length - 1].data.push(this.resultSet[i].Value);
            }
          }
        });
        this.option.yAxis = yAxis;
        this.option.series = series;
      }
    }
  },
  data() {
    return {
      colors: ["#5793f3", "#d14a61", "#675bba"],
      option: null
    };
  }
};
</script>
