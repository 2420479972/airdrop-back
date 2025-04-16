<template>
  <main>
    <div class="glass-effect rounded-lg p-4 sm:p-6 mb-6">
      <div class="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
        <h1 class="text-2xl font-bold">平台预售</h1>
        <button class="!rounded-button bg-primary hover:bg-primary/90 text-white px-4 py-2 text-sm flex items-center" @click="showEditModal">
          <i class="fas fa-edit mr-2"></i>编辑预售
        </button>
      </div>
      <div class="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-8">
        <div class="bg-white/5 p-4 rounded-lg flex flex-col">
          <p class="text-sm text-white/60 mb-1">代币名称</p>
          <p class="text-white break-all">LHT</p>
        </div>
        <div class="bg-white/5 p-4 rounded-lg flex flex-col">
          <p class="text-sm text-white/60 mb-1">代币地址</p>
          <p class="text-white break-all truncate">0x7a23b45c6d8f9123456789abcdef0123456789</p>
        </div>
        <div class="bg-white/5 p-4 rounded-lg flex flex-col">
          <p class="text-sm text-white/60 mb-1">代币总量</p>
          <p class="text-white">1,000,000,000 枚</p>
        </div>
        <div class="bg-white/5 p-4 rounded-lg flex flex-col">
          <p class="text-sm text-white/60 mb-1">认购价格</p>
          <p class="text-white">$0.05</p>
        </div>
        <div class="bg-white/5 p-4 rounded-lg flex flex-col">
          <p class="text-sm text-white/60 mb-1">认购1份</p>
          <p class="text-white">10,000 枚</p>
        </div>
        <div class="bg-white/5 p-4 rounded-lg flex flex-col">
          <p class="text-sm text-white/60 mb-1">上线价格</p>
          <p class="text-white">$0.10</p>
        </div>
        <div class="bg-white/5 p-4 rounded-lg flex flex-col">
          <p class="text-sm text-white/60 mb-1">已购总量</p>
          <p class="text-white">250,000,000 枚</p>
        </div>
      </div>
      <h2 class="text-xl font-bold mb-6">设置假的近十天预售数据</h2>
      <form class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div>
          <label class="block text-sm text-white/60 mb-2">日期</label>
          <div class="relative">
            <select class="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-sm focus:outline-none focus:border-primary appearance-none">
              <option value="">选择日期</option>
              <option value="2023-11-01">2023-11-01 09:15</option>
              <option value="2023-11-02">2023-11-02 14:30</option>
              <option value="2023-11-03">2023-11-03 11:45</option>
              <option value="2023-11-04">2023-11-04 16:20</option>
              <option value="2023-11-05">2023-11-05 10:10</option>
              <option value="2023-11-06">2023-11-06 13:25</option>
              <option value="2023-11-07">2023-11-07 15:50</option>
              <option value="2023-11-08">2023-11-08 08:35</option>
              <option value="2023-11-09">2023-11-09 17:15</option>
              <option value="2023-11-10">2023-11-10 12:40</option>
            </select>
            <i class="fas fa-chevron-down absolute right-3 top-1/2 -translate-y-1/2 text-white/40 pointer-events-none"></i>
          </div>
        </div>
        <div>
          <label class="block text-sm text-white/60 mb-2">认购量</label>
          <div class="relative">
            <select class="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-sm focus:outline-none focus:border-primary appearance-none" multiple>
              <option value="1000">1,000 枚</option>
              <option value="5000">5,000 枚</option>
              <option value="10000">10,000 枚</option>
              <option value="50000">50,000 枚</option>
              <option value="100000">100,000 枚</option>
              <option value="500000">500,000 枚</option>
              <option value="1000000">1,000,000 枚</option>
            </select>
            <i class="fas fa-chevron-down absolute right-3 top-1/2 -translate-y-1/2 text-white/40 pointer-events-none"></i>
          </div>
        </div>
        <div>
          <label class="block text-sm text-white/60 mb-2">金额</label>
          <div class="relative">
            <select class="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-sm focus:outline-none focus:border-primary appearance-none" multiple>
              <option value="50">$50</option>
              <option value="100">$100</option>
              <option value="500">$500</option>
              <option value="1000">$1,000</option>
              <option value="5000">$5,000</option>
              <option value="10000">$10,000</option>
              <option value="50000">$50,000</option>
            </select>
            <i class="fas fa-chevron-down absolute right-3 top-1/2 -translate-y-1/2 text-white/40 pointer-events-none"></i>
          </div>
        </div>
        <div>
          <label class="block text-sm text-white/60 mb-2">转出地址</label>
          <input type="text" class="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-sm focus:outline-none focus:border-primary" placeholder="输入转出地址">
        </div>
        <div>
          <label class="block text-sm text-white/60 mb-2">转出数量</label>
          <input type="text" class="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-sm focus:outline-none focus:border-primary" placeholder="输入转出数量">
        </div>
      </form>
      <div class="mt-6 flex flex-col sm:flex-row justify-end gap-3">
        <button class="!rounded-button bg-primary hover:bg-primary/90 text-white px-6 py-2 text-sm flex items-center w-full sm:w-auto">
          <i class="fas fa-check mr-2"></i>更改确认
        </button>
      </div>
    </div>
    <Modal v-model="showEditModal">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label class="block text-sm text-white/60 mb-2">代币名称</label>
            <input type="text" v-model="formData.tokenName" class="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-sm focus:outline-none focus:border-primary">
          </div>
          <div>
            <label class="block text-sm text-white/60 mb-2">代币地址</label>
            <input type="text" v-model="formData.tokenAddress" class="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-sm focus:outline-none focus:border-primary">
          </div>
          <div>
            <label class="block text-sm text-white/60 mb-2">代币总量</label>
            <input type="text" v-model="formData.totalSupply" class="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-sm focus:outline-none focus:border-primary">
          </div>
          <div>
            <label class="block text-sm text-white/60 mb-2">认购价格</label>
            <input type="text" v-model="formData.purchasePrice" class="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-sm focus:outline-none focus:border-primary">
          </div>
          <div>
            <label class="block text-sm text-white/60 mb-2">认购1份</label>
            <input type="text" v-model="formData.purchaseUnit" class="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-sm focus:outline-none focus:border-primary">
          </div>
          <div>
            <label class="block text-sm text-white/60 mb-2">上线价格</label>
            <input type="text" v-model="formData.listingPrice" class="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-sm focus:outline-none focus:border-primary">
          </div>
          <div>
            <label class="block text-sm text-white/60 mb-2">已购总量</label>
            <input type="text" v-model="formData.totalPurchased" class="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-sm focus:outline-none focus:border-primary">
          </div>
          <div>
            <label class="block text-sm text-white/60 mb-2">总购次数</label>
            <input type="text" v-model="formData.totalTransactions" class="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-sm focus:outline-none focus:border-primary">
          </div>
          <div>
            <label class="block text-sm text-white/60 mb-2">开始时间</label>
            <input type="datetime-local" v-model="formData.startTime" class="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-sm focus:outline-none focus:border-primary">
          </div>
          <div>
            <label class="block text-sm text-white/60 mb-2">结束时间</label>
            <input type="datetime-local" v-model="formData.endTime" class="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-sm focus:outline-none focus:border-primary">
          </div>
        </div>
        <div class="mt-6 flex justify-end gap-3">
          <button @click="showEditModal = false" class="px-4 py-2 !rounded-button bg-white/10 hover:bg-white/20 text-white text-sm">取消</button>
          <button @click="handleSave" class="px-4 py-2 !rounded-button bg-primary hover:bg-primary/90 text-white text-sm">保存</button>
        </div>
    </Modal>
  </main>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Modal from "@/components/Modal.vue"

const showEditModal = ref(false)

const formData = ref({
  tokenName: 'LHT',
  tokenAddress: '0x7a23b45c6d8f9123456789abcdef0123456789',
  totalSupply: '1,000,000,000 枚',
  purchasePrice: '$0.05',
  purchaseUnit: '10,000 枚',
  listingPrice: '$0.10',
  totalPurchased: '250,000,000 枚',
  totalTransactions: '25,000 次',
  startTime: '',
  endTime: ''
})

const handleSave = () => {
  // TODO: 实现保存逻辑
  showEditModal.value = false
}
</script>

<style lang="scss" scoped>
.glass-effect {
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.rounded-button {
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }
}
</style>
