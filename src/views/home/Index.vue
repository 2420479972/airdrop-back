<template>
  <main class="sm:p-6">
    <!-- 数据卡片网格 -->
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-6">
      <!-- 链汇认购卡片 -->
      <div class="glass-effect rounded-lg p-4 sm:p-6">
        <div class="flex items-center justify-between mb-4">
          <h3 class="text-base sm:text-lg font-medium">链汇认购</h3>
          <i class="fas fa-chart-line text-primary text-lg sm:text-xl"></i>
        </div>
        <div class="flex flex-col sm:flex-row sm:justify-between sm:items-end gap-2 sm:gap-0">
          <div>
            <p class="text-xs sm:text-sm text-white/60 mb-1">总量</p>
            <p class="text-xl sm:text-2xl font-bold">
              1,234,567 
              <i class="fas fa-check-circle text-green-500 ml-1 text-sm" title="真实数据"></i>
            </p>
          </div>
          <div class="text-left sm:text-right">
            <p class="text-xs sm:text-sm text-white/60 mb-1">认购量</p>
            <p class="text-xl sm:text-2xl font-bold text-primary">
              892,345 
              <i class="fas fa-exclamation-triangle text-yellow-500 ml-1 text-sm" title="包含假数据"></i>
            </p>
          </div>
        </div>
      </div>

      <!-- 链汇空投卡片 -->
      <div class="glass-effect rounded-lg p-4 sm:p-6">
        <div class="flex items-center justify-between mb-4">
          <h3 class="text-base sm:text-lg font-medium">链汇空投</h3>
          <i class="fas fa-gift text-secondary text-lg sm:text-xl"></i>
        </div>
        <div class="overflow-x-auto mb-4">
          <div class="flex space-x-2 w-max">
            <button class="px-2 sm:px-3 py-1 rounded bg-white/5 hover:bg-white/10 text-xs sm:text-sm whitespace-nowrap">ETH</button>
            <button class="px-2 sm:px-3 py-1 rounded bg-white/5 hover:bg-white/10 text-xs sm:text-sm whitespace-nowrap">BTC</button>
            <button class="px-2 sm:px-3 py-1 rounded bg-white/5 hover:bg-white/10 text-xs sm:text-sm whitespace-nowrap">SOL</button>
            <button class="px-2 sm:px-3 py-1 rounded bg-white/5 hover:bg-white/10 text-xs sm:text-sm whitespace-nowrap">BNB</button>
          </div>
        </div>
        <div class="flex flex-col sm:flex-row sm:justify-between sm:items-end gap-2 sm:gap-0">
          <div>
            <p class="text-xs sm:text-sm text-white/60 mb-1">总量</p>
            <p class="text-xl sm:text-2xl font-bold">5,678,901</p>
          </div>
          <div class="text-left sm:text-right">
            <p class="text-xs sm:text-sm text-white/60 mb-1">空投量</p>
            <p class="text-xl sm:text-2xl font-bold text-secondary">3,456,789</p>
          </div>
        </div>
      </div>

      <!-- 聚合空投卡片 -->
      <div class="glass-effect rounded-lg p-4 sm:p-6">
        <div class="flex items-center justify-between mb-4">
          <h3 class="text-base sm:text-lg font-medium">聚合空投</h3>
          <i class="fas fa-parachute-box text-primary text-lg sm:text-xl"></i>
        </div>
        <div class="overflow-x-auto mb-4">
          <div class="flex space-x-2 w-max">
            <button class="px-2 sm:px-3 py-1 rounded bg-white/5 hover:bg-white/10 text-xs sm:text-sm whitespace-nowrap">USDT</button>
            <button class="px-2 sm:px-3 py-1 rounded bg-white/5 hover:bg-white/10 text-xs sm:text-sm whitespace-nowrap">USDC</button>
            <button class="px-2 sm:px-3 py-1 rounded bg-white/5 hover:bg-white/10 text-xs sm:text-sm whitespace-nowrap">DAI</button>
            <button class="px-2 sm:px-3 py-1 rounded bg-white/5 hover:bg-white/10 text-xs sm:text-sm whitespace-nowrap">BUSD</button>
          </div>
        </div>
        <div class="flex flex-col sm:flex-row sm:justify-between sm:items-end gap-2 sm:gap-0">
          <div>
            <p class="text-xs sm:text-sm text-white/60 mb-1">总量</p>
            <p class="text-xl sm:text-2xl font-bold">9,012,345</p>
          </div>
          <div class="text-left sm:text-right">
            <p class="text-xs sm:text-sm text-white/60 mb-1">已领取</p>
            <p class="text-xl sm:text-2xl font-bold text-primary">6,789,012</p>
          </div>
        </div>
      </div>

      <!-- 联盟社区卡片 -->
      <div class="glass-effect rounded-lg p-4 sm:p-6">
        <div class="flex items-center justify-between mb-4">
          <h3 class="text-base sm:text-lg font-medium">联盟社区</h3>
          <i class="fas fa-users text-secondary text-lg sm:text-xl"></i>
        </div>
        <div class="overflow-x-auto mb-4">
          <div class="flex space-x-2 w-max">
            <button class="px-2 sm:px-3 py-1 rounded bg-white/5 hover:bg-white/10 text-xs sm:text-sm whitespace-nowrap">Uniswap</button>
            <button class="px-2 sm:px-3 py-1 rounded bg-white/5 hover:bg-white/10 text-xs sm:text-sm whitespace-nowrap">Pancake</button>
            <button class="px-2 sm:px-3 py-1 rounded bg-white/5 hover:bg-white/10 text-xs sm:text-sm whitespace-nowrap">Sushi</button>
            <button class="px-2 sm:px-3 py-1 rounded bg-white/5 hover:bg-white/10 text-xs sm:text-sm whitespace-nowrap">1inch</button>
          </div>
        </div>
        <div class="flex flex-col sm:flex-row sm:justify-between sm:items-end gap-2 sm:gap-0">
          <div>
            <p class="text-xs sm:text-sm text-white/60 mb-1">总量</p>
            <p class="text-xl sm:text-2xl font-bold">3,456</p>
          </div>
          <div class="text-left sm:text-right">
            <p class="text-xs sm:text-sm text-white/60 mb-1">待审核</p>
            <p class="text-xl sm:text-2xl font-bold text-secondary">123</p>
          </div>
        </div>
      </div>
    </div>

    <!-- 图表区域 -->
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 mb-6">
      <div class="glass-effect rounded-lg p-4 sm:p-6">
        <div class="flex flex-col sm:flex-row sm:items-center justify-between mb-4 sm:mb-6 gap-2 sm:gap-0">
          <h3 class="text-base sm:text-lg font-medium">用户增长趋势</h3>
          <div class="flex gap-2">
            <button class="px-2 sm:px-3 py-1 rounded bg-white/5 hover:bg-white/10 text-xs sm:text-sm">月</button>
            <button class="px-2 sm:px-3 py-1 rounded bg-white/5 hover:bg-white/10 text-xs sm:text-sm">周</button>
            <button class="px-2 sm:px-3 py-1 rounded bg-white/5 hover:bg-white/10 text-xs sm:text-sm">日</button>
          </div>
        </div>
        <div class="chart-container h-[200px] sm:h-[300px]">
          <LineCharts :option="userCharts"></LineCharts>
        </div>
      </div>
      <div class="glass-effect rounded-lg p-4 sm:p-6">
        <div class="flex flex-col sm:flex-row sm:items-center justify-between mb-4 sm:mb-6 gap-2 sm:gap-0">
          <h3 class="text-base sm:text-lg font-medium">Web3.0 探索数据</h3>
          <div class="flex gap-2">
            <button class="px-2 sm:px-3 py-1 rounded bg-white/5 hover:bg-white/10 text-xs sm:text-sm">月</button>
            <button class="px-2 sm:px-3 py-1 rounded bg-white/5 hover:bg-white/10 text-xs sm:text-sm">周</button>
            <button class="px-2 sm:px-3 py-1 rounded bg-white/5 hover:bg-white/10 text-xs sm:text-sm">日</button>
          </div>
        </div>
        <div class="chart-container h-[200px] sm:h-[300px]">
          <LineCharts :option="webCharts"></LineCharts>
        </div>
      </div>
    </div>

    <!-- 表格区域 -->
    <div class="glass-effect rounded-lg p-4 sm:p-6">
      <div class="flex flex-col sm:flex-row sm:items-center justify-between mb-4 sm:mb-6 gap-2 sm:gap-0">
        <div class="flex flex-wrap gap-2 sm:gap-6">
          <button class="text-sm sm:text-lg font-medium hover:text-primary whitespace-nowrap">发布申请</button>
          <button class="text-sm sm:text-lg font-medium hover:text-primary whitespace-nowrap">社区申请</button>
          <button class="text-sm sm:text-lg font-medium hover:text-primary whitespace-nowrap">合作申请</button>
        </div>
        <div class="flex items-center">
          <i class="fas fa-bell text-secondary mr-2 text-sm sm:text-base"></i>
          <span class="text-secondary text-sm sm:text-base">12</span>
        </div>
      </div>
      <div class="overflow-x-auto">
        <Table
          :data="tableData"
          :columns="columns"
          show-checkbox
          show-search
          class="min-w-[800px] sm:min-w-0"
        >
          <template #status="{ row }">
            <span
              :class="[
                'px-2 py-1 rounded text-xs sm:text-sm',
                row.status === '待审核' ? 'bg-primary/20 text-primary' : 'bg-secondary/20 text-secondary'
              ]"
            >
              {{ row.status }}
            </span>
          </template>
          <template #actions="{ row }">
            <button class="px-2 sm:px-3 py-1 rounded-button bg-white/5 hover:bg-white/10 text-xs sm:text-sm">
              <i class="fas fa-external-link-alt"></i>
            </button>
          </template>
        </Table>
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
import Table from "@/components/Table.vue";
import { ref } from 'vue'
import LineCharts from "@/components/LineCharts.vue";

