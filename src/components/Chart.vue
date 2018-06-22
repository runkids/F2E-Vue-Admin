<template>
  <canvas id="chart"></canvas>
</template>

<script>
import Chart from 'chart.js';

export default {
  methods: {
    initChart() {
      const ctx = document.getElementById('chart');
      this.$chart = new Chart(ctx, {
        type: 'line',
        data: {
          labels: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'],
          datasets: [
            { label: 'REVENUE',
              data: [65, 359, 280, 821, 536, 105, 140, 359, 280, 821, 536, 105],
              fill: false,
              borderColor: '#54bf8e',
              lineTension: 0.1,
            },
            { label: 'COST',
              data: [59, 80, 391, 265, 259, 80, 240, 80, 391, 265, 259, 80, 240],
              fill: false,
              borderColor: '#fd6769',
              lineTension: 0.1,
            },
            { label: 'INCOME',
              data: [165, 59, 180, 281, 56, 55, 40, 165, 59, 180, 281, 56],
              fill: false,
              borderColor: '#57a9e0',
              lineTension: 0.1,
            },
          ],
        },
        options: {
          legend: {
            position: 'bottom',
          },
        },
      });
    },

  },

  mounted() {
    this.initChart();
  },

  beforeDestroy() {
    this.$chart = this.$chart.destroy();
  },

};
</script>

<style lang="scss">
#chart{
  width:100%;
  max-height:100%;
  padding: 30px;
  box-sizing: border-box;
}
</style>
