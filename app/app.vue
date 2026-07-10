<template>
  <div class="min-h-screen bg-gray-50 dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 flex items-center justify-center p-6">
    <main class="max-w-2xl w-full">
      <!-- 个人信息卡片 -->
      <section class="bg-white/50 dark:bg-zinc-900/50 backdrop-blur-lg border border-zinc-200 dark:border-zinc-800 rounded-3xl p-8 shadow-sm">
        <div class="flex items-center gap-6">
          <img src="/images/avatar.webp" alt="Avatar" class="w-20 h-20 rounded-full ring-2 ring-zinc-100 dark:ring-zinc-800" />
          <div>
            <h1 class="text-2xl font-bold">你的名字</h1>
            <p class="text-zinc-500 dark:text-zinc-400">开发者 / 探索者 / 生活记录者</p>
          </div>
        </div>

        <!-- 简介 -->
        <p class="mt-6 text-zinc-600 dark:text-zinc-300 leading-relaxed">
          这里放置你的个人简介。保持简短有力，展示你的技术栈（如 Nuxt, Vue, Node.js）或者核心兴趣点。
        </p>

        <!-- 社交链接 -->
        <div class="mt-8 flex gap-4">
          <a href="#" class="hover:text-blue-500 transition-colors">GitHub</a>
          <a href="#" class="hover:text-blue-500 transition-colors">Twitter</a>
          <a href="#" class="hover:text-blue-500 transition-colors">Blog</a>
        </div>
      </section>

      <!-- 底部版权/日期 -->
      <footer class="mt-8 text-center text-xs text-zinc-400">
        © 2026 Crafted with Nuxt & Tailwind
      </footer>
    </main>
  </div>
</template>