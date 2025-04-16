<template>
  <main>
    <!-- 顶部用户统计区域 -->
    <div class="glass-effect rounded-lg p-6 mb-6">
      <div class="flex justify-between items-center mb-6">
        <h1 class="text-2xl font-bold flex items-center">
          <i class="fas fa-users mr-3"></i>用户总量
        </h1>
        <button class="!rounded-button bg-primary hover:bg-primary/90 text-white px-4 py-2 text-sm flex items-center" @click="showModal = true">
          <i class="fas fa-rocket mr-2"></i>批量空投
        </button>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div class="member-card bg-white/5 p-6 rounded-lg cursor-pointer" @click="showMemberDetails('seed')">
          <div class="flex items-center justify-between mb-4">
            <div class="flex items-center">
              <i class="fas fa-seedling text-green-400 mr-3"></i>
              <h3 class="text-lg font-medium">种子会员</h3>
            </div>
            <button class="!rounded-button bg-white/5 hover:bg-white/10 text-white px-3 py-1 text-xs flex items-center">
              <i class="fas fa-info-circle mr-1"></i>详情
            </button>
          </div>
          <div class="text-3xl font-bold">1,256</div>
          <div class="text-sm text-white/60 mt-2">较上月增长 12.5%</div>
        </div>

        <div class="member-card bg-white/5 p-6 rounded-lg cursor-pointer" @click="showMemberDetails('sprout')">
          <div class="flex items-center justify-between mb-4">
            <div class="flex items-center">
              <i class="fas fa-leaf text-blue-400 mr-3"></i>
              <h3 class="text-lg font-medium">萌芽会员</h3>
            </div>
            <button class="!rounded-button bg-white/5 hover:bg-white/10 text-white px-3 py-1 text-xs flex items-center">
              <i class="fas fa-info-circle mr-1"></i>详情
            </button>
          </div>
          <div class="text-3xl font-bold">3,842</div>
          <div class="text-sm text-white/60 mt-2">较上月增长 8.3%</div>
        </div>

        <div class="member-card bg-white/5 p-6 rounded-lg cursor-pointer" @click="showMemberDetails('node')">
          <div class="flex items-center justify-between mb-4">
            <div class="flex items-center">
              <i class="fas fa-network-wired text-purple-400 mr-3"></i>
              <h3 class="text-lg font-medium">节点会员</h3>
            </div>
            <button class="!rounded-button bg-white/5 hover:bg-white/10 text-white px-3 py-1 text-xs flex items-center">
              <i class="fas fa-info-circle mr-1"></i>详情
            </button>
          </div>
          <div class="text-3xl font-bold">756</div>
          <div class="text-sm text-white/60 mt-2">较上月增长 5.7%</div>
        </div>

        <div class="member-card bg-white/5 p-6 rounded-lg cursor-pointer" @click="showMemberDetails('genesis')">
          <div class="flex items-center justify-between mb-4">
            <div class="flex items-center">
              <i class="fas fa-crown text-yellow-400 mr-3"></i>
              <h3 class="text-lg font-medium">创世会员</h3>
            </div>
            <button class="!rounded-button bg-white/5 hover:bg-white/10 text-white px-3 py-1 text-xs flex items-center">
              <i class="fas fa-info-circle mr-1"></i>详情
            </button>
          </div>
          <div class="text-3xl font-bold">128</div>
          <div class="text-sm text-white/60 mt-2">较上月增长 3.2%</div>
        </div>
      </div>
    </div>

    <!-- 中部会员详情区域 -->
    <div class="glass-effect rounded-lg p-6 mb-6">
      <div class="flex justify-between items-center mb-6">
        <h2 class="text-xl font-bold">{{ memberTypeTitle }}</h2>
        <button class="!rounded-button bg-white/5 hover:bg-white/10 text-white px-4 py-2 text-sm flex items-center" @click="showModal = true">
          <i class="fas fa-user-friends mr-2"></i>关联会员
        </button>
      </div>

      <Table
        :columns="memberColumns"
        :data="memberData"
        :show-actions="true"
        :show-search="true"
        :show-checkbox="true"
        :show-batch-actions="true"
        :page-size="10"
        :current-page="currentPage"
        @update:current-page="currentPage = $event"
        @selection-change="handleSelectionChange"
      >
        <template #actions="{ row }">
          <button class="px-3 py-1 rounded-button bg-white/5 hover:bg-white/10 text-sm mr-2" @click="editMember(row)">
            <i class="fas fa-edit"></i>
          </button>
          <button class="px-3 py-1 rounded-button bg-white/5 hover:bg-white/10 text-sm mr-2" @click="deleteMember(row)">
            <i class="fas fa-trash"></i>
          </button>
        </template>
      </Table>
    </div>

    <!-- 底部关联会员区域 -->
    <div class="glass-effect rounded-lg p-6">
      <div class="flex justify-between items-center mb-6">
        <h2 class="text-xl font-bold">关联会员列表</h2>
        <div class="flex items-center space-x-4">
          <button class="!rounded-button bg-primary hover:bg-primary/90 text-white px-4 py-2 text-sm flex items-center" @click="showModal = true">
            <i class="fas fa-rocket mr-2"></i>批量空投
          </button>
        </div>
      </div>

      <Table
        :columns="relatedColumns"
        :data="relatedData"
        :show-actions="true"
        :show-search="true"
        :show-checkbox="true"
        :show-batch-actions="true"
        :page-size="10"
        :current-page="relatedCurrentPage"
        @update:current-page="relatedCurrentPage = $event"
        @selection-change="handleRelatedSelectionChange"
      >
        <template #actions="{ row }">
          <button class="px-3 py-1 rounded-button bg-primary/20 hover:bg-primary/30 text-primary text-sm whitespace-nowrap" @click="editRelatedMember">
              <i class="fas fa-edit mr-1"></i>编辑
            </button>
            <button class="px-3 py-1 rounded-button bg-secondary/20 hover:bg-secondary/30 text-secondary text-sm whitespace-nowrap ml-2" @click="deleteRelatedMember">
              <i class="fas fa-trash-alt mr-1"></i>删除
            </button>
        </template>
      </Table>
    </div>
  </main>

  <Modal v-model="showModal">
    <div class="space-y-4">
      <div>
        <label class="block text-sm text-white/60 mb-2">空投代币地址</label>
        <input type="text" class="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-sm focus:outline-none focus:border-primary" placeholder="输入代币合约地址">
      </div>

      <div>
        <label class="block text-sm text-white/60 mb-2">空投数量</label>
        <input type="text" class="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-sm focus:outline-none focus:border-primary" placeholder="输入每个地址的空投数量">
      </div>

      <div>
        <label class="block text-sm text-white/60 mb-2">授权批量主地址</label>
        <div class="flex space-x-2">
          <input type="text" class="flex-1 bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-sm focus:outline-none focus:border-primary" placeholder="输入授权地址">
          <button class="!rounded-button bg-white/5 hover:bg-white/10 text-white px-4 py-2 text-sm flex items-center">
            <i class="fas fa-key mr-2"></i>授权
          </button>
        </div>
      </div>
    </div>
  </Modal>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import Modal from "@/components/Modal.vue"
