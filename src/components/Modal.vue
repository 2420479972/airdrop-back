<template>
  <Teleport to="body">
    <Transition name="modal-fade">
      <div v-if="modelValue" class="fixed inset-0 z-50 flex items-center justify-center" @click.self="handleClose">
        <div class="fixed inset-0 bg-black/50" @click.self="handleClose"></div>
        <div :class="['glass-effect rounded-lg p-6 w-[90%] relative z-10', {'max-w-sm': size === 'sm', 'max-w-md': size === 'md', 'max-w-2xl': size === 'lg', 'max-w-4xl': size === 'xl', 'max-w-full mx-6': size === 'full'}]">
          <div class="flex justify-between items-center mb-6">
            <h2 class="text-xl font-bold">{{ title }}</h2>
            <button @click="handleClose" class="text-white/60 hover:text-white transition-colors">
              <i class="fas fa-times"></i>
            </button>
          </div>
          <div class="max-h-[calc(80vh-120px)] overflow-y-auto custom-scrollbar">
            <slot></slot> 
          </div>
          <div v-if="showFooter" class="mt-6 flex justify-end gap-3">
            <slot name="footer">
              <button 
                v-if="showCancelButton" 
                @click="handleClose" 
                class="border border-white/20 bg-white/5 hover:bg-white/10 text-white/80 px-6 py-2 text-sm rounded-md flex items-center transition-colors"
              >
                <i v-if="cancelIcon" :class="`fas fa-${cancelIcon} mr-2`"></i>{{ cancelText }}
              </button>
              <button 
                v-if="showConfirmButton" 
                @click="handleConfirm" 
                :disabled="confirmDisabled"
                :class="[
                  'rounded-md bg-primary hover:bg-primary/90 text-white px-6 py-2 text-sm flex items-center transition-colors',
                  { 'opacity-50 cursor-not-allowed': confirmDisabled }
                ]"
              >
                <i v-if="confirmIcon" :class="`fas fa-${confirmIcon} mr-2`"></i>{{ confirmText }}
              </button>
            </slot>
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup lang="ts">
import { defineProps, defineEmits, onMounted, onBeforeUnmount } from 'vue'

const props = defineProps({
  modelValue: {
    type: Boolean,
    default: false
  },
  title: {
    type: String,
    default: '标题'
  },
  size: {
    type: String,
    default: 'lg',
    validator: (value: string) => ['sm', 'md', 'lg', 'xl', 'full'].includes(value)
  },
  showFooter: {
    type: Boolean,
    default: true
  },
  showConfirmButton: {
    type: Boolean,
    default: true
  },
  showCancelButton: {
    type: Boolean,
    default: true
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
    default: 'check'
  },
  cancelIcon: {
    type: String,
    default: ''
  },
  closeOnEsc: {
    type: Boolean,
    default: true
  },
  closeOnClickOutside: {
    type: Boolean,
    default: true
  },
  confirmDisabled: {
    type: Boolean,
    default: false
  }
})

const emit = defineEmits([
  'update:modelValue', 
  'confirm', 
  'cancel',
  'open',
  'close'
])

function handleClose() {
  if (!props.closeOnClickOutside) return
  emit('update:modelValue', false)
  emit('cancel')
  emit('close')
}

function handleConfirm() {
  if (props.confirmDisabled) return
  emit('confirm')
}

function handleEsc(e: KeyboardEvent) {
  if (props.closeOnEsc && e.key === 'Escape' && props.modelValue) {
    handleClose()
  }
}

// 监听ESC键以关闭弹窗
onMounted(() => {
  document.addEventListener('keydown', handleEsc)
  if (props.modelValue) {
    emit('open')
  }
})

onBeforeUnmount(() => {
  document.removeEventListener('keydown', handleEsc)
})
</script>

<style lang="scss" scoped>
.custom-scrollbar {
  scrollbar-width: thin;
  scrollbar-color: rgba(255, 255, 255, 0.2) transparent;
  
  &::-webkit-scrollbar {
    width: 6px;
    height: 6px;
  }
  
  &::-webkit-scrollbar-track {
    background: transparent;
  }
  
  &::-webkit-scrollbar-thumb {
    background-color: rgba(255, 255, 255, 0.2);
    border-radius: 3px;
  }
}

.modal-fade-enter-active,
.modal-fade-leave-active {
  transition: opacity 0.3s ease;
}

.modal-fade-enter-from,
.modal-fade-leave-to {
  opacity: 0;
}
</style>
