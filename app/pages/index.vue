<script setup>
import { ref, onMounted } from 'vue'

/* ---- 随机一言 ---- */
const saying = ref('正在加载随机一言')
const loading = ref(false)

const fetchSaying = async () => {
  if (loading.value) return
  loading.value = true
  try {
    const res = await fetch('https://uapis.cn/api/v1/saying?_=' + Date.now())
    const data = await res.json()
    saying.value = data.text || '万物皆有裂痕，那是光照进来的地方'
  } catch {
    saying.value = '万物皆有裂痕，那是光照进来的地方'
  } finally {
    loading.value = false
  }
}

onMounted(fetchSaying)

/* ---- 常用网站 ---- */
const oftenSites = [
  { name: 'Bilibili', url: 'https://bilibili.com', icon: 'fab fa-bilibili' },
  { name: 'YouTube', url: 'https://youtube.com', icon: 'fab fa-youtube' },
  { name: 'GitHub', url: 'https://github.com', icon: 'fab fa-github' },
  { name: 'MDN Docs', url: 'https://developer.mozilla.org', icon: 'fas fa-book' },
  { name: 'Google', url: 'https://google.com', icon: 'fab fa-google' },
  { name: 'Wikidot', url: 'https://wikidot.com', icon: 'fas fa-diagram-project' },
  { name: 'Wikipedia', url: 'https://wikipedia.org', icon: 'fab fa-wikipedia-w' },
  { name: 'Reddit', url: 'https://reddit.com', icon: 'fab fa-reddit' }
]

/* ---- 我的网站 ---- */
const mySites = [
  { name: '导航', url: 'https://nav.lestday233.eu.org/', icon: 'fa-solid fa-bars' },
  { name: '博客', url: 'https://blog.lestday233.eu.org/', icon: 'fas fa-blog' },
  { name: '维基', url: 'https://wiki.lestday233.eu.org/', icon: 'fa-solid fa-diagram-project' },
  { name: '图床', url: 'https://imgbed.lestday233.eu.org/', icon: 'fa-solid fa-file-image' },
]

/* ---- 社交链接 ---- */
const socials = [
  { t: 'GitHub', u: 'https://github.com/lest-day', icon: 'fab fa-github' },
  { t: 'Twitter', u: 'https://twitter.com/lest_day', icon: 'fab fa-twitter' },
  { t: 'BiliBili', u: 'https://space.bilibili.com/1960746880', icon: 'fab fa-bilibili' },
  { t: 'YouTube', u: 'https://youtube.com/@lestday233', icon: 'fab fa-youtube' },
  { t: 'Telegram', u: 'https://t.me/lestday233', icon: 'fab fa-telegram' },
]
</script>

