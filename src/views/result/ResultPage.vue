<template>
  <div class="max-w-screen-xl mx-auto px-4 py-8">
    <!-- 오늘 경기 결과 -->
    <div class="mb-8 space-y-4">
      <div class="flex items-center justify-between">
        <div class="flex items-center gap-2">
          <TrophyIcon class="h-5 w-5 text-orange-500" />
          <h2 class="text-xl font-semibold">오늘의 경기 결과</h2>
        </div>
      </div>
      <ScheduleCard v-if="todayResult != null" :schedule-value="todayResult"/>
    </div>

    <div class="space-y-4">
      <div class="flex items-center justify-between">
        <div class="flex items-center gap-2">
          <BarChart3Icon class="h-5 w-5 text-green-500" />
          <h2 class="text-xl font-semibold">V리그 순위</h2>
        </div>
        <n-button size="small" class="gap-2">
          <LineChartIcon class="h-4 w-4" />
          <span class="hidden sm:inline" @click="execDialog">순위 변동 그래프</span>
        </n-button>
      </div>
      <!-- 순위표 -->
      <Ranking></Ranking>
    </div>
  </div>

  <!-- 모달창 -->
  <n-modal
      v-model:show="showDialog"
      preset="dialog"
      title="순위 변동 그래프"
      @close="showDialog = false"
  >
    <!-- 여기 안에 그래프 컴포넌트 불러오면 됩니다 -->
    <div>여기에 그래프 들어갑니다</div>
  </n-modal>
</template>

<script setup>
import {NButton, NModal } from "naive-ui";
import { TrophyIcon, BarChart3Icon, LineChartIcon } from "lucide-vue-next"
import { Ranking } from "@/views/result";
import {ScheduleCard} from "@/views/shedule";
import {axiosWrapper} from "@/mixins";
import {onMounted, ref} from "vue";

const todayResult = ref(null);
const showDialog = ref(false)

const execDialog = () => {
  showDialog.value = true
}

onMounted( async () => {
  todayResult.value =await getResult(20240315)
})

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