import Table from "@/components/Table.vue"

const showModal = ref(false)
const currentPage = ref(1)
const relatedCurrentPage = ref(1)
const selectedMemberType = ref('seed')

const memberTypeTitle = computed(() => {
  const titles = {
    seed: '种子会员详情',
    sprout: '萌芽会员详情',
    node: '节点会员详情',
    genesis: '创世会员详情'
  }
  return titles[selectedMemberType.value]
})

const memberColumns = [
  { title: '钱包地址', key: 'wallet' },
  { title: '会员类型', key: 'type' },
  { title: '推广人数', key: 'referrals' },
  { title: '注册时间', key: 'registerTime' },
  { title: '状态', key: 'status' }
]

const relatedColumns = [
  { title: '钱包地址', key: 'wallet' },
  { title: '会员类型', key: 'type' },
  { title: '推广人数', key: 'referrals' },
  { title: '注册时间', key: 'registerTime'},
  { title: '状态', key: 'status' }
]

const memberData = ref([
  {
    wallet: '0x1234...5678',
    type: '种子会员',
    referrals: 5,
    registerTime: '2024-01-01',
    status: '正常'
  },
  // 更多数据...
])

const relatedData = ref([
  {
    wallet: '0x5678...1234',
    type: '萌芽会员',
    referrals: 3,
    registerTime: '2024-01-15',
    status: '正常'
  },
  // 更多数据...
])

function showMemberDetails(type: string) {
  selectedMemberType.value = type
  // 这里可以添加获取对应类型会员数据的逻辑
}

function handleSelectionChange(selected: any[]) {
  console.log('Selected members:', selected)
}

function handleRelatedSelectionChange(selected: any[]) {
  console.log('Selected related members:', selected)
}

function editMember(row: any) {
  console.log('Edit member:', row)
}

function deleteMember(row: any) {
  console.log('Delete member:', row)
}

function editRelatedMember(row: any) {
  console.log('Edit related member:', row)
}

function deleteRelatedMember(row: any) {
  console.log('Delete related member:', row)
}
</script>

<style lang="scss" scoped>
.glass-effect {
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.member-card {
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }
}
</style>
