<template>
  <div class="container mx-auto px-4 py-8">
    <!-- 오늘 경기 결과 -->
    <div class="mb-8 space-y-4">
      <div class="flex items-center justify-between">
        <div class="flex items-center gap-2">
          <TrophyIcon class="h-5 w-5 text-orange-500" />
          <h2 class="text-xl font-semibold">오늘의 경기 결과</h2>
        </div>
      </div>
      <n-card>
        <div class="p-4 rounded-lg">
          <TodayResult></TodayResult>
        </div>
      </n-card>
    </div>

    <div class="space-y-4">
      <div class="flex items-center justify-between">
        <div class="flex items-center gap-2">
          <BarChart3Icon class="h-5 w-5 text-green-500" />
          <h2 class="text-xl font-semibold">V리그 순위</h2>
        </div>
        <n-button size="small" class="gap-2">
          <LineChartIcon class="h-4 w-4" />
          <span class="hidden sm:inline" @click.self.prevent="execDialog">순위 변동 그래프</span>
          <n-dialog-provider>
            <content />
          </n-dialog-provider>
        </n-button>
      </div>
      <!-- 순위표 -->
      <Ranking></Ranking>
    </div>
    
  </div>
</template>

<script setup>
import {NCard, NButton, NDialogProvider, NTable, useDialog, NTag} from "naive-ui";
import { TrophyIcon, BarChart3Icon, LineChartIcon } from "lucide-vue-next"
import { Ranking, TodayResult } from "@/views/result";

const execDialog = () => {
  const dialog = useDialog()
  dialog.success({
    title: "그래프",
    content: "asas"
  })
  return dialog
}
</script>