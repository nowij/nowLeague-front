<template>
  <main class="container mx-auto px-4 py-8">
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
        <ScheduleCard :date-value="String(20240315)"/>
      </div>

      <!-- 다음 경기 -->
      <div class="space-y-4">
        <div class="flex items-center gap-2">
          <CalendarIcon class="h-5 w-5 text-blue-500" />
          <h2 class="text-xl font-semibold">다음 경기 일정</h2>
        </div>
        <ScheduleCard :date-value="String(20240317)"/>
      </div>
    </div>
  </main>
</template>

<script setup>
import { CalendarIcon, TrophyIcon, BarChart3Icon } from "lucide-vue-next"
import { Ranking } from "@/views/result";
import { ScheduleCard } from "@/views/shedule";
import { onMounted, ref } from "vue";

const todayMonth = ref('');

onMounted(() => {
  // getToday() // TODO
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

</script>

<style>
@import "@/assets/base.css";
</style>
