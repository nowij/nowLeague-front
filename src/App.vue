<script setup>
// import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <header
    className="bg-gray-900 text-white py-4 px-6 flex items-center justify-between"
  >
    <div className="flex items-center">
      <!-- <img alt="Team Logo" className="h-8 mr-4" src="/placeholder.svg" /> -->
      <h1 className="text-2xl font-bold">nnnnn</h1>
    </div>
    <nav className="space-x-4">
      <Link className="hover:underline" href="#"> Home </Link>
      <Link className="hover:underline" href="#"> Schedule </Link>
      <Link className="hover:underline" href="#"> Results </Link>
      <Link className="hover:underline" href="#"> Teams </Link>
    </nav>
  </header>
  <main className="container mx-auto py-12 px-6">
    <section className="mb-12">
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
            </Link>
          </div>
        </div>
      </div>
    </section>
    <section>
      <h2 className="text-2xl font-bold mb-4">경기 결과</h2>
      <div className="border rounded-lg overflow-auto">
        <table>
          <thead>
            <tr>
              <th>Date</th>
              <th>Match</th>
              <th>Result</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>May 1, 2023</td>
              <td>Spikers Volleyball Club vs. Thunderbolts</td>
              <td>3 - 1</td>
            </tr>
            <tr>
              <td>April 24, 2023</td>
              <td>Spikers Volleyball Club vs. Aces</td>
              <td>2 - 3</td>
            </tr>
            <tr>
              <td>April 17, 2023</td>
              <td>Spikers Volleyball Club vs. Strikers</td>
              <td>3 - 0</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  </main>
  <footer className="bg-gray-900 text-white py-4 px-6 text-center">
    <!-- <p>© 2023 Spikers Volleyball Club. All rights reserved.</p> -->
  </footer>
</template>

<style>
@import "@/assets/base.css";
</style>
