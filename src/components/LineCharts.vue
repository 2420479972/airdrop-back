<template>
  <div ref="chartRef" class="w-full h-full"></div>
</template>

<script setup lang="ts">
import * as echarts from 'echarts'
import { onMounted, onBeforeUnmount, ref, watch, nextTick, defineProps, defineEmits, withDefaults, toRefs, shallowRef } from 'vue'

interface SeriesItem {
  name: string
  type?: string
  data: number[] | any[]
  [key: string]: any
}

interface ChartOption {
  animation?: boolean
  tooltip?: Record<string, any>
  legend?: Record<string, any>
  grid?: Record<string, any>
  xAxis?: Record<string, any>
  yAxis?: Record<string, any>
  series: SeriesItem[]
  [key: string]: any
}

const props = withDefaults(defineProps<{
  option: ChartOption
  theme?: string
  autoResize?: boolean
  loading?: boolean
  style?: Record<string, any>
  className?: string
}>(), {
  theme: '',
  autoResize: true,
  loading: false,
  style: () => ({}),
  className: ''
})

const emits = defineEmits<{
  (e: 'chart-ready', chart: echarts.ECharts): void
  (e: 'resize'): void
  (e: 'legendselectchanged', params: any): void
  (e: 'click', params: any): void
}>()

const chartRef = ref<HTMLElement | null>(null)
const chartInstance = shallowRef<echarts.ECharts | null>(null)

function initChart() {
  if (!chartRef.value) return
  if (chartInstance.value) {
    chartInstance.value.dispose()
  }
  chartInstance.value = echarts.init(chartRef.value, props.theme)
  chartInstance.value.setOption(props.option)
  emits('chart-ready', chartInstance.value)
  // 绑定常用事件
  chartInstance.value.on('legendselectchanged', params => emits('legendselectchanged', params))
  chartInstance.value.on('click', params => emits('click', params))
}

function resizeChart() {
  if (chartInstance.value) {
    chartInstance.value.resize()
    emits('resize')
  }
}

function setOption(option: ChartOption, notMerge = false) {
  if (chartInstance.value) {
    chartInstance.value.setOption(option, notMerge)
  }
}

function showLoading() {
  chartInstance.value?.showLoading()
}
function hideLoading() {
  chartInstance.value?.hideLoading()
}

onMounted(() => {
  nextTick(() => {
    initChart()
    if (props.loading) showLoading()
  })
  if (props.autoResize) {
    window.addEventListener('resize', resizeChart)
  }
})

onBeforeUnmount(() => {
  if (props.autoResize) {
    window.removeEventListener('resize', resizeChart)
  }
  if (chartInstance.value) {
    chartInstance.value.dispose()
    chartInstance.value = null
  }
})

watch(() => props.option, (newVal) => {
  setOption(newVal, true)
}, { deep: true })

watch(() => props.loading, (val) => {
  if (val) {
    showLoading()
  } else {
    hideLoading()
  }
})

// 支持外部通过ref调用方法
defineExpose({
  resize: resizeChart,
  setOption,
  showLoading,
  hideLoading,
  getInstance: () => chartInstance.value
})
</script>

<style lang="scss" scoped>
</style>

