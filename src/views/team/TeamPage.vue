<template>
  <div class="max-w-screen-xl mx-auto px-4 py-8">
    <div class="grid gap-8 md:grid-cols-3">
      <div class="md_col-span-1">
        <div class="mb-4 flex items-center gap-2">
          <UsersIcon class="h-5 w-5 text-purple-500" />
          <h2 class="text-xl font-semibold">팀 목록</h2>
        </div>
        <!-- 팀 목록 -->
        <n-card class="overflow-hidden rounded-lg">
          <div class="divide-y">
            <n-button v-for="(team, i) in teamList" :key="i"
                class="flex w-full items-center justify-start gap-3 rounded-none px-4 py-3 text-left" @click="setTeamSelected(team)" size="large">{{ team.name }}</n-button>
          </div>
        </n-card>
      </div>

      <!-- 오른쪽 -->
      <div class="md:col-span-2">
        <div class="mb-4 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <div class="flex items-center gap-2">
            <TrophyIcon class="h-5 w-5 text-orange-500" />
            <h2 v-if="!isSelect" class="text-xl font-semibold"> 팀을 선택하세요. </h2>
            <h2 v-if="isSelect" class="text-xl font-semibold"> {{ selectedTeam }} 경기 결과 </h2>
          </div>

          <div class="w-full sm:w-2/5 flex">
              <n-select v-model:value="searchSeason"
                        :options="seasonOptions" placeholder="선택하세요.">
              </n-select>
              <n-select v-model:value="searchRound"
                        :options="roundOptions" placeholder="선택하세요.">
              </n-select>
          </div>
        </div>
        <!-- 선택 -->
        <n-card v-if="isSelect">
          <div class="p-1" v-for="(recentResult, i) in recentResultList" :key="i">
            <ScheduleCard :schedule-value="recentResult"></ScheduleCard>
          </div>
        </n-card>
        <!-- 선택 안 함 -->
        <n-card v-if="!isSelect">
          <div class="flex h-[300px] items-center justify-center p-6 text-center">
            <p class="text-gray-500">왼쪽에서 팀을 선택하면 해당 팀의 경기 결과를 볼 수 있습니다.</p>
          </div>
        </n-card>
      </div>
    </div>
  </div>
</template>

<script setup>
import { UsersIcon, TrophyIcon } from "lucide-vue-next";
import { NCard, NButton, NSelect, NBadge } from "naive-ui";
import {storeToRefs} from "pinia";
import {useCommonStore} from "@/stores/common.store";
import { useResultStore} from "@/stores/result.store";
import {computed, onMounted, ref} from "vue";
import { ScheduleCard } from "@/views/shedule";

const commonStore = useCommonStore()
const resultStore = useResultStore()
const { teamList, seasonList, roundList } = storeToRefs(commonStore)
const { recentResultList } = storeToRefs(resultStore)
const isSelect = ref(false)
const selectedTeam = ref('')
const searchSeason = ref('')
const searchRound = ref('')

const seasonOptions = computed(() => {
  return changeNaiveSelectOptions(seasonList.value)
})
const roundOptions = computed(() => {
  return changeNaiveSelectOptions(roundList.value)
})

onMounted(() => {
  getTeamList()
  getSeasonList()
  getRoundList()
})

const getTeamList = () => {
  commonStore.selectTeams()
}
const getSeasonList = () => {
  commonStore.selectSeasons()
}
const getRoundList= () => {
  commonStore.selectRounds()
}

const setTeamSelected = (object) => {
  isSelect.value = true
  selectedTeam.value = object.name

  const params = {
    team: object.code
  }
  // API 호출
  resultStore.selectRecentResult(params);
}

// naive 형식에 맞춤
const changeNaiveSelectOptions = (list) => {
  if (!Array.isArray(list)) {
    return [];
  }
  return list.map(data => ({
    label: data.name,
    value: data.code
  }));
}
</script>