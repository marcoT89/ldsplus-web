<template lang="pug">
  transition-group(
    @before-enter="beforeEnter",
    @after-leave="afterLeave"
    @leave="leave",
    @enter="enter")
    slot
</template>

<script>
export default {
  methods: {
    beforeEnter(el) {
      console.log('beforeEnter')
      this.$velocity(
        el,
        { opacity: 0, translateX: '30px' }
      )
    },

    afterLeave(el) {
      // console.log('afterLeave');

      // this.$velocity(
      //   el,
      //   { opacity: 1 },
      // )
    },

    enter(el, done) {
      console.log('enter');

      const delay = el.dataset.index * 80
      this.$velocity(
        el,
        { opacity: 1, translateX: '0px' },
        { complete: done, delay: delay, duration: 'normal' }
      )
    },

    leave(el, done) {
      console.log('leave');

      const delay = 80
      this.$velocity(
        el,
        { opacity: 0, translateX: '-30px' },
        { complete: done, delay, duration: 'normal' }
      )
    }
  }
}
</script>
