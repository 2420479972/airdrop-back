<template>
  <main>
    <div class="space-y-6">
      <div v-for="(card, index) in noticeCards" :key="index" class="glass-effect rounded-lg p-6">
        <div class="flex justify-between items-center mb-4">
          <h2 class="text-xl font-bold">{{ card.title }}</h2>
          <button class="!rounded-button bg-primary hover:bg-primary/90 text-white px-4 py-2 text-sm flex items-center">
            <i class="fas fa-edit mr-2"></i>更改
          </button>
        </div>
        <!-- 多行公告内容 -->
        <div v-if="card.type === 'list'" class="space-y-2">
          <div v-for="(item, itemIndex) in card.content" :key="itemIndex" class="flex items-center">
            <div class="w-2 h-2 rounded-full bg-primary mr-2"></div>
            <input 
              type="text" 
              class="flex-1 bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-primary" 
              :value="item"
            >
          </div>
        </div>
        <!-- 单行公告内容 -->
        <textarea 
          v-else 
          class="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-primary h-32" 
          :placeholder="'输入公告内容'"
          :value="card.content"
        ></textarea>
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
import { ref } from 'vue'

interface NoticeCard {
  title: string
  type: 'list' | 'text'
  content: string[] | string
}

const noticeCards = ref<NoticeCard[]>([
  {
    title: '主页公告',
    type: 'list',
    content: [
      '系统将于2023年12月15日进行重大升级',
      '预计维护时间2小时',
      '请提前做好准备'
    ]
  },
  {
    title: '链汇方舟公告',
    type: 'list',
    content: [
      '链汇方舟V2.0版本即将上线',
      '新增多链支持功能',
      '敬请期待'
    ]
  },
  {
    title: '聚合空投公告',
    type: 'list',
    content: [
      '本周聚合空投活动已开启',
      '参与质押可获得额外奖励',
      '详情请查看活动页面'
    ]
  },
  {
    title: '质押公告',
    type: 'text',
    content: '质押年化收益率已调整至18.5%，欢迎参与质押获取稳定收益。'
  },
  {
    title: '发布项目页公告',
    type: 'text',
    content: '项目发布审核标准已更新，请仔细阅读最新发布指南后再提交申请。'
  },
  {
    title: '社区申请页公告',
    type: 'text',
    content: '社区申请需提供详细运营计划，审核周期为3-5个工作日。'
  },
  {
    title: '赎回资产页公告',
    type: 'text',
    content: '资产赎回处理时间为每日10:00-18:00，非工作时间申请将在下一个工作日处理。'
  },
  {
    title: '合作申请页公告',
    type: 'text',
    content: '商务合作请发送详细提案至partner@chainark.com，我们将在7个工作日内回复。'
  }
])
</script>

<style lang="scss" scoped>
</style>
