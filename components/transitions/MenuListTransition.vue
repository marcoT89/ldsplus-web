<template lang="pug">
  transition-group(
    name="menu-list",
    @beforeEnter="beforeEnter",
    @leave="leave",
    @enter="enter")
    slot
</template>

<style lang="sass">
.menu-list-move
  transition: all .5s ease-out
</style>


<script>
export default {
  methods: {
    beforeEnter(el) {
      this.$velocity(el, { opacity: 0, translateX: 50 }, { duration: 'normal' })
    },

    enter(el, completed) {
      const delay = el.dataset.index * 80
      this.$velocity(el, { opacity: 1, translateX: 0 }, { delay, completed, duration: 'normal' })
    },

    leave(el, completed) {
      this.$velocity(el, { opacity: 0 }, { completed, duration: 'normal', display: 'none' })
    },
  }
}
</script>
