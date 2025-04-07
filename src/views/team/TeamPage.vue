<template>
  <div class="container mx-auto px-4 py-8">
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
                class="flex w-full items-center justify-start gap-3 rounded-none px-4 py-3 text-left" @click="setTeamSelected(team.name)">{{ team.name }}</n-button>
          </div>
        </n-card>
      </div>

      <!-- 오른쪽 -->
      <div class="md:col-span-2">
        <div class="mb-4 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <div class="flex items-center gap-2">
            <TrophyIcon class="h-5 w-5 text-orange-500" />
            <h2 v-if="!isSelect" class="text-xl font-semibold"> 팀을 선택하세요. </h2>
            <h2 v-if="isSelect" class="text-xl font-semibold"> {{ selectedTeam}} </h2>
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
          <div class="p-4">
            <div class="space-y-4">
              <n-card class="overflow-hidden">
                <div class="p-0">
                  <div class="border-b border-gray-100 bg-gray-50 px-4 py-2">
                    <div class="flex items-center justify-between">
                      <span class="text-sm font-medium">2023-04-04</span>
                    </div>
                  </div>
                  <div class="p-4">
                    <div class="grid grid-cols-3 items-center gap-2">
                      <div class="text-right">
                        <p class="truncate">{game.homeTeam}</p>
                      </div>
                      <div class="flex justify-center">
                        <div class="flex items-center gap-2">
                          <span class="text-lg">{game.homeScore}</span>
                          <span class="text-xs text-gray-400">:</span>
                          <span class="text-lg">{game.awayScore}</span>
                        </div>
                      </div>
                      <div class="text-left">
                        <p class="truncate">{game.awayTeam}</p>
                      </div>
                    </div>
                </div>
                </div>
              </n-card>
            </div>
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
import {computed, onMounted, ref} from "vue";

const commonStore = useCommonStore()
const { teamList, seasonList, roundList } = storeToRefs(commonStore)
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

const setTeamSelected = (name) => {
  isSelect.value = true
  selectedTeam.value = name
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