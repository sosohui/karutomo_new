<template lang="html">
  <v-container pa-2>
    <v-navigation-drawer
      :width="480"
      right
      app
      clipped
      fixed
      floating
      style="background-color:#fafafa"
    >
      <v-container py-3 pr-3 pl-1>
        <v-card>
          <v-layout pa-2 column>
            <v-layout class="title font-weight-bold" pa-3>
              플레이 목록
            </v-layout>
            <v-layout>
              <v-layout column>
                <v-layout
                  v-for="score in scores"
                  px-2
                  py-1
                  row
                >
                  <v-btn style="width:98%; height:120px; border-radius:15px;" class="text-sm-left">
                      <v-icon
                        color="#79b3bf"
                        style="font-size:90px"
                        v-if="score.winner == 'soso'"
                      >
                        mood
                      </v-icon>
                      <v-icon
                        color="#79b3bf"
                        style="font-size:90px"
                          v-else-if="score.winner != 'soso'"
                      >
                        sentiment_dissatisfied
                      </v-icon>
                      <v-layout pa-2 column>
                        <v-flex
                          py-2
                          v-if="score.winner == 'soso'"
                          class="title"
                        >
                          WINNER
                        </v-flex>
                        <v-flex
                          py-2
                          v-else-if="score.winner != 'soso'"
                          class="title"
                        >
                          LOSER
                        </v-flex>
                        <v-flex
                          class="subheading"
                        >
                          2019/05/14
                        </v-flex>
                      </v-layout>
                  </v-btn>
                </v-layout>
              </v-layout>
            </v-layout>
          </v-layout>
        </v-card>
      </v-container>
    </v-navigation-drawer>

    <div id="chart" style="width:100%">
      <apexchart type="line" height="300" :options="chartOptions" :series="series"></apexchart>
    </div>

  </v-container>
</template>

<script>

  export default {
    data() {
      return {
        chartOptions: {
          chart: {
            toolbar: {
              show: false
            },
            zoom: {
              enabled: false
              }
            },
            dataLabels: {
              enabled: false
            },
            stroke: {
              curve: 'straight',
              colors: '#79b3bf'
            },
            grid: {
              row: {
                colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
                opacity: 0.5
              },
            },
            xaxis: {
              categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
            },
            yaxis: {
              min: 0,
              max: 100,
              tickAmount: 4
            }
        },
        series: [{
          name: "Desktops",
            data: [50, 41, 35, 51, 49, 62, 69, 81, 48,]
        }],
        scores : [
          { player: 'hui', winner: 'soso' },
          { player: 'karutomo', winner: 'karutomo' },
          { player: '조로', winner: 'soso' },
          { player: '마르코', winner: 'soso' }
        ]
      
      }
    },
    methods: {
    }
  }
</script>

<style scoped>
</style>
