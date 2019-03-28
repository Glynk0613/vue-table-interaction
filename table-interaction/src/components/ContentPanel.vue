<template>
  <div class="panel">
    <div class="row">
      <div class="col-sm-12">
        <v-chart v-if="option" :options="option"/>
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

    }
  },
  data() {
    return {
      colors: ["#5793f3", "#d14a61", "#675bba"],
      option: {
        color: ["#5793f3", "#d14a61", "#675bba"],
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "cross"
          }
        },
        grid: {
          right: "20%"
        },
        toolbox: {
          feature: {
            dataView: { show: true, readOnly: false },
            restore: { show: true },
            saveAsImage: { show: true }
          }
        },
        legend: {
          data: ["qq", "wt", "tt"]
        },
        xAxis: [
          {
            type: "category",
            axisTick: {
              alignWithLabel: true
            },
            data: [
              "1m",
              "2m",
              "3m",
              "4m",
              "5m",
              "6m",
              "7m",
              "8m",
              "9m",
              "10m",
              "11m",
              "12m"
            ]
          }
        ],
        yAxis: [
          {
            type: "value",
            name: "qq",
            min: 0,
            max: 250,
            position: "right",
            axisLine: {
              lineStyle: {
                color: "red"
              }
            },
            axisLabel: {
              formatter: "{value} ml"
            }
          },
          {
            type: "value",
            name: "wt",
            min: 0,
            max: 250,
            position: "right",
            offset: 80,
            axisLine: {
              lineStyle: {
                color: "grean"
              }
            },
            axisLabel: {
              formatter: "{value} ml"
            }
          },
          {
            type: "value",
            name: "温度",
            min: 0,
            max: 25,
            position: "left",
            axisLine: {
              lineStyle: {
                color: "red"
              }
            },
            axisLabel: {
              formatter: "{value} °C"
            }
          }
        ],
        series: [
          {
            name: "qq",
            type: "bar",
            data: [
              2.0,
              4.9,
              7.0,
              23.2,
              25.6,
              76.7,
              135.6,
              162.2,
              32.6,
              20.0,
              6.4,
              3.3
            ]
          },
          {
            name: "wt",
            type: "bar",
            yAxisIndex: 1,
            data: [
              2.6,
              5.9,
              9.0,
              26.4,
              28.7,
              70.7,
              175.6,
              182.2,
              48.7,
              18.8,
              6.0,
              2.3
            ]
          },
          {
            name: "tt",
            type: "line",
            yAxisIndex: 2,
            data: [
              2.0,
              2.2,
              3.3,
              4.5,
              6.3,
              10.2,
              20.3,
              23.4,
              23.0,
              16.5,
              12.0,
              6.2
            ]
          }
        ]
      }
    };
  }
};
</script>
