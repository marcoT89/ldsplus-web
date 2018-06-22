<template lang="pug">
  nav.navbar.navbar-dark.bg-primary
    .container.px-0.px-md-3
      .navbar-nav.text-white
        bar-icon.mt-1(v-model="showNavs", background="bg-white", style="z-index: 101", @click.native="onBarIconClick")
        ripple-background.bg-primary(v-model="showNavs", :position="position", style="z-index: 99")
      a.navbar.navbar-brand.pl-0.mr-auto.ml-2(href="#") LDS+

    navs(:visible="showNavs", style="z-index: 100", :navs="activeNavs")
      template(slot-scope="{ menu }")
        nuxt-link.nav-link.text-capitalize.font-weight-light.text-white.unselectable(
          :to="menu.path", v-if="!menu.children", @click.native="showNavs = false"
        ) {{ menu.text }}
        a.nav-link.text-capitalize.font-weight-light.text-white.unselectable.has-children(
          v-if="menu.children", :class="{active: menu.active}")
          | {{ menu.text }}
          span.icon
            i.fa.fa-fw.fa-chevron-down

</template>

<style lang="sass" scoped>
.unselectable
  user-select: none

$transition-time: .5s
.nav-link
  cursor: pointer
.menu-list-move
  .nav-link.active i.fa
    transition: all $transition-time ease
.nav-link.has-children
  position: relative
  border-bottom: 1px solid rgba(255, 255, 255, 0)
  transition: all $transition-time ease

  .icon
    position: absolute
    right: 0
    margin-top: -12px
    top: 50%
    font-size: 1rem
    i.fa
      transition: all $transition-time ease
  &.active
    border-bottom: 1px solid rgba(255, 255, 255, 1)
    .icon i.fa
      transform: rotate(-180deg)
</style>


<script>
import BarIcon from './BarIcon'
import RippleBackground from './RippleBackground'
import Navs from './Navs'

export default {
  components: { BarIcon, RippleBackground, Navs },

  data: () => ({
    showNavs: false,
    activeNavs: { children: [] },
    navs: {
      id: 1,
      children: [
        { text: 'Início', path: '/' },
        { text: 'Menus', path: '/menus' },
        { text: 'Sobre', path: '', active: false, children: [
          { text: 'Sobre mim', path: '/about' },
          { text: 'Sobre a Poly', path: '/about' },
          { text: 'Sobre Família', path: '/about', children: [
            { text: 'Sub Menu 1', path: '/menus' },
            { text: 'Sub Menu 2', path: '/menus' },
          ] },
        ]},
        { text: 'Contato', path: '/contact' },
        { text: 'Eventos', path: '/events' },
      ]
    },
    position: {
      x: 0,
      y: 0
    }
  }),

  watch: {
    showNavs() {
      this.showNavs ? this.init() : this.reset()
    }
  },

  methods: {
    init() {
      this.activeNavs = { ...this.navs }
    },

    reset() {
      this.activeNavs = { children: [] }
    },

    onBarIconClick(e) {
      const { x, y } = e
      this.position = { x, y }
    },
  }
}
</script>
