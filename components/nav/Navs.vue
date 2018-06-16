<template lang="pug">
  .fixed.navigation.text-white(:class="{ visible }")
    .navs.d-flex.flex-column.h-100.pb-5
      list-transition
        div(
          v-for="(link, index) of items",
          :key="index",
          :data-index="index",
        )
          slot(:link="link")
            a.nav-link.font-weight-light {{ link.text }}
    .footer.w-100(:class="{ visible }")
      .text-center.text-white.bg-primary
        span(style="opacity: 0.3; font-size: 12px")
          | Developed by
          b.ml-1 Marco Túlio
</template>

<script>

import ListTransition from '~/components/transitions/ListTransition'

export default {
  components: { ListTransition },

  props: {
    visible: { default: false },
    links: { required: true, type: Array },
  },

  data: () => ({
    items: []
  }),

  watch: {
    visible() {
      this.toggle()
    },
    links() {
      this.toggle()
    },
  },

  methods: {
    toggle() {
      this.items = this.visible ? [...this.links] : []
    },
    closeList() {}
  }
}
</script>

<style lang="sass">
.navs
  .nav-link
    text-align: center
    font-size: 2.5rem
</style>


<style lang="sass" scoped>
.fixed.navigation
  position: fixed
  margin: 0
  top: 0
  right: 0
  bottom: 0
  left: 0
  visibility: hidden
  transition: visibility 1ms ease-in-out 0.3s
  &.visible
    visibility: visible

  .navs
    margin: 0
    padding: 2rem
    list-style: none
    overflow-y: scroll

  .footer
    position: absolute
    bottom: 0
    border-top: 1px solid rgba(255, 255, 255, 0.2)
    visibility: hidden
    opacity: 0
    &.visible
      visibility: visible
      transition: all .3s ease-in-out 1s
      opacity: 1
</style>
