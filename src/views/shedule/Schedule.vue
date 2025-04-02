<template>
  <div class="flex items-center gap-4">
    <n-card title="일정 검색">
      시즌
      <n-select v-model="searchSeason" class="w-[120px]">

      </n-select>
      라운드
      <n-select class="w-[120px]" v-model="searchRound" >
        <option value="" selected>전체</option>
        <option v-for="(round, i) in roundList" :key="i" value="round.code">
          {{round.korName}}
        </option>
      </n-select>
      <n-button>
        <SearchIcon className="h-4 w-4" />
        조회
      </n-button>
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

  <div class="border rounded-lg overflow-auto">
    <CalendarIcon>일정</CalendarIcon>
    <table
        class="min-w-full text-left text-sm font-light text-surface dark:text-white"
    >
      <thead
          class="border-b border-neutral-200 font-medium dark:border-white/10"
      >
      <tr class="border-neutral-200">
        <th scope="col" class="px-6 py-4">Date</th>
        <th scope="col" class="px-6 py-4">Match</th>
        <th scope="col" class="px-6 py-4">Result</th>
      </tr>
      </thead>
      <tbody>
      <tr
          class="border-b border-neutral-200 transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-white/10 dark:hover:bg-neutral-600"
          v-for="(schedule, i) in scheduleList" :key="i"
      >
        <td class="whitespace-nowrap px-6 py-4">May 1, 2023</td>
        <td class="whitespace-nowrap px-6 py-4">
          Spikers Volleyball Club vs. Thunderbolts
        </td>
        <td class="whitespace-nowrap px-6 py-4">3 - 1</td>
      </tr>
      <tr
          class="border-b border-neutral-200 transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-white/10 dark:hover:bg-neutral-600"
      >
        <td class="whitespace-nowrap px-6 py-4">April 24, 2023</td>
        <td class="whitespace-nowrap px-6 py-4">
          Spikers Volleyball Club vs. Aces
        </td>
        <td class="whitespace-nowrap px-6 py-4">2 - 3</td>
      </tr>
      <tr
          class="border-b border-neutral-200 transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-white/10 dark:hover:bg-neutral-600"
      >
        <td class="whitespace-nowrap px-6 py-4">April 17, 2023</td>
        <td class="whitespace-nowrap px-6 py-4">
          Spikers Volleyball Club vs. Strikers
        </td>
        <td class="whitespace-nowrap px-6 py-4">3 - 0</td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import {onMounted, ref} from "vue";
import {useCommonStore} from "@/stores/common.store";
import {storeToRefs} from "pinia";
import {useScheduleStore} from "@/stores/schedule.store";
import { CalendarIcon, SearchIcon } from "lucide-vue-next"
import { NSelect, NCard, NButton } from "naive-ui"

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