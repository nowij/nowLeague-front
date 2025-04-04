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
            <n-button class="flex w-full items-center justify-start gap-3 rounded-none px-4 py-3 text-left">aa</n-button>
            <n-button class="flex w-full items-center justify-start gap-3 rounded-none px-4 py-3 text-left">bb</n-button>
          </div>
        </n-card>
      </div>

      <div class="md:col-span-2">
        <div class="mb-4 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <div class="flex items-center gap-2">
            <TrophyIcon class="h-5 w-5 text-orange-500" />
            <h2 class="text-xl font-semibold">
              팀을 선택하세요.
            </h2>
          </div>

          <div class="w-full sm:w-40">
            <n-select>
            </n-select>
          </div>
        </div>
        <!-- 선택 -->
        <n-card>
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
        <n-card>
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


</script>