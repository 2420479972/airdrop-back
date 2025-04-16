<template>
  <main>
    <!-- 链汇空投表格 -->
    <div class="glass-effect rounded-lg p-6 mb-6">
      <div class="flex items-center justify-between mb-6">
        <h2 class="text-xl font-bold">链汇空投</h2>
        <button class="px-6 py-2 rounded-button bg-primary hover:bg-primary/90 text-white text-sm">添加空投</button>
      </div>
      <Table
        :columns="columns"
        :data="tableData"
        show-search
        show-checkbox
        show-batch-actions
      >
        <template #actions="{ row }">
          <button class="px-3 py-1 rounded-button bg-primary/20 hover:bg-primary/30 text-primary text-sm whitespace-nowrap" @click="openEditModal()">
              <i class="fas fa-edit mr-1"></i>编辑
            </button>
            <button class="px-3 py-1 rounded-button bg-secondary/20 hover:bg-secondary/30 text-secondary text-sm whitespace-nowrap ml-2" @click="openDeleteModal()">
              <i class="fas fa-trash-alt mr-1"></i>删除
            </button>
        </template>
      </Table>
    </div>
    <!-- 添加假空投记录 -->
    <div class="glass-effect rounded-lg p-6">
      <h2 class="text-xl font-bold mb-6">添加假空投记录</h2>
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
        <div class="form-group">
          <label class="form-label">随机地址数量</label>
          <NumberInput v-model="fakeAirdrop.randomAddressCount" placeholder="请输入随机地址数量" />
        </div>
        <div class="form-group">
          <label class="form-label">种子会员空投数量</label>
          <NumberInput v-model="fakeAirdrop.seedMemberAmount" placeholder="请输入种子会员空投数量" />
        </div>
        <div class="form-group">
          <label class="form-label">萌芽会员空投数量</label>
          <NumberInput v-model="fakeAirdrop.sproutMemberAmount" placeholder="请输入萌芽会员空投数量" />
        </div>
        <div class="form-group">
          <label class="form-label">节点会员空投数量</label>
          <NumberInput v-model="fakeAirdrop.nodeMemberAmount" placeholder="请输入节点会员空投数量" />
        </div>
        <div class="form-group">
          <label class="form-label">创世会员空投数量</label>
          <NumberInput v-model="fakeAirdrop.genesisMemberAmount" placeholder="请输入创世会员空投数量" />
        </div>
        <div class="form-group">
          <label class="form-label">种子会员占比</label>
          <NumberInput v-model="fakeAirdrop.seedMemberRatio" placeholder="请输入占比百分比" suffix="%" />
        </div>
        <div class="form-group">
          <label class="form-label">萌芽会员占比</label>
          <NumberInput v-model="fakeAirdrop.sproutMemberRatio" placeholder="请输入占比百分比" suffix="%" />
        </div>
        <div class="form-group">
          <label class="form-label">节点会员占比</label>
          <NumberInput v-model="fakeAirdrop.nodeMemberRatio" placeholder="请输入占比百分比" suffix="%" />
        </div>
        <div class="form-group">
          <label class="form-label">创世会员占比</label>
          <NumberInput v-model="fakeAirdrop.genesisMemberRatio" placeholder="请输入占比百分比" suffix="%" />
        </div>
        <div class="form-group sm:col-span-2">
          <label class="form-label">随机时间范围</label>
          <input type="text" placeholder="请选择时间范围" class="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-sm focus:outline-none focus:border-primary">
        </div>
      </div>
      <div class="flex justify-end gap-4">
        <button class="px-6 py-2 rounded-button bg-white/5 hover:bg-white/10 text-sm">取消</button>
        <button class="px-6 py-2 rounded-button bg-primary hover:bg-primary/90 text-white text-sm">确认</button>
      </div>
    </div>
  </main>
  <Modal v-model="showAddModal">
      <div class="form-group">
        <label class="form-label">合约地址</label>
        <input type="text" placeholder="输入合约地址">
      </div>
      <div class="form-row">
        <div class="form-group">
          <label class="form-label">代币名称</label>
          <input type="text" placeholder="输入代币名称">
        </div>
        <div class="form-group">
          <label class="form-label">空投总量</label>
          <input type="number" placeholder="输入空投总量">
        </div>
      </div>
      <div class="form-row">
        <div class="form-group">
          <label class="form-label">流动市值 (USDT)</label>
          <input type="number" placeholder="输入流动市值">
        </div>
        <div class="form-group">
          <label class="form-label">主网</label>
          <select class="bg-primary/10 border border-primary/20">
            <option>BSC</option>
            <option>ETH</option>
            <option>SOL</option>
            <option>POLYGON</option>
          </select>
        </div>
      </div>
      <div class="form-group">
        <label class="form-label">结束时间</label>
        <input type="text" placeholder="选择结束时间">
      </div>
      <div class="form-row">
        <div class="form-group">
          <label class="form-label">种子会员领取</label>
          <input type="number" placeholder="输入领取数量">
        </div>
        <div class="form-group">
          <label class="form-label">萌芽会员领取</label>
          <input type="number" placeholder="输入领取数量">
        </div>
      </div>
      <div class="form-row">
        <div class="form-group">
          <label class="form-label">节点会员领取</label>
          <input type="number" placeholder="输入领取数量">
        </div>
        <div class="form-group">
          <label class="form-label">创世会员领取</label>
          <input type="number" placeholder="输入领取数量">
        </div>
      </div>
      <div class="form-group">
        <label class="form-label">代币Logo</label>
        <div class="flex items-center">
          <div class="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center mr-4">
            <i class="fas fa-image text-white/30"></i>
          </div>
          <button class="btn-secondary">上传图片</button>
        </div>
      </div>
  </Modal>
  <ConfirmModal v-model="showDeleteModal"></ConfirmModal>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Modal from "@/components/Modal.vue";
