<template>
  <main class="container mx-auto px-4 py-8">
    <div class="grid gap-8 md:grid-cols-1 lg:grid-cols-2">
      <!-- 왼쪽 -->
      <div class="space-y-4">
        <div class="flex items-center gap-2">
          <TrophyIcon class="h-5 w-5 text-orange-500" />
          <h2 class="text-xl font-semibold">오늘의 경기 결과</h2>
        </div>
        <n-card
            title="Card Segmented Demo">
          <template #header-extra>
            #header-extra
          </template>
          <n-card embedded :bordered="false">
            <n-table single-column single-line>
              <tbody>
                <tr class="text-center">
                  <td class="font-bold">맨체스터 유나이티드</td>
                  <td rowspan="2">2 : 1</td>
                  <td>리버풀</td>
                </tr>
              <tr class="text-center">
                <td class="text-sm">Home</td>
                <td class="text-sm">AWAY</td>
              </tr>
              </tbody>
            </n-table>
          </n-card>

        </n-card>
        <!-- card -->
<!--        <div class="p-4 bg-white rounded-lg border bg-card text-card-foreground shadow-sm overflow-hidden">
          <div class="space-y-4">
            &lt;!&ndash; card content&ndash;&gt;
            <div class="rounded-lg border bg-card text-card-foreground shadow-sm overflow-hidden">
              <div class="p-0">
                <div class="border-b border-gray-100 bg-gray-50 px-4 py-2">
                  <div class="flex items-center justify-between">
                    <div class="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-foreground bg-white" data-v0-t="badge">프리미어 리그
                    </div>
                    <span class="text-sm text-gray-500">2025-04-02</span>
                  </div>
                </div>
                <div class="p-4">
                  <div class="grid grid-cols-3 items-center gap-2">
                    &lt;!&ndash; home 팀 &ndash;&gt;
                    <div class="text-center">
                      <p class="truncate font-bold">맨체스터 유나이티드</p>
                      <p class="text-sm">Home</p>
                    </div>
                    &lt;!&ndash; 점수 &ndash;&gt;
                    <div class="flex justify-center">
                      <div class="flex items-center gap-2">
                        <span class="text-lg font-bold">2</span>
                        <span class="text-xs text-gray-400">:</span>
                        <span class="text-lg ">1</span>
                      </div>
                    </div>
                    &lt;!&ndash; away 팀 &ndash;&gt;
                    <div class="text-center">
                      <p class="truncate">리버풀</p>
                      <p class="text-sm">Away</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>-->
      </div>

      <!-- 오른쪽 -->
      <div class="space-y-4">
        <div class="flex items-center gap-2">
          <CalendarIcon class="h-5 w-5 text-blue-500" />
          <h2 class="text-xl font-semibold">다음 경기 일정</h2>
        </div>
        <!-- card -->
        <div class="p-4 bg-white rounded-lg border bg-card text-card-foreground shadow-sm overflow-hidden">
          <div class="space-y-4">
            <!-- card content-->
            <div class="rounded-lg border bg-card text-card-foreground shadow-sm overflow-hidden">
              <div class="p-0">
                <div class="border-b border-gray-100 bg-gray-50 px-4 py-2">
                  <div class="flex items-center justify-between">
                    <div class="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-foreground bg-white" data-v0-t="badge">프리미어 리그
                    </div>
                    <span class="text-sm text-gray-500">2025-04-02</span>
                  </div>
                </div>
                <div class="p-4">
                  <div class="grid grid-cols-3 items-center gap-2">
                    <!-- home 팀 -->
                    <div class="text-center">
                      <p class="truncate font-bold">맨체스터 유나이티드</p>
                      <p class="text-sm">Home</p>
                    </div>
                    <!-- 시간 -->
                    <div class="flex justify-center">
                      <div class="flex items-center gap-2">
                        <n-tag type="info" size="small" round>시간</n-tag>
                      </div>
                    </div>
                    <!-- away 팀 -->
                    <div class="text-center">
                      <p class="truncate">리버풀</p>
                      <p class="text-sm">Away</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
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
