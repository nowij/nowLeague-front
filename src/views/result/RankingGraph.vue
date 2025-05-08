<template>
  <div>
   <vue-echarts
       ref="rankingChart"
       :option="chartOptions"
       style="width:100%;height:600px;">
   </vue-echarts>
  </div>
</template>

<script setup>
import { VueEcharts } from "vue3-echarts";
import {nextTick, onMounted, ref} from "vue";
import {useResultStore} from "@/stores/result.store";
import {storeToRefs} from "pinia";

const resultStore = useResultStore()
const { rankingGraphList } = storeToRefs(resultStore)
const chartOptions = ref({})
const rankingChart = ref(null)

onMounted(async () => {
  await getRankingGraph('020')
})

const getRankingGraph = async (code) => {
  const params = {
    season: code
  }
  await resultStore.selectRankingGraph(params)
  setChartOptions(rankingGraphList.value)
}

const setChartOptions = (list) => {
  const roundsData = [...new Set(list.map(d => d.gameRound))]
  const teamsData = [...new Set(list.map(d => d.teamName))]
  const teamsColor = [...new Set(list.map(d => d.teamColor))]

  const seriesOption = teamsData.map(team => {
    const data = roundsData.map(round => {
      const rank = list.find(r => r.gameRound === round && r.teamName === team);
      return rank ? rank.ranking : null; // 없으면 null로 유지
    })

    return {
      name: team,
      type: 'line',
      data,
      connectNulls: true
    }
  })

  chartOptions.value = {
    title: {
      text: '팀별 순위 변동 그래프'
    },
    tooltip: {
      trigger: 'axis'
    },
    legend: {
      data: teamsData,
      icon: 'pin',
      bottom: 10
    },
    color: teamsColor,
    xAxis: {
      type: 'category',
      data: roundsData,
      name: '라운드'
    },
    yAxis: {
      type: 'value',
      inverse: true,
      name: '순위',
      min: 1,
      max: 7
    },
    series: seriesOption,
    animation: true
  }
}
</script>