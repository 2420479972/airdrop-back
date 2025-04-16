<template>
  <div class="relative w-full">
    <input
        type="number"
        :value="modelValue"
        @input="handleInput"
        class="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-primary"
        :min="min"
        :step="step"
        :placeholder="placeholder"
    >
    <div class="absolute right-2 top-1/2 -translate-y-1/2 flex flex-col gap-0.5">
      <button 
        class="text-xs hover:text-primary transition-colors" 
        @click="increment"
        :disabled="disabled"
      >
        <i class="fas fa-chevron-up"></i>
      </button>
      <button 
        class="text-xs hover:text-primary transition-colors" 
        @click="decrement"
        :disabled="disabled"
      >
        <i class="fas fa-chevron-down"></i>
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Props {
  modelValue?: number | string
  min?: number
  step?: number
  placeholder?: string
  disabled?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  modelValue: 0,
  min: 0,
  step: 1,
  placeholder: '',
  disabled: false
})

const emit = defineEmits<{
  'update:modelValue': [value: number]
  'change': [value: number]
}>()

const handleInput = (event: Event) => {
  const input = event.target as HTMLInputElement
  const value = Number(input.value)
  emit('update:modelValue', value)
  emit('change', value)
}

const increment = () => {
  if (props.disabled) return
  const newValue = Number(props.modelValue) + props.step
  emit('update:modelValue', newValue)
  emit('change', newValue)
}

const decrement = () => {
  if (props.disabled) return
  const newValue = Math.max(props.min, Number(props.modelValue) - props.step)
  emit('update:modelValue', newValue)
  emit('change', newValue)
}
</script>

<style lang="scss" scoped>
input[type="number"]::-webkit-inner-spin-button,
input[type="number"]::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

input[type="number"] {
  -moz-appearance: textfield;
}

button:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}
</style>
