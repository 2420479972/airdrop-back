<template>
  <main class="space-y-6">
    <!-- 社区申请区域 -->
    <div class="glass-effect rounded-lg p-4 sm:p-6 mb-6">
      <div class="flex flex-col sm:flex-row sm:items-center justify-between mb-4 sm:mb-6 gap-2 sm:gap-0">
        <h2 class="text-lg sm:text-xl font-bold">申请社区</h2>
        <div class="flex items-center">
          <i class="fas fa-bell text-secondary mr-2"></i>
          <span class="text-secondary">12</span>
        </div>
      </div>
      <div class="overflow-x-auto">
        <Table
          :data="communityData"
          :columns="communityColumns"
          :show-actions="true"
          :show-search="true"
        >
          <template #status="{ row }">
            <span :class="[ 'px-2 py-1 rounded text-xs sm:text-sm', row.status === '待审核' ? 'bg-primary/20 text-primary' : 'bg-secondary/20 text-secondary' ]">{{ row.status }}</span>
          </template>
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
    </div>
    <!-- 合作申请区域 -->
    <div class="glass-effect rounded-lg p-4 sm:p-6">
      <div class="flex flex-col sm:flex-row sm:items-center justify-between mb-4 sm:mb-6 gap-2 sm:gap-0">
        <h2 class="text-lg sm:text-xl font-bold">申请合作</h2>
        <div class="flex items-center">
          <i class="fas fa-bell text-secondary mr-2"></i>
          <span class="text-secondary">8</span>
        </div>
      </div>
      <div class="overflow-x-auto">
        <Table
          :data="cooperationData"
          :columns="cooperationColumns"
          :show-actions="true"
          :show-search="true"
        >
          <template #status="{ row }">
            <span :class="[ 'px-2 py-1 rounded text-xs sm:text-sm', row.status === '待审核' ? 'bg-primary/20 text-primary' : 'bg-secondary/20 text-secondary' ]">{{ row.status }}</span>
          </template>
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
    </div>
    <!-- 社区编辑弹窗 -->
    <Modal v-model="showCommunityModal">
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
        <div>
          <label class="block text-sm text-white/60 mb-1">社区名称</label>
          <input type="text" class="input-base" value="MetaDAO">
        </div>
        <div>
          <label class="block text-sm text-white/60 mb-1">项目完成率</label>
          <input type="text" class="input-base" value="78%">
        </div>
        <div>
          <label class="block text-sm text-white/60 mb-1">创始人</label>
          <input type="text" class="input-base" value="Vitalik Buterin">
        </div>
        <div>
          <label class="block text-sm text-white/60 mb-1">社区地址</label>
          <input type="text" class="input-base" value="0x8d3...2e1f">
        </div>
        <div>
          <label class="block text-sm text-white/60 mb-1">社区连接</label>
          <input type="text" class="input-base" value="https://meta.dao">
        </div>
        <div>
          <label class="block text-sm text-white/60 mb-1">社区logo</label>
          <input type="text" class="input-base" value="logo.png">
        </div>
      </div>
      <div class="mb-4">
        <label class="block text-sm text-white/60 mb-1">社区简介标题</label>
        <input type="text" class="input-base" value="MetaDAO - 去中心化自治组织">
      </div>
      <div class="mb-6">
        <label class="block text-sm text-white/60 mb-1">社区简介内容</label>
        <textarea class="input-base h-24">MetaDAO是一个专注于元宇宙发展的去中心化自治组织，致力于构建开放的虚拟世界基础设施。</textarea>
      </div>
    </Modal>
    <Modal v-model="showCooperationModal">
      <div class="modal-content">
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
          <div>
            <label class="block text-sm text-white/60 mb-1">合作类型</label>
            <select class="input-base">
              <option>交易类</option>
              <option>工具类</option>
              <option>游戏类</option>
              <option>商城类</option>
            </select>
          </div>
          <div>
            <label class="block text-sm text-white/60 mb-1">应用名称</label>
            <input type="text" class="input-base" value="Uniswap">
          </div>
          <div>
            <label class="block text-sm text-white/60 mb-1">联系方式</label>
            <input type="text" class="input-base" value="contact@uniswap.org">
          </div>
          <div>
            <label class="block text-sm text-white/60 mb-1">注册地址</label>
            <input type="text" class="input-base" value="https://uniswap.org">
          </div>
          <div>
            <label class="block text-sm text-white/60 mb-1">连接地址</label>
            <input type="text" class="input-base" value="https://uniswap.org">
          </div>
          <div>
            <label class="block text-sm text-white/60 mb-1">支付赏金</label>
            <input type="text" class="input-base" value="5000 USDT">
          </div>
          <div>
            <label class="block text-sm text-white/60 mb-1">项目logo</label>
            <input type="text" class="input-base" value="uniswap.png">
          </div>
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
          <div>
            <label class="block text-sm text-white/60 mb-1">打赏地址数量</label>
            <input type="text" class="input-base" placeholder="请输入打赏地址数量">
          </div>
          <div>
            <label class="block text-sm text-white/60 mb-1">单个打赏金额</label>
            <input type="text" class="input-base" placeholder="请输入单个打赏金额(USDT)">
          </div>
        </div>
        <div class="mb-6">
          <label class="block text-sm text-white/60 mb-1">项目简介</label>
          <textarea class="input-base h-24">Uniswap是以太坊上领先的去中心化交易协议，提供自动化的代币交换功能。</textarea>
        </div>
      </div>
    </Modal>
  </main>