<template>
  <div class="min-h-screen bg-gray-50 dark:bg-zinc-950
    text-zinc-900 dark:text-zinc-100
    flex items-start justify-center p-6 pt-16">

    <main class="w-full max-w-2xl space-y-6">

      <!-- 信息卡片 -->
      <section class="bg-white/50 dark:bg-zinc-900/50 backdrop-blur-lg
        border border-zinc-200 dark:border-zinc-800
        rounded-3xl p-8 shadow-sm">
        <div class="flex items-center gap-6">
          <img
            src="/images/avatar.webp"
            alt="lest-day 的头像"
            width="80"
            height="80"
            loading="eager"
            @error="e => e.target.src = '/images/avatar-fallback.png'"
            class="w-20 h-20 rounded-full ring-2 ring-zinc-200 dark:ring-zinc-700 object-cover"
          />
          <div>
            <h1 class="text-2xl font-bold">lest-day</h1>
            <p class="text-zinc-500 dark:text-zinc-400 text-sm">
              学生党 / 前端开发者 / 维基管理者
            </p>
          </div>
        </div>

        <p class="mt-5 text-zinc-600 dark:text-zinc-300 text-sm leading-relaxed">
          lest-day（又称 Marx 或 lestday233），计算机和信息技术爱好者，
          擅长 HTML、CSS 等前端 Web 技术，有强迫症的学生党，
          常活跃于 Wikidot 和国内外小众平台。
        </p>

        <div class="mt-6 flex flex-wrap gap-2">
          <a
            v-for="l in socials"
            :key="l.t"
            :href="l.u"
            target="_blank"
            rel="noopener noreferrer"
            :aria-label="l.t"
            class="px-4 py-1.5 rounded-xl text-sm
              bg-white/70 dark:bg-zinc-800/70
              border border-zinc-200 dark:border-zinc-700
              hover:shadow-md transition-shadow"
          >
            <i :class="l.icon" class="mr-1"></i>{{ l.t }}
          </a>
        </div>
      </section>

      <!-- 我的网站 -->
      <section class="bg-white/50 dark:bg-zinc-900/50 backdrop-blur-lg
        border border-zinc-200 dark:border-zinc-800
        rounded-3xl p-6 shadow-sm">
        <h2 class="text-sm font-semibold text-zinc-500 dark:text-zinc-400 mb-4">
          我的网站
        </h2>
        <div class="grid grid-cols-3 sm:grid-cols-4 gap-3">
          <a
            v-for="ms in mySites"
            :key="ms.name"
            :href="ms.url"
            target="_blank"
            rel="noopener noreferrer"
            class="flex flex-col items-center gap-1 p-3 rounded-2xl
              bg-white/60 dark:bg-zinc-800/60
              border border-zinc-200/60 dark:border-zinc-700/60
              hover:scale-[1.04] hover:shadow-md transition-all text-xs
              text-zinc-700 dark:text-zinc-200"
          >
            <i :class="ms.icon" class="text-lg"></i>
            <span class="truncate w-full text-center">{{ ms.name }}</span>
          </a>
        </div>
      </section>

      <!-- 常用网站 -->
      <section class="bg-white/50 dark:bg-zinc-900/50 backdrop-blur-lg
        border border-zinc-200 dark:border-zinc-800
        rounded-3xl p-6 shadow-sm">
        <h2 class="text-sm font-semibold text-zinc-500 dark:text-zinc-400 mb-4">
          常用网站
        </h2>
        <div class="grid grid-cols-3 sm:grid-cols-4 gap-3">
          <a
            v-for="os in oftenSites"
            :key="os.name"
            :href="os.url"
            target="_blank"
            rel="noopener noreferrer"
            class="flex flex-col items-center gap-1 p-3 rounded-2xl
              bg-white/60 dark:bg-zinc-800/60
              border border-zinc-200/60 dark:border-zinc-700/60
              hover:scale-[1.04] hover:shadow-md transition-all text-xs
              text-zinc-700 dark:text-zinc-200"
          >
            <i :class="os.icon" class="text-lg"></i>
            <span class="truncate w-full text-center">{{ os.name }}</span>
          </a>
        </div>
      </section>

      <!-- 随机一言（支持点击刷新） -->
      <section class="bg-white/50 dark:bg-zinc-900/50 backdrop-blur-lg
        border border-zinc-200 dark:border-zinc-800
        rounded-3xl p-5 shadow-sm text-center">
        <p
          class="italic text-zinc-700 dark:text-zinc-300 text-sm leading-relaxed
            cursor-pointer select-none
            hover:opacity-80 active:scale-[0.98]
            transition"
          @click="fetchSaying"
          title="点击刷新一言"
        >
          「{{ saying }}」
        </p>
        <p class="mt-2 text-xs text-zinc-400 select-none">
          随机一言 · 点击刷新
        </p>
      </section>

      <footer class="text-center text-xs text-zinc-400">
        © {{ new Date().getFullYear() }} lest-day 的个人主页 |
        <a
          href="https://uptime.lestday233.eu.org/"
          target="_blank"
          rel="noopener noreferrer"
          class="hover:text-zinc-300 transition-colors"
        >
          网页状态
        </a>
      </footer>
    </main>
  </div>
</template>