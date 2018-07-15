<template lang="pug">
  button.fab-button(v-waves.button.light.float)
    slot
</template>

<style lang="sass" scoped>
.fab-button
  position: fixed
  bottom: 1rem
  right: 1rem
  border-radius: 50px
  padding: 0.75rem 1.2rem

</style>


<script>
export default {};
</script>