</template>

<script setup lang="ts">
import { ref } from "vue";
import Table from "@/components/Table.vue";
import Modal from "@/components/Modal.vue";

const showCommunityModal = ref(false);
const showCooperationModal = ref(false);

// 社区申请表格配置
const communityColumns = [
  { title: "社区名称", key: "name" },
  { title: "项目完成率", key: "progress" },
  { title: "创始人", key: "founder" },
  { title: "社区地址", key: "address" },
  { title: "社区连接", key: "link" },
  { title: "状态", key: "status", slot: "status" }
];

const communityData = [
  { 
    name: "MetaDAO",
    progress: "78%",
    founder: "Vitalik Buterin",
    address: "0x8d3...2e1f",
    link: "https://meta.dao",
    status: "待审核"
  },
  { 
    name: "DeFi Alliance",
    progress: "92%",
    founder: "John Doe",
    address: "0x4a7...9c3d",
    link: "https://defi.alliance",
    status: "已审核"
  },
  { 
    name: "NFT Club",
    progress: "65%",
    founder: "Alice Smith",
    address: "0x2b5...7f8e",
    link: "https://nft.club",
    status: "待审核"
  },
  { 
    name: "GameFi Hub",
    progress: "87%",
    founder: "Bob Johnson",
    address: "0x9f2...5e1a",
    link: "https://gamefi.hub",
    status: "已审核"
  },
  { 
    name: "Crypto Traders",
    progress: "71%",
    founder: "Charlie Brown",
    address: "0x3c8...7b2d",
    link: "https://crypto.traders",
    status: "待审核"
  }
];

// 合作申请表格配置
const cooperationColumns = [
  { title: "申请类型", key: "type" },
  { title: "应用名称", key: "name" },
  { title: "官方联系方式", key: "contact" },
  { title: "支付赏金", key: "reward" },
  { title: "连接地址", key: "link" },
  { title: "状态", key: "status", slot: "status" }
];

const cooperationData = [
  { 
    type: "交易类",
    name: "Uniswap",
    contact: "contact@uniswap.org",
    reward: "5000 USDT",
    link: "https://uniswap.org",
    status: "待审核"
  },
  { 
    type: "工具类",
    name: "Etherscan",
    contact: "support@etherscan.io",
    reward: "3000 USDT",
    link: "https://etherscan.io",
    status: "已审核"
  },
  { 
    type: "游戏类",
    name: "Axie Infinity",
    contact: "info@axieinfinity.com",
    reward: "8000 USDT",
    link: "https://axieinfinity.com",
    status: "待审核"
  },
  { 
    type: "商城类",
    name: "OpenSea",
    contact: "help@opensea.io",
    reward: "6000 USDT",
    link: "https://opensea.io",
    status: "已审核"
  }
];
</script>

<style lang="scss" scoped>
.input-base {
  background-color: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  padding: 10px 12px;
  border-radius: 4px;
  width: 100%;
  color: white;
  margin-bottom: 16px;
  font-size: 0.95rem;
}

.input-base:focus {
  outline: none;
  border-color: #00F0FF;
}

@media (max-width: 640px) {
  .glass-effect {
    padding: 12px !important;
  }
  
  .rounded-lg {
    border-radius: 10px !important;
  }
  
  .input-base {
    font-size: 0.9rem;
    padding: 8px 10px;
  }
}
</style>
