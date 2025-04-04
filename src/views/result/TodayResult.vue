<template>
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
</template>

<script setup>
import {NTable, NTag} from "naive-ui";
</script>