import { onMounted, onUnmounted, ref } from 'vue'
import { useDebounceFn } from '@vueuse/core'
export const useScroll = () => {

  const scrollHeight = ref(0)

  const updateScroll = useDebounceFn(() => {
    scrollHeight.value = window.pageYOffset
  }, 50)

  onMounted(() => window.addEventListener('scroll', updateScroll))
  
  onUnmounted(() => window.removeEventListener('scroll', updateScroll))

  return { scrollHeight }
}