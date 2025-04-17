<template>
  <n-card class="rounded-lg" size="small">
    <n-table single-column>
      <thead>
        <tr>
          <th><n-tag size="small" round>V리그</n-tag></th>
          <th></th>
          <th class="right-right">{{ specificSchedule.gameDate }}</th>
        </tr>
      </thead>
      <tbody class="text-center">
        <tr>
          <td>{{ specificSchedule.homeName }}</td>
          <td rowspan="2" class="text-xl" v-if="specificSchedule.homeSpoint != null">{{ specificSchedule.homeSpoint }} : {{ specificSchedule.awaySpoint }}</td>
          <td rowspan="2" v-if="specificSchedule.homeSpoint == null"><n-tag type="info" size="small" round>예정</n-tag></td>
          <td>{{ specificSchedule.awayName }}</td>
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
import {onMounted, ref} from "vue";
import {axiosWrapper} from "@/mixins";

const specificSchedule = ref({})
const { dateValue } = defineProps({
  dateValue: String
})

onMounted(() => {
  getSpecificSchedule()
})

const getSpecificSchedule = async () => {
  const params = {
    date: dateValue
  }
  try {
    const response = await axiosWrapper.get('/game/schedule/date', {params})
    specificSchedule.value = response.data
  } catch (error) {
    console.log('스케줄 조회 에러 ',error)
  }
}

</script>