import ConfirmModal from "@/components/ConfirmModal.vue";
import NumberInput from "@/components/NumberInput.vue";
import Table from "@/components/Table.vue";

// 表格配置
const columns = [
  { title: '代币名称', key: 'name' },
  { title: '空投数量', key: 'amount' },
  { title: '代币地址', key: 'address' },
  { title: '流动市值', key: 'liquidity' },
  { title: '当前价格', key: 'price' }
]

const tableData = [
  {
    name: 'META',
    amount: '1,000,000',
    address: '0x8d3...2e1f',
    liquidity: '$500,000',
    price: '$0.50'
  },
  {
    name: 'DEFI',
    amount: '2,500,000',
    address: '0x4a7...9c3d',
    liquidity: '$1,250,000',
    price: '$0.75'
  },
  {
    name: 'NFT',
    amount: '500,000',
    address: '0x2b5...7f8e',
    liquidity: '$250,000',
    price: '$1.20'
  },
  {
    name: 'DAO',
    amount: '3,000,000',
    address: '0x9f2...5e1a',
    liquidity: '$1,500,000',
    price: '$0.35'
  },
  {
    name: 'GAME',
    amount: '800,000',
    address: '0x3c8...7b2d',
    liquidity: '$400,000',
    price: '$0.60'
  }
]

// 模态框状态
const showAddModal = ref(false)
const showDeleteModal = ref(false)

// 假空投记录表单数据
const fakeAirdrop = ref({
  randomAddressCount: '',
  seedMemberAmount: '',
  sproutMemberAmount: '',
  nodeMemberAmount: '',
  genesisMemberAmount: '',
  seedMemberRatio: '',
  sproutMemberRatio: '',
  nodeMemberRatio: '',
  genesisMemberRatio: ''
})

// 方法
const openAddModal = () => {
  showAddModal.value = true
}

const openEditModal = (row: any) => {
  console.log('编辑', row)
}

const openDeleteModal = (row: any) => {
  showDeleteModal.value = true
}

const resetFakeAirdrop = () => {
  Object.keys(fakeAirdrop.value).forEach(key => {
    fakeAirdrop.value[key] = ''
  })
}

const submitFakeAirdrop = () => {
  console.log('提交假空投记录', fakeAirdrop.value)
}
</script>

<style lang="scss" scoped>
.form-row {
  @apply grid grid-cols-1 sm:grid-cols-2 gap-6;
}

.form-group {
  @apply flex flex-col gap-2;
}

.form-label {
  @apply text-sm text-white/70;
}

input, select {
  @apply w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-sm focus:outline-none focus:border-primary;
}
</style>
