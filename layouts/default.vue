<template lang="pug">
  div
    navbar#navbar.w-100
    nuxt
</template>

<script>
import Navbar from "~/components/nav/Navbar";

export default {
  components: { Navbar }
};
</script>

<style lang="sass">
@import '~/assets/design-bootstrap.sass'
body
  background-color: #333
  #navbar
    position: fixed
    z-index: 1
  .page
    margin-top: 56px
    background-color: white
    position: fixed
    width: 100%
    top: 0
    bottom: 0
    overflow-y: auto
</style>
