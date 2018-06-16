<template lang="pug">
  div
    navbar
    nuxt
</template>

<script>
import Navbar from '~/components/nav/Navbar'

export default {
  components: { Navbar },
}
</script>

<style lang="sass">
@import '~/assets/design-bootstrap.sass'
</style>
