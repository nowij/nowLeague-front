<template>
  <main class="max-w-screen-xl mx-auto px-4 py-8">
    <!-- 리그 순위 -->
    <div class="mb-8 space-y-4">
      <div class="flex items-center gap-2">
        <BarChart3Icon class="h-5 w-5 text-green-500" />
        <h2 class="text-xl font-semibold">V리그 순위</h2>
      </div>
        <Ranking :month-value="String(202403)"></Ranking>
    </div>
    <div class="grid gap-8 md:grid-cols-1 lg:grid-cols-2">
      <!-- 오늘 경기 결과 -->
      <div class="space-y-4">
        <div class="flex items-center gap-2">
          <TrophyIcon class="h-5 w-5 text-orange-500" />
          <h2 class="text-xl font-semibold">오늘의 경기 결과</h2>
        </div>
        <ScheduleCard v-if="todayResult" :schedule-value="todayResult" />
      </div>

      <!-- 다음 경기 -->
      <div class="space-y-4">
        <div class="flex items-center gap-2">
          <CalendarIcon class="h-5 w-5 text-blue-500" />
          <h2 class="text-xl font-semibold">다음 경기 일정</h2>
        </div>
        <ScheduleCard v-if="nextResult" :schedule-value="nextResult" />
      </div>
    </div>
  </main>
</template>

<script setup>
import { CalendarIcon, TrophyIcon, BarChart3Icon } from "lucide-vue-next"
import { Ranking } from "@/views/result";
import { ScheduleCard } from "@/views/shedule";
import { onMounted, ref } from "vue";
import {axiosWrapper} from "@/mixins";

const todayMonth = ref('');
const todayResult = ref(null);
const nextResult = ref(null);

onMounted(async () => {
  // getToday() // TODO
  todayResult.value = await getResult(20240315);
  nextResult.value = await getResult(20240316);
})

const getToday = () => {
  let date = new Date()
  let year = date.getFullYear()
  let month = date.getMonth()+1
  let day = date.getDate() < 10 ? '0' + date.getDate() : date.getDate()

  month = month < 10 ? '0' + month : month

  todayMonth.value = year + month;

  return year + month + day
}

const getResult = async (dateValue) => {
  const params = {
    date: dateValue
  }
  try {
    const response = await axiosWrapper.get('/game/schedule/date', {params})
    return response.data
  } catch (error) {
    console.log('스케줄 조회 에러 ', error)
    return {}
  }
}

</script>

<style>
@import "@/assets/base.css";
</style>
