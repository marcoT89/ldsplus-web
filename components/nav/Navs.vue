<template lang="pug">
  .fixed.navigation.text-white(:class="{ visible }")
    .navs.d-flex.flex-column.h-100.pb-5
      mt-menu(:menus="items", track-by="text")
        template(slot-scope="{ menu }" v-if="!$slots.default")
          slot(:menu="menu")
            nuxt-link.nav-link.text-capitalize.font-weight-light.text-white(:to="menu.path") {{ menu.text }}
    .footer.w-100(:class="{ visible }")
      .text-center.text-white.bg-primary
        span(style="opacity: 0.3; font-size: 12px")
          | Developed by
          b.ml-1 Marco Túlio
</template>

<script>

import ListTransition from '~/components/transitions/ListTransition'
import MtMenu from '~/components/menus/MtMenu'

export default {
  components: { ListTransition, MtMenu },

  props: {
    visible: { default: false },
    navs: { required: true, type: Object },
  },

  data: () => ({
    items: {}
  }),

  watch: {
    visible() {
      this.toggle()
    },
    navs() {
      this.toggle()
    },
  },

  methods: {
    toggle() {
      this.items = this.visible ? {...this.navs} : {}
    },
    closeList() {}
  }
}
</script>

<style lang="sass">
.navs
  .nav-link
    text-align: center
    font-size: 2rem
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
