<script lang="ts">
import { h, Transition, type RendererElement, type FunctionalComponent } from 'vue'

const reset = (el: RendererElement) => {
  el.style.maxHeight = ''
  el.style.overflow = el.dataset.overflow
  el.style.paddingTop = el.dataset.paddingTop
  el.style.paddingBottom = el.dataset.paddingBottom
}

const on = {
  onBeforeEnter(el: RendererElement) {    
    if (!el.dataset) el.dataset = {}

    el.dataset.paddingTop = el.style.paddingTop
    el.dataset.paddingBottom = el.style.paddingBottom
    
    el.dataset.overflow = el.style.overflow

    el.style.maxHeight = 0
    el.style.paddingTop = 0
    el.style.paddingBottom = 0
    el.style.overflow = 'hidden'
  },

  onEnter(el: RendererElement) {
    el.style.maxHeight = `${el.scrollHeight || 0}px`

    el.style.paddingTop = el.dataset.paddingTop
    el.style.paddingBottom = el.dataset.paddingBottom
  },

  onAfterEnter(el: RendererElement) {
    el.style.maxHeight = ''
    el.style.overflow = el.dataset.overflow
  },

  onEnterCancelled(el: RendererElement) {
    reset(el)
  },

  onBeforeLeave(el: RendererElement) {
    if (!el.dataset) el.dataset = {}
    el.dataset.paddingTop = el.style.paddingTop
    el.dataset.paddingBottom = el.style.paddingBottom
    el.dataset.overflow = el.style.overflow

    el.style.maxHeight = `${el.scrollHeight || 0}px`
    el.style.overflow = 'hidden'
  },

  onLeave(el: RendererElement) {
    if (el.scrollHeight !== 0) {
      el.style.maxHeight = 0
      el.style.paddingTop = 0
      el.style.paddingBottom = 0
    }
  },

  onAfterLeave(el: RendererElement) {
    reset(el)
  },

  onLeaveCancelled(el: RendererElement) {
    reset(el)
  },
}

const CollapseTransition: FunctionalComponent = (_props, { slots }) => {
  return h(
    Transition, 
    { 
      name: 'collapse-transition', 
      ...on 
    }, 
    () => slots.default!()
  )
}

export default CollapseTransition
</script>

<style scoped>
.collapse-transition-enter-active {
  transition: 0.3s max-height ease-in-out, 0.3s padding-top ease-in-out, 0.3s padding-bottom ease-in-out;
}
.collapse-transition-leave-active {
  transition: 0.3s max-height ease-in-out, 0.3s padding-top ease-in-out, 0.3s padding-bottom ease-in-out;
}
</style>