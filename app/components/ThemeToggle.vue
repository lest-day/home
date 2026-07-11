<script setup>
const colorMode = useColorMode()

const toggle = () => {
  colorMode.preference =
    colorMode.preference === 'dark' ? 'light' : 'dark'
}
</script>

<template>
  <button
    @click="toggle"
    aria-label="切换主题"
    class="fixed top-4 right-4 z-50 p-2.5 rounded-xl
      bg-white/60 dark:bg-zinc-800/60
      border border-zinc-200 dark:border-zinc-700
      backdrop-blur
      hover:scale-110 active:scale-95 transition-transform"
    :title="colorMode.preference === 'dark' ? '切换到浅色' : '切换到深色'"
  >
    <!-- 太阳 ☀ -->
    <svg
      v-if="colorMode.preference === 'dark'"
      xmlns="http://www.w3.org/2000/svg"
      class="w-5 h-5 text-amber-500"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <circle cx="12" cy="12" r="5"/>
      <line x1="12" y1="1" x2="12" y2="3"/>
      <line x1="12" y1="21" x2="12" y2="23"/>
      <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/>
      <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
      <line x1="1" y1="12" x2="3" y2="12"/>
      <line x1="21" y1="12" x2="23" y2="12"/>
      <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/>
      <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
    </svg>

    <!-- 月亮 🌙 -->
    <svg
      v-else
      xmlns="http://www.w3.org/2000/svg"
      class="w-5 h-5 text-indigo-400"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
    </svg>
  </button>
</template>