<template>
  <div class="w-full overflow-hidden rounded-lg">
    <!-- 表格工具栏 -->
    <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-4 ">
      <!-- 左侧操作区 -->
      <div class="flex flex-col sm:flex-row items-start sm:items-center gap-3 w-full sm:w-auto">
        <slot name="toolbar-left"></slot>
        <!-- 批量操作按钮 -->
        <div v-if="showBatchActions && selectedRows.length > 0" class="flex items-center gap-2">
          <slot name="batch-actions" :selected-rows="selectedRows"></slot>
          <span class="text-sm text-white/70">已选择 {{ selectedRows.length }} 项</span>
        </div>
      </div>
      
      <!-- 右侧操作区 -->
      <div class="flex flex-col sm:flex-row items-start sm:items-center gap-3 w-full sm:w-auto">
        <div v-if="showSearch" class="relative w-full sm:w-auto">
          <input
            v-model="searchQuery"
            type="text"
            placeholder="搜索..."
            class="w-full sm:w-64 pl-10 pr-4 py-2 rounded-md bg-white/5 border border-white/10 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50"
          >
          <i class="fas fa-search absolute left-3 top-1/2 -translate-y-1/2 text-white/50"></i>
        </div>
        <slot name="toolbar-right"></slot>
      </div>
    </div>

    <!-- 桌面端表格 -->
    <div class="hidden sm:block overflow-x-auto">
      <table class="w-full">
        <thead>
          <tr class="border-b border-white/10">
            <!-- 复选框列 -->
            <th v-if="showCheckbox" class="w-12 px-4 py-3">
              <div class="flex items-center justify-center">
                <input
                  type="checkbox"
                  :checked="isAllSelected"
                  :indeterminate="isIndeterminate"
                  @change="handleSelectAll"
                  class="w-4 h-4 rounded border-white/20 bg-white/5 checked:bg-primary focus:ring-primary/50"
                >
              </div>
            </th>
            <th 
              v-for="(column, index) in columns" 
              :key="index"
              :class="[
                'px-4 py-3 text-left text-sm font-medium text-white/70 whitespace-nowrap',
                { 'cursor-pointer': column.sortable },
                { 'w-[100px]': column.width === '100px' },
                { 'w-[150px]': column.width === '150px' },
                { 'w-[200px]': column.width === '200px' }
              ]"
              @click="column.sortable && handleSort(column)"
            >
              <div class="flex items-center gap-2">
                <span>{{ column.title }}</span>
                <i 
                  v-if="column.sortable"
                  :class="[
                    'fas text-xs transition-transform',
                    {
                      'fa-sort': sortKey !== column.key,
                      'fa-sort-up': sortKey === column.key && sortOrder === 'asc',
                      'fa-sort-down': sortKey === column.key && sortOrder === 'desc'
                    }
                  ]"
                ></i>
              </div>
            </th>
            <th v-if="showActions" class="px-4 py-3 text-right text-sm font-medium text-white/70">操作</th>
          </tr>
        </thead>
        <tbody>
          <tr 
            v-for="(item, index) in filteredData" 
            :key="index"
            class="border-b border-white/5 hover:bg-white/5 transition-colors"
          >
            <!-- 复选框列 -->
            <td v-if="showCheckbox" class="w-12 px-4 py-3">
              <div class="flex items-center justify-center">
                <input
                  type="checkbox"
                  :checked="isSelected(item)"
                  @change="handleSelect(item)"
                  class="w-4 h-4 rounded border-white/20 bg-white/5 checked:bg-primary focus:ring-primary/50"
                >
              </div>
            </td>
            <td 
              v-for="(column, colIndex) in columns" 
              :key="colIndex"
              :class="[
                'px-4 py-3 text-sm text-white/80',
                { 'text-right': column.align === 'right' },
                { 'text-center': column.align === 'center' }
              ]"
            >
              <template v-if="column.slot">
                <slot :name="column.slot" :row="item"></slot>
              </template>
              <template v-else>
                {{ item[column.key] }}
              </template>
            </td>
            <td v-if="showActions" class="px-4 py-3 text-right">
              <div class="flex items-center justify-end gap-2">
                <slot name="actions" :row="item"></slot>
              </div>
            </td>
          </tr>
          <tr v-if="filteredData.length === 0">
            <td :colspan="columns.length + (showActions ? 1 : 0) + (showCheckbox ? 1 : 0)" class="px-4 py-8 text-center text-white/50">
              <div class="flex flex-col items-center gap-2">
                <i class="fas fa-inbox text-2xl"></i>
                <span>暂无数据</span>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- 移动端卡片列表 -->
    <div class="sm:hidden">
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div v-for="(item, index) in filteredData" :key="index" class="p-4 border border-white/5 rounded-lg hover:bg-white/5 transition-colors">
          <div class="flex flex-col gap-3">
            <!-- 内容区域 -->
            <div class="grid grid-cols-2 gap-2">
              <template v-for="(column, colIndex) in columns" :key="colIndex">
                <div class="flex flex-col">
                  <div class="text-xs text-white/50 mb-1">{{ column.title }}</div>
                  <div class="text-sm text-white/80">
                    <template v-if="column.slot">
                      <slot :name="column.slot" :row="item"></slot>
                    </template>
                    <template v-else>
                      {{ item[column.key] }}
                    </template>
                  </div>
                </div>
              </template>
            </div>
            
            <!-- 操作区域 -->
            <div v-if="showActions" class="flex items-center justify-end gap-2 mt-2 pt-2 border-t border-white/5">
              <slot name="actions" :row="item"></slot>
            </div>
          </div>
        </div>
      </div>
      
      <!-- 空状态 -->
      <div v-if="filteredData.length === 0" class="p-8 text-center text-white/50">
        <div class="flex flex-col items-center gap-2">
          <i class="fas fa-inbox text-2xl"></i>
          <span>暂无数据</span>
        </div>
      </div>
    </div>

    <!-- 表格底部 -->
    <div class="flex flex-col sm:flex-row items-center justify-between gap-4 p-4 ">
      <div class="text-sm text-white/50">
        共 {{ total }} 条记录
      </div>
      <div class="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto">
        <!-- 分页按钮 -->
        <div class="flex items-center gap-1.5">
          <button
            :disabled="currentPage === 1"
            @click="currentPage--"
            class="p-2 rounded-md hover:bg-white/10 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <i class="fas fa-chevron-left text-white/80"></i>
          </button>
          <span class="px-3 py-1 text-white/80">{{ currentPage }} / {{ totalPages }}</span>
          <button
            :disabled="currentPage === totalPages"
            @click="currentPage++"
            class="p-2 rounded-md hover:bg-white/10 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <i class="fas fa-chevron-right text-white/80"></i>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, watch } from 'vue'

