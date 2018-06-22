<template lang="pug">
  .menu
    menu-list-transition
      .menu-item(v-for="(menu, index) of activeMenu.children", :key="menu[trackBy]", :data-index="index" @click="menuClick(menu, index)")
        slot(:menu="menu")
          | {{ menu.text }} (MtMenu)
</template>

<script>
import MenuListTransition from '~/components/transitions/MenuListTransition'
export default {
  components: { MenuListTransition },

  props: {
    menus: { required: true, type: Object },
    trackBy: { default: 'href' },
  },

  data() {
    return {
      activeMenu: this.menus,
      parentMenus: [],
    }
  },

  created() {
    this.init()
  },

  watch: {
    menus() {
      this.init()
    },
  },

  methods: {
    init() {
      this.activeMenu = this.menus
      this.deactivateChildrenOfMenu(this.activeMenu)
      this.parentMenus = []
    },

    menuClick(menu, index) {
      if (!index && this.parentMenus.length) {
        menu.active = false
        return this.backMenu()
      }
      if (menu.children) {
        return this.activateMenu(menu)
      }
    },

    activateMenu(menu) {
      this.recordMenuHistory()
      this.moveMenuToTop(menu)
      this.deactivateChildrenOfMenu(menu)
      menu.active = true

      setTimeout(() => {
        this.updateActiveMenuChildrenWith(menu)
      }, 500);
    },

    updateActiveMenuChildrenWith(menu) {
      this.activeMenu.children = [menu].concat(menu.children)
    },

    backMenu() {
      this.activeMenu = this.parentMenus.pop()
      this.activateFirstChildOfActiveMenu()
    },

    activateFirstChildOfActiveMenu() {
      if (this.activeMenu && this.activeMenu.children && this.activeMenu.children.length) {
        this.activeMenu.children[0].active = true
      }
    },

    deactivateChildrenOfMenu(menu) {
      if (menu && menu.children) {
        for (let item of menu.children) {
          item.active = false
        }
      }
    },

    recordMenuHistory() {
      this.parentMenus.push({ ...this.activeMenu })
    },

    moveMenuToTop(menu) {
      this.deactivateChildrenOfMenu(this.activeMenu)
      this.activeMenu.children = this.activeMenu.children.filter(m => m !== menu)
      this.activeMenu.children.unshift(menu)
    },
  }
}
</script>
