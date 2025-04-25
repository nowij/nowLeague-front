<template>
  <n-card class="rounded-lg" size="small">
    <n-table single-column>
      <thead>
        <tr>
          <th colspan="3">
            <div class="flex justify-between items-center w-full">
              <n-tag size="small" round>V리그</n-tag>
              <span>{{ scheduleValue.gameDate }}</span>
            </div>
          </th>
        </tr>
      </thead>
      <tbody class="text-center">
        <tr>
          <td>{{ scheduleValue.homeName }}</td>
          <td rowspan="2" class="text-xl" v-if="scheduleValue.homeSpoint != null">{{ scheduleValue.homeSpoint }} : {{ scheduleValue.awaySpoint }}</td>
          <td rowspan="2" v-if="scheduleValue.homeSpoint == null"><n-tag type="info" size="small" round>예정</n-tag></td>
          <td>{{ scheduleValue.awayName }}</td>
        </tr>
        <tr>
          <td class="text-xs text-gray-500">Home</td>
          <td class="text-xs text-gray-500">AWAY</td>
        </tr>
      </tbody>
    </n-table>
  </n-card>
</template>

<script setup>
import { NCard, NTable, NTag } from "naive-ui";

const { scheduleValue } = defineProps({
  scheduleValue: Object
})


</script>