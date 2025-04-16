<template>
  <main>
    <div class="glass-effect rounded-lg p-6 mb-6">
      <h2 class="text-xl font-bold mb-6">聚合空投</h2>
      <div class="overflow-x-auto">
        <Table
          :data="airdropData"
          :columns="columns"
          :show-actions="true"
          :show-search="true"
        >
          <template #actions="{ row }">
            <button class="px-3 py-1 rounded-button bg-primary/20 hover:bg-primary/30 text-primary text-sm whitespace-nowrap" @click="openEditModal()">
              <i class="fas fa-edit mr-1"></i>编辑
            </button>
            <button class="px-3 py-1 rounded-button bg-secondary/20 hover:bg-secondary/30 text-secondary text-sm whitespace-nowrap ml-2" @click="openDeleteModal()">
              <i class="fas fa-trash-alt mr-1"></i>删除
            </button>
            <button class="px-3 py-1 rounded-button bg-green-500/20 hover:bg-green-500/30 text-green-500 text-sm whitespace-nowrap ml-2">
              <i class="fas fa-check-circle mr-1"></i>已审
            </button>
          </template>
        </Table>
      </div>
    </div>
    <div class="glass-effect rounded-lg p-6">
      <h2 class="text-xl font-bold mb-6">添加假聚合记录</h2>
      <div class="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div class="space-y-2">
          <div>
            <label class="block text-sm text-white/60 mb-2">空投时间</label>
            <input type="text" value="2023-11-15 14:30:00" class="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-sm focus:outline-none focus:border-primary">
          </div>
          <div>
            <label class="block text-sm text-white/60 mb-2">空投状态</label>
            <select class="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-sm focus:outline-none focus:border-primary">
              <option>进行中</option>
              <option>已结束</option>
              <option>即将开始</option>
            </select>
        </div>
        </div>
        <div class="space-y-6">
          <div>
            <label class="block text-sm text-white/60 mb-2">领取地址数量</label>
            <input type="number" value="1250" class="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-sm focus:outline-none focus:border-primary">
          </div>
          <div>
            <label class="block text-sm text-white/60 mb-2">24小时内领取</label>
            <div class="relative">
              <select class="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-sm focus:outline-none focus:border-primary appearance-none">
                <option value="all">全部会员</option>
                <option value="seed">种子会员</option>
                <option value="sprout">萌芽会员</option>
                <option value="node">节点会员</option>
                <option value="genesis">创世会员</option>
              </select>
              <div class="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                <i class="fas fa-chevron-down text-white/40"></i>
              </div>
            </div>
          </div>
          <div>
            <label class="block text-sm text-white/60 mb-2">取出数量</label>
            <input type="number" value="5000" class="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-sm focus:outline-none focus:border-primary">
          </div>
        </div>
        <div class="space-y-6">
          <div>
            <label class="block text-sm text-white/60 mb-2">取出地址</label>
            <input type="text" value="0x3f5CE5FBFe3E9af3971dD833D26bA9b5C936f0bE" class="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-sm focus:outline-none focus:border-primary">
          </div>
          <div>
            <label class="block text-sm text-white/60 mb-2">自定义选择</label>
            <div class="grid grid-cols-2 gap-2">
              <label class="inline-flex items-center">
                <input type="checkbox" class="form-checkbox bg-white/5 border-white/10 text-primary focus:ring-primary rounded-button" checked>
                <span class="ml-2 text-sm">种子</span>
              </label>
              <label class="inline-flex items-center">
                <input type="checkbox" class="form-checkbox bg-white/5 border-white/10 text-primary focus:ring-primary rounded-button" checked>
                <span class="ml-2 text-sm">萌芽</span>
              </label>
              <label class="inline-flex items-center">
                <input type="checkbox" class="form-checkbox bg-white/5 border-white/10 text-primary focus:ring-primary rounded-button" checked>
                <span class="ml-2 text-sm">节点</span>
              </label>
              <label class="inline-flex items-center">
                <input type="checkbox" class="form-checkbox bg-white/5 border-white/10 text-primary focus:ring-primary rounded-button" checked>
                <span class="ml-2 text-sm">创世</span>
              </label>
            </div>
          </div>
        </div>
        <div class="space-y-6">
          <div>
            <label class="block text-sm text-white/60 mb-2">空投数量</label>
            <div class="space-y-3">
              <div>
                <label class="block text-xs text-white/60 mb-1">种子会员</label>
                <input type="number" value="1200" class="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-sm focus:outline-none focus:border-primary">
              </div>
              <div>
                <label class="block text-xs text-white/60 mb-1">萌芽会员</label>
                <input type="number" value="800" class="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-sm focus:outline-none focus:border-primary">
              </div>
              <div>
                <label class="block text-xs text-white/60 mb-1">节点会员</label>
                <input type="number" value="500" class="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-sm focus:outline-none focus:border-primary">
              </div>
              <div>
                <label class="block text-xs text-white/60 mb-1">创世会员</label>
                <input type="number" value="300" class="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-sm focus:outline-none focus:border-primary">
              </div>
            </div>
          </div>
        </div>
        
      </div>
      <div class="flex justify-end mt-6 space-x-4">
        <button class="px-6 py-2 rounded-button bg-white/5 hover:bg-white/10 text-sm">取消</button>
        <button class="px-6 py-2 rounded-button bg-primary hover:bg-primary/90 text-white text-sm">确认</button>
      </div>
    </div>
  </main>

  <Modal v-model="showEditModal">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label class="block text-sm text-white/60 mb-2">合约地址</label>
          <input type="text" value="0x8d3...2e1f" class="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-sm focus:outline-none focus:border-primary">
        </div>
        <div>
          <label class="block text-sm text-white/60 mb-2">代币名称</label>
          <input type="text" value="META" class="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-sm focus:outline-none focus:border-primary">
        </div>
        <div>
          <label class="block text-sm text-white/60 mb-2">空投总量</label>
          <input type="number" value="1000000" class="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-sm focus:outline-none focus:border-primary">
        </div>
        <div>
          <label class="block text-sm text-white/60 mb-2">流动市值 (USDT)</label>
          <input type="number" value="500000" class="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-sm focus:outline-none focus:border-primary">
        </div>
        <div>
          <label class="block text-sm text-white/60 mb-2">主网选择</label>
          <select class="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-sm focus:outline-none focus:border-primary">
            <option>BSC主网</option>
            <option>ETH主网</option>
            <option>Polygon</option>
            <option>Solana</option>
          </select>
        </div>
        <div>
          <label class="block text-sm text-white/60 mb-2">结束时间</label>
          <input type="datetime-local" class="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-sm focus:outline-none focus:border-primary">
        </div>
        <div>
          <label class="block text-sm text-white/60 mb-2">开始时间</label>
          <input type="datetime-local" class="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-sm focus:outline-none focus:border-primary">
        </div>
        <div>
          <label class="block text-sm text-white/60 mb-2">领取1份</label>
          <input type="number" value="100" class="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-sm focus:outline-none focus:border-primary">
        </div>
        <div>
          <label class="block text-sm text-white/60 mb-2">种子会员领取</label>
          <input type="number" value="100" class="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-sm focus:outline-none focus:border-primary">
        </div>
        <div>
          <label class="block text-sm text-white/60 mb-2">萌芽会员领取</label>
          <input type="number" value="200" class="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-sm focus:outline-none focus:border-primary">
        </div>
        <div>
          <label class="block text-sm text-white/60 mb-2">节点会员领取比例</label>
          <input type="number" value="300" readonly class="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-sm focus:outline-none focus:border-primary">
        </div>
        <div>
          <label class="block text-sm text-white/60 mb-2">创世会员领取比例</label>
          <input type="number" value="400" readonly class="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-sm focus:outline-none focus:border-primary">
        </div>
        <div class="md:col-span-2">
          <label class="block text-sm text-white/60 mb-2">Logo展示</label>
          <div class="flex items-center">
            <div class="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center mr-4">
              <i class="fas fa-image text-white/40"></i>
            </div>
            <button class="px-4 py-2 rounded-button bg-white/5 hover:bg-white/10 text-sm">随机匹配</button>
          </div>
        </div>
        <div class="md:col-span-2">
          <label class="block text-sm text-white/60 mb-2">空投项目简介</label>
          <textarea class="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-sm focus:outline-none focus:border-primary h-32">这是一个关于META代币的空投项目，旨在奖励早期支持者...</textarea>
        </div>
    </div>
  </Modal>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Table from '@/components/Table.vue'
