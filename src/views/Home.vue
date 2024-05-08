<template>
  <header
    class="bg-gray-900 text-white py-4 px-6 flex items-center justify-between"
  >
    <div class="flex items-center">
      <svg
        class="mr-5"
        width="40px"
        height="40px"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M11.5697 12.5532L12.1617 13.0137V13.0137L11.5697 12.5532ZM11.3142 3.64586L12.0065 3.93432V3.93432L11.3142 3.64586ZM21.2426 10.7426L21.7773 10.2166L21.773 10.2123L21.2426 10.7426ZM21.4531 12.026C21.7436 12.3213 22.2184 12.3251 22.5137 12.0346C22.809 11.7442 22.8129 11.2693 22.5224 10.974L21.4531 12.026ZM5.7327 19.0428C5.31848 19.0428 4.9827 19.3786 4.9827 19.7928C4.9827 20.207 5.31848 20.5428 5.7327 20.5428V19.0428ZM3.5 15.75C3.08579 15.75 2.75 16.0858 2.75 16.5C2.75 16.9142 3.08579 17.25 3.5 17.25V15.75ZM8.19231 3.35575C8.35162 2.9734 8.17081 2.5343 7.78846 2.37498C7.40611 2.21567 6.96701 2.39648 6.80769 2.77883L8.19231 3.35575ZM19.876 16.916C20.1057 17.2607 20.5714 17.3538 20.916 17.124C21.2607 16.8943 21.3538 16.4286 21.124 16.084L19.876 16.916ZM5.85306 12.1446C5.93291 12.551 6.32712 12.8158 6.73357 12.7359C7.14001 12.6561 7.40477 12.2619 7.32492 11.8554L5.85306 12.1446ZM15.4334 17.3225C15.7715 17.0831 15.8515 16.615 15.6121 16.277C15.3727 15.9389 14.9046 15.8589 14.5666 16.0983L15.4334 17.3225ZM14.1553 6.08027C13.7501 5.99448 13.3521 6.25343 13.2663 6.65867C13.1805 7.0639 13.4394 7.46195 13.8447 7.54774L14.1553 6.08027ZM12 21.25C6.89137 21.25 2.75 17.1086 2.75 12H1.25C1.25 17.9371 6.06294 22.75 12 22.75V21.25ZM21.25 12C21.25 17.1086 17.1086 21.25 12 21.25V22.75C17.9371 22.75 22.75 17.9371 22.75 12H21.25ZM12 2.75C17.1086 2.75 21.25 6.89137 21.25 12H22.75C22.75 6.06294 17.9371 1.25 12 1.25V2.75ZM12 1.25C6.06294 1.25 1.25 6.06294 1.25 12H2.75C2.75 6.89137 6.89137 2.75 12 2.75V1.25ZM12 12.75H12.0917V11.25H12V12.75ZM11.408 11.5395L10.9777 12.0928L12.1617 13.0137L12.592 12.4605L11.408 11.5395ZM11.3077 1.71154L10.6219 3.35739L12.0065 3.93432L12.6923 2.28846L11.3077 1.71154ZM20.708 11.2686L21.4531 12.026L22.5224 10.974L21.7773 10.2167L20.708 11.2686ZM10.6219 3.35739C9.39039 6.31308 9.66695 9.68222 11.364 12.3975L12.636 11.6025C11.1965 9.29929 10.9619 6.44145 12.0065 3.93432L10.6219 3.35739ZM10.9777 12.0928C9.18293 14.4003 6.42334 15.75 3.5 15.75V17.25C6.88622 17.25 10.0828 15.6866 12.1617 13.0137L10.9777 12.0928ZM12.0917 12.75C15.2197 12.75 18.1408 14.3133 19.876 16.916L21.124 16.084C19.1107 13.064 15.7213 11.25 12.0917 11.25V12.75ZM6.80769 2.77883C5.55819 5.77764 5.23917 9.01982 5.85306 12.1446L7.32492 11.8554C6.76831 9.0222 7.05663 6.08137 8.19231 3.35575L6.80769 2.77883ZM14.5666 16.0983C11.9692 17.9377 8.82244 19.0428 5.7327 19.0428V20.5428C9.1695 20.5428 12.6141 19.319 15.4334 17.3225L14.5666 16.0983ZM13.8447 7.54774C16.4265 8.09437 18.8177 9.37835 20.7123 11.273L21.773 10.2123C19.6714 8.11074 17.0191 6.68657 14.1553 6.08027L13.8447 7.54774Z"
          fill="#a6a6a6"
        />
      </svg>
      <h1 class="text-2xl font-bold">now league</h1>
    </div>
    <Nav class="space-x-4"></Nav>
  </header>
  <main class="container mx-auto py-12 px-6">
    <div class="mb-12">
      <div class="flex items-center gap-4">
        <h2 class="text-2xl font-bold">다음 경기</h2>
        <select
          class="py-3 px-4 pe-9 block w-[120px] border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
        >
          <option>날짜</option>
        </select>
      </div>
      <div class="grid grid-cols-1 gap-6">
        <div
          class="bg-gray-100 dark:bg-gray-800 rounded-lg p-6 flex flex-col md:flex-row items-center justify-between"
        >
          <div>
            <p class="text-gray-500 dark:text-gray-400 mb-2">
              May 5, 2023 - 7:00 PM
            </p>
            <h3 class="text-lg font-bold mb-2">
              Spikers Volleyball Club vs. Thunderbolts
            </h3>
            <p class="text-gray-500 dark:text-gray-400">
              Volleyball Arena, Anytown USA
            </p>
          </div>
          <div class="flex items-center mt-4 md:mt-0">
            <span class="mr-2 font-bold">Next Match:</span>
            <Link class="flex items-center" href="#">
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
      <h2 class="text-2xl font-bold mb-4">경기 결과</h2>
      <div class="border rounded-lg overflow-auto">
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
  <footer class="bg-gray-900 text-white py-4 px-6 text-center">
    <!-- <p>© 2023 Spikers Volleyball Club. All rights reserved.</p> -->
  </footer>
</template>

<script setup>
import { Nav } from "@/components";
</script>

<style>
@import "@/assets/base.css";
</style>
