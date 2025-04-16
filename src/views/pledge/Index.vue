<template>
  <main>
    <div class="glass-effect rounded-lg p-4 sm:p-6 mb-6">
      <h1 class="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">设置假质押取现记录</h1>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
        <div class="space-y-4">
          <div>
            <label class="block text-sm text-white/60 mb-2">参与地址</label>
            <input type="text" class="w-full bg-white/5 border border-white/10 rounded-lg px-3 sm:px-4 py-2 text-sm focus:outline-none focus:border-primary" placeholder="输入钱包地址">
          </div>
          <div>
            <label class="block text-sm text-white/60 mb-2">参与状态</label>
            <div class="flex space-x-2 sm:space-x-4">
              <button class="flex-1 rounded-button bg-white/5 hover:bg-white/10 py-2 text-xs sm:text-sm">取现</button>
              <button class="flex-1 rounded-button bg-white/5 hover:bg-white/10 py-2 text-xs sm:text-sm">质押</button>
            </div>
          </div>
        </div>
        <div class="space-y-4">
          <div>
            <label class="block text-sm text-white/60 mb-2">参与金额</label>
            <input type="text" class="w-full bg-white/5 border border-white/10 rounded-lg px-3 sm:px-4 py-2 text-sm focus:outline-none focus:border-primary" placeholder="输入随机数范围">
          </div>
          <div>
            <label class="block text-sm text-white/60 mb-2">参与时间</label>
            <input type="text" class="w-full bg-white/5 border border-white/10 rounded-lg px-3 sm:px-4 py-2 text-sm focus:outline-none focus:border-primary" placeholder="输入随机时间范围">
          </div>
        </div>
        <div class="md:col-span-2">
          <label class="block text-sm text-white/60 mb-2">24小时交易额变化</label>
          <div class="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-4">
            <button class="rounded-button bg-white/5 hover:bg-white/10 py-2 text-xs sm:text-sm">00:00-06:00</button>
            <button class="rounded-button bg-white/5 hover:bg-white/10 py-2 text-xs sm:text-sm">06:00-12:00</button>
            <button class="rounded-button bg-white/5 hover:bg-white/10 py-2 text-xs sm:text-sm">12:00-18:00</button>
            <button class="rounded-button bg-white/5 hover:bg-white/10 py-2 text-xs sm:text-sm">18:00-24:00</button>
          </div>
          <div class="mt-4">
            <label class="block text-sm text-white/60 mb-2">变化趋势</label>
            <div class="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4">
              <button class="sm:flex-1 rounded-button bg-white/5 hover:bg-white/10 py-2 text-xs sm:text-sm">递增</button>
              <button class="sm:flex-1 rounded-button bg-white/5 hover:bg-white/10 py-2 text-xs sm:text-sm">递减</button>
              <button class="sm:flex-1 rounded-button bg-white/5 hover:bg-white/10 py-2 text-xs sm:text-sm">随机波动</button>
            </div>
          </div>
        </div>
        <div class="md:col-span-2 flex justify-end mt-2 sm:mt-4">
          <button class="rounded-button bg-primary hover:bg-primary/90 text-white px-4 sm:px-6 py-2 text-xs sm:text-sm">
            确认更改
          </button>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">


</script>

<style lang="scss" scoped>
.rounded-button {
  border-radius: 6px;
  transition: all 0.2s;
}

/* 移动端优化样式 */
@media (max-width: 640px) {
  .glass-effect {
    border-radius: 10px;
  }
  
  .rounded-button {
    padding-left: 0.75rem;
    padding-right: 0.75rem;
  }
}
</style>
