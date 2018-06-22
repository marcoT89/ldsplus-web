<template lang="pug">
  div.nav-bars(:class="{[type]: active}", @click="toggle")
    span(:class="backgroundClass")
    span(:class="backgroundClass")
    span(:class="backgroundClass")
</template>

<style lang="sass" scoped>
.nav-bars
  cursor: pointer
  width: 24px
  height: 24px
  position: relative
  span
    transition: all .3s ease-in-out
    position: absolute
    width: 24px
    height: 4px
    border-radius: 4px
    &:nth-child(1)
      top: 0px
    &:nth-child(2)
      top: 8px
    &:nth-child(3)
      top: 16px

.nav-bars.x
  span
    &:first-child
      top: 8px
      transform: rotate(225deg)
    &:nth-child(2)
      opacity: 0
    &:nth-child(3)
      top: 8px
      transform: rotate(-225deg)
</style>

<script>
export default {
  props: {
    value: { default: false },
    type: { default: 'x' },
    background: { default: 'bg-dark' },
    backgroundActive: { default: null },
  },

  data() {
    return {
      active: this.value,
      activeBackground: this.backgroundActive || this.background,
    }
  },

  watch: {
    background() {
      this.activeBackground = this.backgroundActive || this.background
    },
    value() {
      this.active = this.value
    },
  },

  computed: {
    backgroundClass() {
      return this.active ? this.activeBackground : this.background
    },
  },

  methods: {
    toggle() {
      this.active = !this.active
      this.$emit('input', this.active)
    }
  }
}
</script>
