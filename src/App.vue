<script setup>
import { Nav, Foot } from "@/components";
</script>

<template>
  <div class="flex min-h-screen flex-col bg-gray-50">
    <Nav />
    <div class="flex-1">
      <router-view />
    </div>
    <Foot />
  </div>
</template>
