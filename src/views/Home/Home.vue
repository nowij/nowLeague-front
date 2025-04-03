<template>
  <main class="container mx-auto px-4 py-8">
    <div class="grid gap-8 md:grid-cols-1 lg:grid-cols-2">
      <!-- 왼쪽 -->
      <div class="space-y-4">
        <div class="flex items-center gap-2">
          <TrophyIcon class="h-5 w-5 text-orange-500" />
          <h2 class="text-xl font-semibold">오늘의 경기 결과</h2>
        </div>

        <n-card class="rounded-lg" size="small">
          <n-table single-column>
            <thead>
            <tr>
              <th class="text-left"><n-tag size="small" round>V리그</n-tag></th>
              <th></th>
              <th class="text-right">2025-04-03</th>
            </tr>
            </thead>
            <tbody class="text-center">
            <tr>
              <td>맨체스터</td>
              <td rowspan="2" class="text-xl">2 : 1</td>
              <td>리버풀</td>
            </tr>
            <tr>
              <td class="text-sm text-gray-500">Home</td>
              <td class="text-sm text-gray-500">AWAY</td>
            </tr>
            </tbody>
          </n-table>
        </n-card>
      </div>

      <!-- 오른쪽 -->
      <div class="space-y-4">
        <div class="flex items-center gap-2">
          <CalendarIcon class="h-5 w-5 text-blue-500" />
          <h2 class="text-xl font-semibold">다음 경기 일정</h2>
        </div>
        <n-card class="rounded-lg" size="small">
          <n-table single-column>
            <thead>
              <tr>
                <th class="text-left"><n-tag size="small" round>V리그</n-tag></th>
                <th></th>
                <th class="text-right">2025-04-03</th>
              </tr>
            </thead>
            <tbody class="text-center">
              <tr>
                <td>맨체스터</td>
                <td rowspan="2"><n-tag type="info" size="small" round>시간</n-tag></td>
                <td>리버풀</td>
              </tr>
              <tr>
                <td class="text-sm">Home</td>
                <td class="text-sm">AWAY</td>
              </tr>
            </tbody>
          </n-table>
        </n-card>
      </div>
    </div>
  </main>
</template>

<script setup>
import { CalendarIcon, TrophyIcon } from "lucide-vue-next"
import { NTag, NCard, NTable} from "naive-ui"
</script>

<style>
@import "@/assets/base.css";
</style>
