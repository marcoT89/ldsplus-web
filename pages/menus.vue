<template lang="pug">
  section.page
    .container
      h3 Exemplos de Menus
      hr
      button.btn.btn-primary(@click="init") Init
      .w-75.bg-light.position-relative(style="height: 400px")
        mt-menu(:menus="menu")
          template(slot-scope="{ menu }")
            nuxt-link.nav-link(:to="menu.href") {{ menu.text }}
</template>

<script>
import ListTransition from '~/components/transitions/ListTransition'
import MenuListTransition from '~/components/transitions/MenuListTransition'
import MtMenu from '~/components/menus/MtMenu'
import _ from 'lodash'

export default {
  components: { ListTransition, MenuListTransition, MtMenu },
  data() {
    return {
      menu: { children: [] },
      myMenu: {
        id: 1,
        children: [
          { href: '#1', text: 'Menu 1' },
          { href: '#2', text: 'Menu 2' },
          { href: '#3', text: 'Menu 3' },
          { id: 2, href: '#4', text: 'Menu 4', children: [
            { text: 'Submenu 4.1', href: '#4.1' },
            { text: 'Submenu 4.2', href: '#4.2' },
            { text: 'Submenu 4.3', href: '#4.3' },
            { text: 'Submenu 4.4', href: '#4.4' },
            { text: 'Submenu 4.5', href: '#4.5' },
            { text: 'Submenu 4.6', href: '#4.6' },
            { text: 'Submenu 4.7', href: '#4.7' },
          ] },
          { href: '#5', text: 'Menu 5' },
          { href: '#6', text: 'Menu 6' },
        ]
      },
    }
  },

  methods: {
    init() {
      this.menu = this.myMenu
    },
  },
}
</script>
