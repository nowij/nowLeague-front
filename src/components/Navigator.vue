<template>
  <nav class="border-b bg-white">
    <div class="container mx-auto flex h-16 items-center justify-between px-4">
      <div class="flex items-center">
        <a href="/" class="text-xl font-bold text-gray-900">
          Now League
        </a>
      </div>
      <ul class="flex space-x-4">
        <li class="text-sm font-medium transition-colors">
          <router-link to="/" class="hover:underline">Home</router-link>
        </li>
        <li class="text-sm font-medium transition-colors">
          <router-link to="/schedule" class="hover:underline">Schedule</router-link>
        </li>
        <li class="text-sm font-medium transition-colors">
          <router-link to="/result" class="hover:underline">Results</router-link>
        </li>
        <li class="text-sm font-medium transition-colors">
          <router-link to="/team" class="hover:underline">Teams</router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>