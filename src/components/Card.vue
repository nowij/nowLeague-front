<template>
  <n-card>
    <div class="overflow-x-auto h-[300px]">
      <p class="text-gray-500 text-center">{{ messageValue }}</p>
    </div>
  </n-card>
</template>

<script setup>
import { NCard } from "naive-ui";

defineProps({
  messageValue: String
})

</script>