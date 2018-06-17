<template lang="pug">
  nav.navbar.navbar-dark.bg-primary
    .container.px-0.px-md-3
      .navbar-nav.text-white
        bar-icon.mt-1(v-model="showNavs", background="bg-white", style="z-index: 101", @click.native="mouseclick")
        ripple-background.bg-primary(v-model="showNavs", :position="position", style="z-index: 99")
      a.navbar.navbar-brand.pl-0.mr-auto.ml-2(href="#") LDS+

    navs(:visible="showNavs", style="z-index: 100", :links="links")
      template(slot-scope="{ link }")
        nuxt-link.nav-link.text-capitalize.font-weight-light.text-white(
          :to="link.path",
          @click.native="showNavs = false"
        ) {{ link.text }}

</template>

<script>
import BarIcon from './BarIcon'
import RippleBackground from './RippleBackground'
import ListTransition from '~/components/transitions/ListTransition'
import Navs from './Navs'
import _ from 'lodash'

export default {
  components: { BarIcon, RippleBackground, ListTransition, Navs },

  data: () => ({
    showNavs: false,
    links: [
      { text: 'Início', path: '/' },
      { text: 'Sobre', path: '/about' },
      { text: 'Contato', path: '/contact' },
      { text: 'Eventos', path: '/events' },
    ],
    position: {
      x: 0,
      y: 0
    }
  }),

  methods: {
    mouseclick(e) {
      const { x, y } = e
      this.position = { x, y }
    },
  }
}
</script>
