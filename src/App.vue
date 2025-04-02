<script setup>
import { Nav, Foot } from "@/components";
</script>

<template>
  <div class="min-h-screen bg-gray-50">
    <Nav />
    <div>
      <router-view />
    </div>
    <Foot />
  </div>
</template>
