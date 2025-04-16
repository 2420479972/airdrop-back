<template>
  <main class="space-y-4 sm:space-y-6">
    <!-- 质押总量 -->
    <div class="glass-effect rounded-lg p-3 sm:p-6">
      <h2 class="text-xl font-bold mb-3 sm:mb-6">质押总量</h2>
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-6">
        <!-- 真实流动性池 -->
        <div class="glass-effect rounded-lg p-3 sm:p-4">
          <div class="flex items-center justify-between mb-3">
            <h3 class="text-lg font-medium">真实流动性池</h3>
            <i class="fas fa-coins text-primary"></i>
          </div>
          <div class="space-y-3">
            <div class="flex flex-col sm:flex-row sm:items-center gap-3">
              <div class="w-full sm:w-1/2">
                <p class="text-2xl font-bold">5,678,901</p>
              </div>
              <div class="w-full sm:w-1/2 sm:flex items-center sm:space-x-2 sm:space-y-0 space-y-2">
                <div class="relative w-full">
                  <NumberInput></NumberInput>
                </div>
                <div class="flex gap-x-2 items-center h-full w-full">
                  <button class="w-full py-1 !rounded-button bg-primary hover:bg-primary/80 text-white">取出</button>
                  <button class="w-full py-1 !rounded-button bg-secondary hover:bg-secondary/80 text-white">转入</button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- 假流动性池 -->
        <div class="glass-effect rounded-lg p-3 sm:p-4">
          <div class="flex items-center justify-between mb-3">
            <h3 class="text-lg font-medium">假流动性池</h3>
            <i class="fas fa-coins text-secondary"></i>
          </div>
          <div class="space-y-3">
            <div class="flex flex-col sm:flex-row sm:items-center gap-3">
              <div class="w-full sm:w-1/2">
                <NumberInput></NumberInput>
              </div>
              <div class="w-full sm:w-1/2">
                <button class="w-full sm:w-auto px-3 py-1 !rounded-button bg-primary hover:bg-primary/80 text-white">修改</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 参与人数 -->
    <div class="glass-effect rounded-lg p-3 sm:p-6">
      <h2 class="text-xl font-bold mb-3 sm:mb-6">参与人数</h2>
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-6">
        <!-- 真实参与人数 -->
        <div class="glass-effect rounded-lg p-3 sm:p-4">
          <div class="flex items-center justify-between mb-3">
            <h3 class="text-lg font-medium">真实参与人数</h3>
            <i class="fas fa-users text-primary"></i>
          </div>
          <p class="text-2xl font-bold">12,345</p>
        </div>

        <!-- 假参与人数 -->
        <div class="glass-effect rounded-lg p-3 sm:p-4">
          <div class="flex items-center justify-between mb-3">
            <h3 class="text-lg font-medium">假参与人数</h3>
            <i class="fas fa-user-clock text-secondary"></i>
          </div>
          <div class="flex flex-col sm:flex-row sm:items-center gap-3">
            <div class="w-full sm:w-1/2">
              <NumberInput></NumberInput>
            </div>
            <div class="w-full sm:w-1/2">
              <button class="w-full sm:w-auto px-3 py-1 !rounded-button bg-primary hover:bg-primary/80 text-white">修改</button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 会员数据 -->
    <div class="glass-effect rounded-lg p-3 sm:p-6">
      <h2 class="text-xl font-bold mb-3 sm:mb-6">会员数据</h2>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
        <!-- 种子会员 -->
        <div class="glass-effect rounded-lg p-3 sm:p-4">
          <div class="flex items-center justify-between mb-3">
            <h3 class="text-lg font-medium">种子会员</h3>
            <i class="fas fa-user text-primary"></i>
          </div>
          <div class="space-y-3">
            <div>
              <p class="text-sm text-white/60 mb-1">真实会员数据</p>
              <p class="text-2xl font-bold">3,456</p>
            </div>
            <div>
              <p class="text-sm text-white/60 mb-1">假会员数据</p>
              <div class="flex flex-col sm:flex-row sm:items-center gap-3">
                <div class="w-full sm:w-1/2">
                  <NumberInput></NumberInput>
                </div>
                <div class="w-full sm:w-1/2">
                  <button class="w-full sm:w-auto px-3 py-1 !rounded-button bg-primary hover:bg-primary/80 text-white">修改</button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- 萌芽会员 -->
        <div class="glass-effect rounded-lg p-3 sm:p-4">
          <div class="flex items-center justify-between mb-3">
            <h3 class="text-lg font-medium">萌芽会员</h3>
            <i class="fas fa-user text-secondary"></i>
          </div>
          <div class="space-y-3">
            <div>
              <p class="text-sm text-white/60 mb-1">真实会员数据</p>
              <p class="text-2xl font-bold">2,345</p>
            </div>
            <div>
              <p class="text-sm text-white/60 mb-1">假会员数据</p>
              <div class="flex flex-col sm:flex-row sm:items-center gap-3">
                <div class="w-full sm:w-1/2">
                  <NumberInput></NumberInput>
                </div>
                <div class="w-full sm:w-1/2">
                  <button class="w-full sm:w-auto px-3 py-1 !rounded-button bg-primary hover:bg-primary/80 text-white">修改</button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- 节点会员 -->
        <div class="glass-effect rounded-lg p-3 sm:p-4">
          <div class="flex items-center justify-between mb-3">
            <h3 class="text-lg font-medium">节点会员</h3>
            <i class="fas fa-user-shield text-primary"></i>
          </div>
          <div class="space-y-3">
            <div>
              <p class="text-sm text-white/60 mb-1">真实会员数据</p>
              <p class="text-2xl font-bold">1,234</p>
            </div>
            <div>
              <p class="text-sm text-white/60 mb-1">假会员数据</p>
              <div class="flex flex-col sm:flex-row sm:items-center gap-3">
                <div class="w-full sm:w-1/2">
                  <NumberInput></NumberInput>
                </div>
                <div class="w-full sm:w-1/2">
                  <button class="w-full sm:w-auto px-3 py-1 !rounded-button bg-primary hover:bg-primary/80 text-white">修改</button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- 创世会员 -->
        <div class="glass-effect rounded-lg p-3 sm:p-4">
          <div class="flex items-center justify-between mb-3">
            <h3 class="text-lg font-medium">创世会员</h3>
            <i class="fas fa-crown text-secondary"></i>
          </div>
          <div class="space-y-3">
            <div>
              <p class="text-sm text-white/60 mb-1">真实会员数据</p>
              <p class="text-2xl font-bold">567</p>
            </div>
            <div>
              <p class="text-sm text-white/60 mb-1">假会员数据</p>
              <div class="flex flex-col sm:flex-row sm:items-center gap-3">
                <div class="w-full sm:w-1/2">
                  <NumberInput></NumberInput>
                </div>
                <div class="w-full sm:w-1/2">
                  <button class="w-full sm:w-auto px-3 py-1 !rounded-button bg-primary hover:bg-primary/80 text-white">修改</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 系统参数设置 -->
    <div class="glass-effect rounded-lg p-3 sm:p-6">
      <h2 class="text-xl font-bold mb-3 sm:mb-6">系统参数设置</h2>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6">
        <!-- 第一列 -->
        <div class="space-y-3">
          <div>
            <label class="block text-sm text-white/60 mb-1">路由地址</label>
            <input type="text" class="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-primary" placeholder="输入路由地址">
          </div>
          <div>
            <label class="block text-sm text-white/60 mb-1">付费Token地址</label>
            <input type="text" class="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-primary" placeholder="输入Token地址">
          </div>
          <div>
            <label class="block text-sm text-white/60 mb-1">种子会员佣金比例</label>
            <input type="text" class="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-primary" placeholder="输入比例">
          </div>
          <div>
            <label class="block text-sm text-white/60 mb-1">萌芽会员佣金比例</label>
            <input type="text" class="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-primary" placeholder="输入比例">
          </div>
          <div>
            <label class="block text-sm text-white/60 mb-1">节点会员佣金比例</label>
            <input type="text" class="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-primary" placeholder="输入比例">
          </div>
          <div>
            <label class="block text-sm text-white/60 mb-1">创世会员佣金比例</label>
            <input type="text" class="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-primary" placeholder="输入比例">
          </div>
        </div>

        <!-- 第二列 -->
        <div class="space-y-3">
          <div>
            <label class="block text-sm text-white/60 mb-1">创世会员参与空投认购累加奖励比例</label>
            <input type="text" class="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-primary" placeholder="输入比例">
          </div>
          <div>
            <label class="block text-sm text-white/60 mb-1">节点会员参与空投认购累加奖励比例</label>
            <input type="text" class="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-primary" placeholder="输入比例">
          </div>
          <div>
            <label class="block text-sm text-white/60 mb-1">提交聚合空投价格</label>
            <input type="text" class="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-primary" placeholder="输入价格">
          </div>
          <div>
            <label class="block text-sm text-white/60 mb-1">提交发布社区价格</label>
            <input type="text" class="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-primary" placeholder="输入价格">
          </div>
          <div>
            <label class="block text-sm text-white/60 mb-1">提交项目合作价格</label>
            <input type="text" class="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-primary" placeholder="输入价格">
          </div>
        </div>

        <!-- 第三列 -->
        <div class="space-y-3">
          <div>
            <label class="block text-sm text-white/60 mb-1">平台收款地址</label>
            <input type="text" class="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-primary" placeholder="输入地址">
          </div>
          <div>
            <label class="block text-sm text-white/60 mb-1">平台赏金地址</label>
            <input type="text" class="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-primary" placeholder="输入地址">
          </div>
          <div>
            <label class="block text-sm text-white/60 mb-1">平台总空投地址</label>
            <input type="text" class="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-primary" placeholder="输入地址">
          </div>
          <div>
            <label class="block text-sm text-white/60 mb-1">平台质押比例</label>
            <input type="text" class="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-primary" placeholder="输入质押比例">
          </div>
          <div>
            <label class="block text-sm text-white/60 mb-1">平台质押周期(天)</label>
            <input type="number" class="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-primary" placeholder="输入质押天数">
          </div>
        </div>
      </div>
      <div class="mt-4 sm:mt-6 flex justify-end">
        <button class="px-4 sm:px-6 py-2 !rounded-button bg-primary hover:bg-primary/80 text-white">保存设置</button>
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">

import NumberInput from "@/components/NumberInput.vue";
</script>

<style lang="scss" scoped>
input[type="number"]::-webkit-inner-spin-button,
input[type="number"]::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

input[type="number"] {
  -moz-appearance: textfield;
}
</style>
