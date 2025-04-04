<template>
  <div class="container mx-auto px-4 py-8">
    <!-- 검색창 -->
    <div class="flex items-center gap-4">
      <n-card title="일정 검색">
        <div class="flex flex-col gap-4 sm:flex-row sm:items-end">
          <div class="grid w-full gap-2">
            <label class="text-sm font-medium text-gray-700">시즌</label>
            <n-select v-model="searchSeason" class="w-full">

            </n-select>
          </div>
          <div class="grid w-full gap-2">
            <label class="text-sm font-medium text-gray-700">라운드</label>
            <n-select class="w-full" v-model="searchRound" >
              <option value="" selected>전체</option>
              <option v-for="(round, i) in roundList" :key="i" value="round.code">
                {{round.korName}}
              </option>
            </n-select>
          </div>
          <n-button @click.self.prevent="doSearch" class="mt-2 sm:mt-0">
            <SearchIcon class="h-4 w-5" />검색
          </n-button>
        </div>
      </n-card>
      <!--    <select
              class="py-3 px-4 pe-9 block w-[120px] border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
              v-model="searchSeason"
          >
              <option v-for="(season, i) in seasonList" :key="i" value="season.seasonCode">
                  {{season.seasonName}}
              </option>
          </select>
          <select
              class="py-3 px-4 pe-9 block w-[120px] border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
              v-model="searchRound"
          >
            <option value="" selected>전체</option>
            <option v-for="(round, i) in roundList" :key="i" value="round.code">
              {{round.korName}}
            </option>
          </select>
          <button type="submit" @click.self.prevent="doSearch">
            <SearchIcon className="h-4 w-4" />
            조회
          </button>-->
    </div>

    <!-- 결과창 -->
    <div class="space-y-4">
      <div class="flex items-center justify-between">
        <div class="flex items-center gap-2">
          <CalendarIcon className="h-5 w-5 text-blue-500" />
          <h2 class="text-xl font-semibold">
            ~~ 일정
          </h2>
        </div>
      </div>

      <div>
        <n-card>
          <n-table single-line>
            <thead class="text-center">
              <tr>
                <th class="w-[100px]">날짜</th>
                <th class="w-[80px]">시간</th>
                <th>경기</th>
                <th>경기장</th>
                <th class="w-[100px]">상태</th>
              </tr>
            </thead>
            <tbody class="text-center">
              <tr>
                <td>aa</td>
                <td>aa</td>
                <td>ㅁㅁ vs ㅇㅇ</td>
                <td>aa</td>
                <td>예정</td>
              </tr>
              <tr>
                <td>aa</td>
                <td>aa</td>
                <td>ㅁㅁ vs ㅇㅇ</td>
                <td>aa</td>
                <td>예정</td>
              </tr>
            </tbody>
          </n-table>
        </n-card>
      </div>
    </div>
  </div>
</template>

<script setup>
import {onMounted, ref} from "vue";
import {useCommonStore} from "@/stores/common.store";
import {storeToRefs} from "pinia";
import {useScheduleStore} from "@/stores/schedule.store";
import { CalendarIcon, SearchIcon } from "lucide-vue-next"
import { NSelect, NCard, NButton, NTable } from "naive-ui"

const commonStore = useCommonStore();
const scheduleStore = useScheduleStore();
const { seasonList , roundList} = storeToRefs(commonStore)
const { scheduleList } = storeToRefs(scheduleStore)
const searchSeason = ref('')
const searchRound = ref('')

onMounted(() => {
  getSeasonList()
  getRoundList()
});

const getSeasonList = () => {
  commonStore.selectSeasons();
}

const getRoundList= () => {
  commonStore.selectRounds();
}

const doSearch = () => {
  const params = {
    season : searchSeason.value,
    round : searchRound.value
  }
  scheduleStore.selectSchedule(params)
}

</script>