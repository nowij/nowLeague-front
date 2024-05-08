<script setup>
// import { RouterLink, RouterView } from "vue-router";
import { Nav } from "@/components";
</script>

<template>
  <header
    className="bg-gray-900 text-white py-4 px-6 flex items-center justify-between"
  >
    <div className="flex items-center">
      <!-- <img alt="Team Logo" className="h-8 mr-4" src="/placeholder.svg" /> -->
      <h1 className="text-2xl font-bold">nnnnn</h1>
    </div>
    <Nav className="space-x-4"></Nav>
  </header>
  <main className="container mx-auto py-12 px-6">
    <div className="mb-12">
      <h2 className="text-2xl font-bold mb-4">다음 경기</h2>
      <div className="grid grid-cols-1 gap-6">
        <div
          className="bg-gray-100 dark:bg-gray-800 rounded-lg p-6 flex flex-col md:flex-row items-center justify-between"
        >
          <div>
            <p className="text-gray-500 dark:text-gray-400 mb-2">
              May 5, 2023 - 7:00 PM
            </p>
            <h3 className="text-lg font-bold mb-2">
              Spikers Volleyball Club vs. Thunderbolts
            </h3>
            <p className="text-gray-500 dark:text-gray-400">
              Volleyball Arena, Anytown USA
            </p>
          </div>
          <div className="flex items-center mt-4 md:mt-0">
            <span className="mr-2 font-bold">Next Match:</span>
            <Link className="flex items-center" href="#">
              <span>May 12, 2023 - 8:00 PM</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m9 18 6-6-6-6" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </div>
    <div>
      <h2 className="text-2xl font-bold mb-4">경기 결과</h2>
      <div className="border rounded-lg overflow-auto">
        <table
          class="min-w-full text-left text-sm font-light text-surface dark:text-white"
        >
          <thead
            class="border-b border-neutral-200 font-medium dark:border-white/10"
          >
            <tr class="border-neutral-200">
              <th scope="col" class="px-6 py-4">Date</th>
              <th scope="col" class="px-6 py-4">Match</th>
              <th scope="col" class="px-6 py-4">Result</th>
            </tr>
          </thead>
          <tbody>
            <tr
              class="border-b border-neutral-200 transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-white/10 dark:hover:bg-neutral-600"
            >
              <td class="whitespace-nowrap px-6 py-4">May 1, 2023</td>
              <td class="whitespace-nowrap px-6 py-4">
                Spikers Volleyball Club vs. Thunderbolts
              </td>
              <td class="whitespace-nowrap px-6 py-4">3 - 1</td>
            </tr>
            <tr
              class="border-b border-neutral-200 transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-white/10 dark:hover:bg-neutral-600"
            >
              <td class="whitespace-nowrap px-6 py-4">April 24, 2023</td>
              <td class="whitespace-nowrap px-6 py-4">
                Spikers Volleyball Club vs. Aces
              </td>
              <td class="whitespace-nowrap px-6 py-4">2 - 3</td>
            </tr>
            <tr
              class="border-b border-neutral-200 transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-white/10 dark:hover:bg-neutral-600"
            >
              <td class="whitespace-nowrap px-6 py-4">April 17, 2023</td>
              <td class="whitespace-nowrap px-6 py-4">
                Spikers Volleyball Club vs. Strikers
              </td>
              <td class="whitespace-nowrap px-6 py-4">3 - 0</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </main>
  <footer className="bg-gray-900 text-white py-4 px-6 text-center">
    <!-- <p>© 2023 Spikers Volleyball Club. All rights reserved.</p> -->
  </footer>
</template>

<style>
@import "@/assets/base.css";
</style>