// 表格列配置
const columns = [
  { title: '发布地址', key: 'address' },
  { title: '代币名称', key: 'token'},
  { title: '空投总量', key: 'total' },
  { title: '流动性池', key: 'liquidity' },
  { title: '状态', key: 'status', slot: 'status' },
]

// 表格数据
const tableData = ref(new Array(29).fill( {
  address: '0x8d3...2e1f',
  token: 'META',
  total: '1,000,000',
  liquidity: '500,000',
  status: '待审核'
}))

const userCharts = {
  animation: false,
  tooltip: {
    trigger: 'axis'
  },
  legend: {
    data: ['种子会员', '萌芽会员', '节点会员', '创世会员'],
    textStyle: {
      color: '#fff'
    }
  },
  grid: {
    left: '3%',
    right: '4%',
    bottom: '3%',
    containLabel: true
  },
  xAxis: {
    type: 'category',
    boundaryGap: false,
    data: ['1月', '2月', '3月', '4月', '5月', '6月'],
    axisLabel: {
      color: '#fff'
    }
  },
  yAxis: {
    type: 'value',
    axisLabel: {
      color: '#fff'
    }
  },
  series: [
    {
      name: '种子会员',
      type: 'line',
      data: [120, 132, 101, 134, 90, 230],
      color: '#00F0FF'
    },
    {
      name: '萌芽会员',
      type: 'line',
      data: [220, 182, 191, 234, 290, 330],
      color: '#FF3366'
    },
    {
      name: '节点会员',
      type: 'line',
      data: [150, 232, 201, 154, 190, 330],
      color: '#FFB800'
    },
    {
      name: '创世会员',
      type: 'line',
      data: [320, 332, 301, 334, 390, 330],
      color: '#36F097'
    }
  ]
}
const webCharts =  {
  animation: false,
  tooltip: {
    trigger: 'axis'
  },
  legend: {
    data: ['交易类', '工具类', '游戏类', '商城类'],
    textStyle: {
      color: '#fff'
    }
  },
  grid: {
    left: '3%',
    right: '4%',
    bottom: '3%',
    containLabel: true
  },
  xAxis: {
    type: 'category',
    boundaryGap: false,
    data: ['1月', '2月', '3月', '4月', '5月', '6月'],
    axisLabel: {
      color: '#fff'
    }
  },
  yAxis: {
    type: 'value',
    axisLabel: {
      color: '#fff'
    }
  },
  series: [
    {
      name: '交易类',
      type: 'line',
      data: [150, 232, 201, 154, 190, 330],
      color: '#00F0FF'
    },
    {
      name: '工具类',
      type: 'line',
      data: [320, 332, 301, 334, 390, 330],
      color: '#FF3366'
    },
    {
      name: '游戏类',
      type: 'line',
      data: [820, 932, 901, 934, 1290, 1330],
      color: '#FFB800'
    },
    {
      name: '商城类',
      type: 'line',
      data: [420, 532, 501, 534, 490, 530],
      color: '#36F097'
    }
  ]
}
</script>

<style lang="scss" scoped>
.glass-effect {
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.chart-container {
  position: relative;
  width: 100%;
  min-height: 200px;
}

@media (max-width: 640px) {
  .chart-container {
    min-height: 200px;
  }
}
</style>
