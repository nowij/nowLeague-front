<template>
  <n-card>
    <div class="overflow-x-auto">
      <n-table>
        <thead class="text-center">
          <tr>
            <th class="w-[50px]">순위</th>
            <th>팀</th>
            <th>경기수</th>
            <th>승점</th>
            <th>승</th>
            <th>패</th>
          </tr>
        </thead>
        <tbody>
          <tr class="text-center">
            <td>1</td>
            <td>ㅁㅁ</td>
            <td>1</td>
            <td>3</td>
            <td>1</td>
            <td>0</td>
          </tr>
        </tbody>
      </n-table>
    </div>
  </n-card>
</template>

<script setup>
import {NCard, NTable} from "naive-ui";
</script>