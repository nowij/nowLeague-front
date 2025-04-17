<template>
  <n-card>
    <div class="overflow-x-auto">
      <n-table>
        <thead class="text-center">
          <tr>
            <th class="w-[50px]">순위</th>
            <th>팀</th>
            <th>경기수</th>
            <th>승점</th>
            <th>승</th>
            <th>패</th>
          </tr>
        </thead>
        <tbody>
          <tr class="text-center" v-for="(rank, i) in rankingList" :key="i">
            <td>{{ rank.ranking }}</td>
            <td>{{ rank.teamName }}</td>
            <td>{{ rank.winPoint }}</td>
            <td>{{ rank.winPoint }}</td>
            <td>{{ rank.winCount }}</td>
            <td>{{ rank.loseCount }}</td>
          </tr>
        </tbody>
      </n-table>
    </div>
  </n-card>
</template>

<script setup>
import {NCard, NTable} from "naive-ui";
import {onMounted, ref} from "vue";
import { useCommonStore } from "@/stores/common.store";
import { useResultStore } from "@/stores/result.store";
import {storeToRefs} from "pinia";

const commonStore = useCommonStore();
const resultStore = useResultStore();
const { todaySeason } = storeToRefs(commonStore)
const { rankingList } = storeToRefs(resultStore)
const { monthValue } = defineProps({
  monthValue: String
})

const season = ref('')

onMounted(() => {
  getTodaySeason()
})

const getTodaySeason = () => {
  const params = {
    month : monthValue
  }

  console.log('확인 ', monthValue)

  commonStore.selectTodayRound(params);
  getTodayRanking(todaySeason.value)
}

const getTodayRanking = (code) => {
  const params = {
    season: code
  }
  console.log(params)
  resultStore.selectRanking(params)
}

</script>