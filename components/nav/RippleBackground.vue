<template lang="pug">
  .ripple-background(:class="{'opened': toggled}")
</template>

<style lang="sass" scoped>
$transform-effect: .5s
$opacity-effect: .3s
.ripple-background
  width: 50px
  height: 50px
  border-radius: 50%
  position: fixed
  opacity: 0.5
  transform: scale(0)
  transition: transform $transform-effect ease-in-out, opacity $opacity-effect ease-in-out
  &.opened
    transform: scale(1)
    opacity: 1
    transition: transform $transform-effect ease-in-out, opacity $opacity-effect ease-in-out

</style>

<script>
export default {
  props: {
    value: { default: false },
    position: { default: () => ({x: 0, y: 0}) },
  },

  data() {
    return {
      toggled: this.value,
    }
  },

  watch: {
    value() { this.toggled = this.value },
    position() { this.positionElement(this.$el, this.position.x, this.position.y) },
  },

  mounted() {
    let el = this.$el
    const d = this.width()
    el.style.width = d + 'px'
    el.style.height = d + 'px'
    this.positionElement(el)
  },

  methods: {
    diagonal() {
      const w = window.innerWidth
      const h = window.innerHeight
      return Math.round(Math.sqrt(Math.pow(w, 2) + Math.pow(h, 2))) + 1
    },

    width() {
      return (3 * Math.round(Math.sqrt((Math.pow(this.diagonal(), 2) / 2)))) + 1
    },

    positionElement(element, x = 0, y = 0) {
      const halfWidth = element.offsetWidth/2
      x = x - halfWidth
      y = y - halfWidth
      element.style.left = x + 'px'
      element.style.top = y + 'px'
    },
  }
}
</script>
