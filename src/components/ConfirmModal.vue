<template>
  <Teleport to="body">
    <Transition name="confirm-modal-fade">
      <div 
        v-if="modelValue" 
        class="fixed inset-0 z-[100] flex items-center justify-center p-4" 
        @click.self="closeOnBackdropClick && handleCancel()"
      >
        <div 
          class="fixed inset-0 bg-black/70 backdrop-blur-sm"
          @click.self="closeOnBackdropClick && handleCancel()"
        ></div>
        <div 
          :class="[
            'relative z-10 w-full max-w-md rounded-lg transition-all duration-300 glass-effect overflow-hidden',
            { 'scale-100 opacity-100': modelValue, 'scale-95 opacity-0': !modelValue }
          ]"
        >
          <!-- 顶部彩条 -->
          <div 
            :class="[
              'h-1 w-full', 
              {
                'bg-red-500': type === 'danger',
                'bg-yellow-500': type === 'warning',
                'bg-blue-500': type === 'info',
                'bg-green-500': type === 'success',
                'bg-primary': type === 'primary'
              }
            ]"
          ></div>
          
          <!-- 内容区域 -->
          <div class="p-6">
            <div class="flex items-start mb-4">
              <!-- 图标 -->
              <div 
                v-if="showIcon" 
                :class="[
                  'flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-full mr-4',
                  {
                    'bg-red-500/10 text-red-500': type === 'danger',
                    'bg-yellow-500/10 text-yellow-500': type === 'warning',
                    'bg-blue-500/10 text-blue-500': type === 'info',
                    'bg-green-500/10 text-green-500': type === 'success',
                    'bg-primary/10 text-primary': type === 'primary'
                  }
                ]"
              >
                <i 
                  :class="[
                    'fas', 
                    {
                      'fa-exclamation-triangle': type === 'danger' || type === 'warning',
                      'fa-info-circle': type === 'info',
                      'fa-check-circle': type === 'success',
                      'fa-question-circle': type === 'primary'
                    }
                  ]"
                ></i>
              </div>
              
              <!-- 标题和内容 -->
              <div class="flex-1">
                <h3 class="text-lg sm:text-xl font-bold mb-2">{{ title }}</h3>
                <p 
                  v-if="content" 
                  class="text-white/70 text-sm sm:text-base"
                  v-html="content"
                ></p>
                <slot v-else></slot>
              </div>
            </div>
            
            <!-- 按钮区域 -->
            <div 
              :class="[
                'flex gap-3 mt-6',
                { 
                  'justify-end': buttonAlign === 'right',
                  'justify-start': buttonAlign === 'left',
                  'justify-center': buttonAlign === 'center',
                  'justify-between': buttonAlign === 'between',
                  'flex-col-reverse sm:flex-row': fullWidthButtons
                }
              ]"
            >
              <button 
                v-if="showCancelButton"
                @click="handleCancel"
                :disabled="loading"
                :class="[
                  'rounded-md transition-colors border py-2 text-sm flex items-center justify-center',
                  'border-white/20 bg-white/5 hover:bg-white/10 text-white/80',
                  { 'w-full': fullWidthButtons }
                ]"
              >
                <i v-if="cancelIcon" :class="`fas fa-${cancelIcon} mr-2`"></i>
                {{ cancelText }}
              </button>
              
              <button 
                v-if="showConfirmButton"
                @click="handleConfirm"
                :disabled="loading || confirmDisabled"
                :class="[
                  'rounded-md py-2 text-sm text-white flex items-center justify-center transition-colors',
                  {
                    'bg-red-500 hover:bg-red-600': type === 'danger',
                    'bg-yellow-500 hover:bg-yellow-600': type === 'warning',
                    'bg-blue-500 hover:bg-blue-600': type === 'info',
                    'bg-green-500 hover:bg-green-600': type === 'success',
                    'bg-primary hover:bg-primary/90': type === 'primary',
                    'opacity-70 cursor-not-allowed': loading || confirmDisabled,
                    'w-full': fullWidthButtons
                  }
                ]"
              >
                <i 
                  v-if="loading" 
                  class="fas fa-spinner fa-spin mr-2"
                ></i>
                <i 
                  v-else-if="confirmIcon" 
                  :class="`fas fa-${confirmIcon} mr-2`"
                ></i>
                {{ confirmText }}
              </button>
            </div>
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup lang="ts">
import { defineProps, defineEmits, onMounted, onBeforeUnmount, watch } from 'vue'

const props = defineProps({
  modelValue: {
    type: Boolean,
    default: false
  },
  title: {
    type: String,
    default: '确认操作'
  },
  content: {
    type: String,
    default: ''
  },
  type: {
    type: String,
    default: 'primary',
    validator: (value: string) => ['primary', 'danger', 'warning', 'info', 'success'].includes(value)
  },
  confirmText: {
    type: String,
    default: '确认'
  },
  cancelText: {
    type: String,
    default: '取消'
  },
  confirmIcon: {
    type: String,
    default: ''
  },
  cancelIcon: {
    type: String,
    default: ''
  },
  showConfirmButton: {
    type: Boolean,
    default: true
  },
  showCancelButton: {
    type: Boolean,
    default: true
  },
  confirmDisabled: {
    type: Boolean,
    default: false
  },
  loading: {
    type: Boolean,
    default: false
  },
  closeOnEsc: {
    type: Boolean,
    default: true
  },
  closeOnBackdropClick: {
    type: Boolean,
    default: true
  },
  showIcon: {
    type: Boolean,
    default: true
  },
  buttonAlign: {
    type: String,
    default: 'right',
    validator: (value: string) => ['left', 'right', 'center', 'between'].includes(value)
  },
  fullWidthButtons: {
    type: Boolean,
    default: false
  }
})

const emit = defineEmits([
  'update:modelValue',
  'confirm',
  'cancel'
])

function handleConfirm() {
  if (props.loading || props.confirmDisabled) return
  emit('confirm')
}

function handleCancel() {
  if (props.loading) return
  emit('update:modelValue', false)
  emit('cancel')
}

function handleEsc(e: KeyboardEvent) {
  if (props.closeOnEsc && e.key === 'Escape' && props.modelValue) {
    handleCancel()
  }
}

// 禁止背景滚动
function disableBodyScroll() {
  if (typeof document !== 'undefined') {
    document.body.style.overflow = 'hidden'
  }
}

function enableBodyScroll() {
  if (typeof document !== 'undefined') {
    document.body.style.overflow = ''
  }
}

onMounted(() => {
  document.addEventListener('keydown', handleEsc)
  if (props.modelValue) {
    disableBodyScroll()
  }
})

onBeforeUnmount(() => {
  document.removeEventListener('keydown', handleEsc)
  enableBodyScroll()
})

watch(() => props.modelValue, (newVal) => {
  if (newVal) {
    disableBodyScroll()
  } else {
    enableBodyScroll()
  }
})
</script>

<style lang="scss" scoped>
.confirm-modal-fade-enter-active,
.confirm-modal-fade-leave-active {
  transition: all 0.3s ease;
}

.confirm-modal-fade-enter-from,
.confirm-modal-fade-leave-to {
  opacity: 0;
}

.confirm-modal-fade-enter-from .glass-effect {
  transform: scale(0.9);
}

@media (max-width: 640px) {
  .confirm-modal-fade-enter-from .glass-effect {
    transform: translateY(30px);
  }
  
  .confirm-modal-fade-leave-to .glass-effect {
    transform: translateY(30px);
  }
}
</style>
