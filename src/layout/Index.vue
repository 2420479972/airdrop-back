<template>
  <main class="flex h-full w-full">
    <!-- 移动端菜单按钮 -->
    <!-- 大屏侧边栏 - 在移动端隐藏 -->
    <aside class="sidebar h-screen w-[150px] z-50 border-r border-white/10 hidden md:block">
      <div class="p-4 border-b border-white/10">
        <h1 class="text-xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">链汇管理系统</h1>
      </div>
      <nav class="py-4">
        <RouterLink
          v-for="route in menuRoutes"
          :key="route.path"
          :to="route.path"
          class="nav-item flex items-center px-4 py-3 text-white/80 hover:text-white"
          :class="{ 'bg-white/5': isActiveRoute(route.path) }"
        >
          <i :class="getMenuIcon(route.name)" class="w-6"></i>
          <span class="ml-3">{{ getMenuTitle(route.name) }}</span>
        </RouterLink>
      </nav>
    </aside>
    <!-- 移动端侧滑菜单 -->
    <div 
      v-if="isMobileMenuOpen" 
      class="fixed inset-0 bg-black/50 z-[60] md:hidden"
      @click="closeMobileMenu"
    ></div>
    <aside
      class="fixed top-0 left-0 h-screen w-[60%] glass-effect z-[70] border-r border-white/10 bg-[#121212] transform transition-transform duration-300 md:hidden"
      :class="isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'"
    >
      <div class="flex justify-between items-center p-4 border-b border-white/10">
        <h1 class="text-xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">链汇管理系统</h1>
      </div>
      <nav class="py-4">
        <RouterLink
          v-for="route in menuRoutes"
          :key="route.path"
          :to="route.path"
          class="nav-item flex items-center px-4 py-3 text-white/80 hover:text-white"
          :class="{ 'bg-white/5': isActiveRoute(route.path) }"
          @click="closeMobileMenu"
        >
          <i :class="getMenuIcon(route.name)" class="w-6"></i>
          <span class="ml-3">{{ getMenuTitle(route.name) }}</span>
        </RouterLink>
      </nav>
    </aside>
    <div class="flex-1 flex flex-col h-full">
      <header class="z-40 py-[9px] border-b border-white/10">
        <div class="flex items-center justify-between h-full px-6">
          <button
              @click="toggleMobileMenu"
              class="z-50 md:hidden"
          >
            <i class="fas fa-bars text-white"></i>
          </button>
          <div class="flex items-center">
            <div class="relative ml-auto mr-4 hidden md:block">
              <input type="text" placeholder="搜索..." class="bg-white/5 border border-white/10 rounded-lg px-4 py-2 pl-10 w-[500px] text-sm focus:outline-none focus:border-primary">
              <i class="fas fa-search absolute left-3 top-1/2 -translate-y-1/2 text-white/40"></i>
            </div>
          </div>
          <div class="flex items-center">
            <button class="mr-5 relative">
              <i class="fas fa-bell text-white/80"></i>
              <span class="absolute top-1 -right-3 w-4 h-4 bg-secondary rounded-full flex items-center justify-center text-xs">5</span>
            </button>
            <i class="fas fa-wallet mr-2 text-primary"></i>
            <span class="text-sm text-white/80 hidden sm:inline">0x7a23b45c6d8f9123456789abcdef0123456789</span>
            <span class="text-sm text-white/80 sm:hidden">0x7a23...789</span>
          </div>
        </div>
      </header>
      <main class="flex-1 overflow-y-auto px-6 py-6">
        <RouterView></RouterView>
      </main>
    </div>
  </main>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()
const isMobileMenuOpen = ref(false)

// 菜单路由配置
const menuRoutes = computed(() => {
  return router.options.routes[0].children?.filter(route => route.path !== '/') || []
})

// 获取菜单图标
function getMenuIcon(name?: string) {
  const iconMap: Record<string, string> = {
    'home': 'fas fa-home',
    'setting': 'fas fa-cog',
    'pre-sale': 'fas fa-shopping-cart',
    'batch-airdrop': 'fas fa-rocket',
    'application': 'fas fa-compass',
    'polymeric-airdrop': 'fas fa-parachute-box',
    'pledge': 'fas fa-lock',
    'swiper': 'fas fa-images',
    'notice': 'fas fa-bell',
    'main-airdrop': 'fas fa-gift'
  }
  return name ? iconMap[name] : 'fas fa-circle'
}

// 获取菜单标题
function getMenuTitle(name?: string) {
  const titleMap: Record<string, string> = {
    'home': '首页',
    'setting': '系统设置',
    'pre-sale': '认购管理',
    'batch-airdrop': '批量空投',
    'application': '探索管理',
    'polymeric-airdrop': '聚合空投',
    'pledge': '质押管理',
    'swiper': '轮播管理',
    'notice': '通知管理',
    'main-airdrop': '链汇空投'
  }
  return name ? titleMap[name] : '未知菜单'
}

// 判断当前路由是否激活
function isActiveRoute(path: string) {
  return route.path === path
}

function toggleMobileMenu() {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}

function closeMobileMenu() {
  isMobileMenuOpen.value = false
}
</script>

<style lang="scss" scoped>
.nav-item:hover {
  background: linear-gradient(45deg, rgba(0, 240, 255, 0.1), rgba(255, 51, 102, 0.1));
}

.router-link-active {
  background: linear-gradient(45deg, rgba(0, 240, 255, 0.1), rgba(255, 51, 102, 0.1));
  color: white;
}
</style>