interface Column {
  title: string
  key: string
  width?: '100px' | '150px' | '200px'
  sortable?: boolean
  align?: 'left' | 'center' | 'right'
  slot?: string
}

interface Props {
  columns: Column[]
  data: any[]
  showActions?: boolean
  showSearch?: boolean
  showCheckbox?: boolean
  showBatchActions?: boolean
  pageSize?: number
  currentPage?: number
  rowKey?: string
}

const props = withDefaults(defineProps<Props>(), {
  showActions: true,
  showSearch: true,
  showCheckbox: false,
  showBatchActions: true,
  pageSize: 10,
  currentPage: 1,
  rowKey: 'id'
})

const emit = defineEmits(['update:currentPage', 'update:pageSize', 'sort', 'selection-change'])

// 搜索相关
const searchQuery = ref('')

// 排序相关
const sortKey = ref('')
const sortOrder = ref<'asc' | 'desc'>('asc')

// 分页相关
const currentPage = ref(props.currentPage)
const pageSize = ref(props.pageSize)

// 多选相关
const selectedRows = ref<any[]>([])

// 计算属性
const filteredData = computed(() => {
  let result = [...props.data]
  
  // 搜索过滤
  if (searchQuery.value) {
    const query = searchQuery.value.toLowerCase()
    result = result.filter(item => 
      Object.values(item).some(value => 
        String(value).toLowerCase().includes(query)
      )
    )
  }
  
  // 排序
  if (sortKey.value) {
    result.sort((a, b) => {
      const aValue = a[sortKey.value]
      const bValue = b[sortKey.value]
      if (sortOrder.value === 'asc') {
        return aValue > bValue ? 1 : -1
      } else {
        return aValue < bValue ? 1 : -1
      }
    })
  }
  
  // 分页
  const start = (currentPage.value - 1) * pageSize.value
  const end = start + pageSize.value
  return result.slice(start, end)
})

const total = computed(() => props.data.length)
const totalPages = computed(() => Math.ceil(total.value / pageSize.value))

// 多选相关计算属性
const isAllSelected = computed(() => {
  return filteredData.value.length > 0 && 
         filteredData.value.every(item => isSelected(item))
})

const isIndeterminate = computed(() => {
  return selectedRows.value.length > 0 && 
         !filteredData.value.every(item => isSelected(item))
})

// 方法
function handleSort(column: Column) {
  if (sortKey.value === column.key) {
    sortOrder.value = sortOrder.value === 'asc' ? 'desc' : 'asc'
  } else {
    sortKey.value = column.key
    sortOrder.value = 'asc'
  }
  emit('sort', { key: sortKey.value, order: sortOrder.value })
}

function isSelected(item: any) {
  return selectedRows.value.some(row => row[props.rowKey] === item[props.rowKey])
}

function handleSelect(item: any) {
  const index = selectedRows.value.findIndex(row => row[props.rowKey] === item[props.rowKey])
  if (index === -1) {
    selectedRows.value.push(item)
  } else {
    selectedRows.value.splice(index, 1)
  }
  emit('selection-change', selectedRows.value)
}

function handleSelectAll(event: Event) {
  const target = event.target as HTMLInputElement
  if (target.checked) {
    selectedRows.value = [...filteredData.value]
  } else {
    selectedRows.value = []
  }
  emit('selection-change', selectedRows.value)
}

// 监听
watch(currentPage, (newVal) => {
  emit('update:currentPage', newVal)
})

watch(pageSize, (newVal) => {
  emit('update:pageSize', newVal)
  currentPage.value = 1
})
</script>

<style lang="scss" scoped>
.glass-effect {
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
}

@media (max-width: 640px) {
  .table-container {
    display: block;
    width: 100%;
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
  }
}
</style>
