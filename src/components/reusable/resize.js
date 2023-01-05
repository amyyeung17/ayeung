import { onMounted, onUnmounted, ref } from 'vue'
import { useDebounceFn } from '@vueuse/core'
export const useResize = () => {
  const windowHeight = ref(0)
  const windowWidth = ref(0)

  const updateResize = useDebounceFn(() => {
    windowHeight.value = window.innerHeight
    windowWidth.value = window.innerWidth
  }, 50)

  onMounted(() => window.addEventListener('resize', updateResize))
  
  onUnmounted(() => window.removeEventListener('resize', updateResize))

  return { windowHeight, windowWidth }
}