import Modal from '@/components/Modal.vue'

// 表格列配置
const columns = [
  { title: "代币名称", key: "tokenName" },
  { title: "空投数量", key: "airdropAmount" },
  { title: "代币地址", key: "tokenAddress" },
  { title: "流动市值", key: "liquidityValue" },
  { title: "当前价格", key: "currentPrice" },
  { title: "空投1份", key: "singleAirdrop" }
]

// 表格数据
const airdropData = [
  {
    tokenName: "META",
    airdropAmount: "1,000,000",
    tokenAddress: "0x8d3...2e1f",
    liquidityValue: "$500,000",
    currentPrice: "$0.5",
    singleAirdrop: "100 META"
  },
  {
    tokenName: "DEFI",
    airdropAmount: "2,500,000",
    tokenAddress: "0x4a7...9c3d",
    liquidityValue: "$1,250,000",
    currentPrice: "$0.5",
    singleAirdrop: "250 DEFI"
  },
  {
    tokenName: "NFT",
    airdropAmount: "500,000",
    tokenAddress: "0x2b5...7f8e",
    liquidityValue: "$250,000",
    currentPrice: "$0.5",
    singleAirdrop: "50 NFT"
  },
  {
    tokenName: "DAO",
    airdropAmount: "3,000,000",
    tokenAddress: "0x9f2...5e1a",
    liquidityValue: "$1,500,000",
    currentPrice: "$0.5",
    singleAirdrop: "300 DAO"
  },
  {
    tokenName: "GAME",
    airdropAmount: "800,000",
    tokenAddress: "0x3c8...7b2d",
    liquidityValue: "$400,000",
    currentPrice: "$0.5",
    singleAirdrop: "80 GAME"
  },
  {
    tokenName: "WEB3",
    airdropAmount: "1,200,000",
    tokenAddress: "0x5e9...3a4b",
    liquidityValue: "$600,000",
    currentPrice: "$0.5",
    singleAirdrop: "120 WEB3"
  }
]

const showEditModal = ref(false)

function openEditModal() {
  showEditModal.value = true
}

function openDeleteModal() {
  // 实现删除弹窗逻辑
}
</script>

<style lang="scss" scoped>

</style>
