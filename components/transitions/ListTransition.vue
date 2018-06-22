<template lang="pug">
  transition-group(
    @before-enter="beforeEnter",
    @leave="leave",
    @enter="enter")
    slot
</template>

<script>
export default {
  methods: {
    beforeEnter(el) {
      this.$velocity(
        el,
        { opacity: 0, translateX: '30px' }
      )
    },

    enter(el, done) {
      const delay = el.dataset.index * 150
      this.$velocity(
        el,
        { opacity: 1, translateX: '0px' },
        { complete: done, delay: delay, duration: 'normal' }
      )
    },

    leave(el, done) {
      const delay = el.dataset.index * 80
      this.$velocity(
        el,
        { opacity: 0, translateX: '-30px' },
        { complete: done, delay, duration: 'normal' }
      )
    }
  }
}
</script>
