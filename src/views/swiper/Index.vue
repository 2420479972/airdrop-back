<template>
  <main>
    <div class="space-y-6">
      <div v-for="(item, index) in items" :key="index" class="glass-effect rounded-lg p-4 sm:p-6">
        <h1 class="text-lg sm:text-xl font-bold mb-4 flex items-center">
          <i class="fas fa-images mr-2 text-primary"></i>
          {{ item.title }}
        </h1>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div class="col-span-1 md:col-span-2">
            <label class="block text-sm text-white/60 mb-2">更换轮播图</label>
            <div class="flex items-center">
              <input type="text" v-model="item.imgUrl" class="flex-1 bg-white/5 border border-white/10 rounded-lg px-3 sm:px-4 py-2 text-sm focus:outline-none focus:border-primary" placeholder="输入图片URL">
              <button class="ml-2 rounded-button bg-white/5 hover:bg-white/10 px-2 sm:px-3 py-2">
                <i class="fas fa-upload"></i>
              </button>
            </div>
          </div>
          <div>
            <label class="block text-sm text-white/60 mb-2">更改跳转链接</label>
            <input type="text" v-model="item.linkUrl" class="w-full bg-white/5 border border-white/10 rounded-lg px-3 sm:px-4 py-2 text-sm focus:outline-none focus:border-primary" placeholder="输入跳转链接">
          </div>
          <div class="md:col-span-3 flex justify-end mt-2 sm:mt-4">
            <button class="!rounded-button bg-primary hover:bg-primary/90 text-white px-4 py-2 text-sm flex items-center">
            <i class="fas fa-edit mr-2"></i>更改
          </button>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
const items = [
  { title: "质押轮播图", imgUrl: "", linkUrl: "" },
  { title: "发布项目轮播图", imgUrl: "", linkUrl: "" },
  { title: "社区申请轮播图", imgUrl: "", linkUrl: "" },
  { title: "赎回资产轮播图", imgUrl: "", linkUrl: "" },
  { title: "合作申请轮播图", imgUrl: "", linkUrl: "" }
];
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
