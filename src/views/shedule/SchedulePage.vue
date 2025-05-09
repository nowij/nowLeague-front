<template>
  <div class="max-w-screen-xl mx-auto px-4 py-8">
    <!-- 검색창 -->
    <div class="flex items-center gap-4">
      <n-card title="일정 검색">
        <div class="flex flex-col gap-4 sm:flex-row sm:items-end">
          <div class="grid w-full gap-2">
            <label class="text-sm font-medium text-gray-700">시즌</label>
            <n-select v-model:value="searchSeason" class="w-full"
                      :options="seasonOptions">
            </n-select>
          </div>
          <div class="grid w-full gap-2">
            <label class="text-sm font-medium text-gray-700">라운드</label>
            <n-select class="w-full" v-model:value="searchRound"
                      :options="roundOptions">
            </n-select>
          </div>
          <n-button @click="doSearch(0)" class="mt-2 sm:mt-0">
            <SearchIcon class="h-4 w-5" />검색
          </n-button>
        </div>
      </n-card>
    </div>

    <!-- 결과창 -->
    <div class="space-y-4">
      <div class="flex items-center justify-between">
        <div class="flex items-center gap-2">
          <CalendarIcon className="h-5 w-5 text-blue-500" />
          <h2 class="text-xl font-semibold">
            일정
          </h2>
        </div>
      </div>

      <div>
        <n-card>
          <n-table single-line>
            <thead class="text-center">
              <tr>
                <th class="w-[80px]">번호</th>
                <th class="w-[100px]">날짜</th>
                <th>경기</th>
                <th class="w-[100px]">결과</th>
              </tr>
            </thead>
            <tbody class="text-center">
              <tr v-for="(schedule, i) in scheduleList" :key="i">
                <td>{{ schedule.gameNo }}</td>
                <td>{{ schedule.gameDate }}</td>
                <td>{{ schedule.homeName }} vs {{ schedule.awayName }}</td>
                <td v-if="schedule.homeSpoint != null">{{ schedule.homeSpoint}} : {{ schedule.awaySpoint }}</td>
                <td v-if="schedule.homeSpoint == null">예정</td>
              </tr>
            </tbody>
          </n-table>
        </n-card>
      </div>
      <div class="flex items-center justify-center space-x-2 py-4" v-if="scheduleList.length > 0">
        <n-pagination :page-count="Math.ceil(pageInfo.total / pageInfo.pageSize)" :page-size="pageInfo.pageSize" @update:page="changePage"></n-pagination>
      </div>
    </div>
  </div>
</template>

<script setup>
import {computed, onMounted, ref} from "vue";
import {useCommonStore} from "@/stores/common.store";
import {storeToRefs} from "pinia";
import {useScheduleStore} from "@/stores/schedule.store";
import { CalendarIcon, SearchIcon } from "lucide-vue-next"
import { NSelect, NCard, NButton, NTable, NPagination } from "naive-ui"

const commonStore = useCommonStore();
const scheduleStore = useScheduleStore();
const { seasonList , roundList} = storeToRefs(commonStore)
const { scheduleList, pageInfo } = storeToRefs(scheduleStore)
const searchSeason = ref('')
const searchRound = ref('')
const seasonOptions = computed(() => {
  return changeNaiveSelectOptions(seasonList.value)
})
const roundOptions = computed(() => {
  return changeNaiveSelectOptions(roundList.value)
})

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

const doSearch = (pageNo) => {
  const params = {
    season : searchSeason.value,
    round : searchRound.value,
    page: pageNo-1
  }
  scheduleStore.selectSchedule(params)
}

// naive 형식에 맞춤
const changeNaiveSelectOptions = (list) => {
  if (!Array.isArray(list)) {
    return [];
  }

  const options = list.map(data => ({
    label: data.name,
    value: data.code
  }));

  return [
    { label: '전체 선택', value: '' },
    ...options
  ];
}


const changePage = (newPage) => {
  doSearch(newPage)
}
</script>