<template lang="pug">
  section.page
    h4.bg-primary.py-2.mb-0.text-white
      .container Events
    div.page-content.container
      .form-group
        input.search.form-control(placeholder="Search for events...")

      .row.event-entry.d-flex.align-items-center.mb-0.px-2(v-for="n of 31", v-waves)
        .p-2.text-center
          h3.event-day.mb-0 {{ n }}
          .event-month jun
        .flex-fill.p-2
          .event-title Nome do Evento
          .event-time às 19h
        small.p-2.text-uppercase.text-success
          span inscrito
          i.fa.fa-check.ml-1
    fab-button.btn.btn-primary.btn-lg.z-depth-2
      i.fa.fa-plus

</template>

<style lang="sass" scoped>
@import '../assets/design-bootstrap'

.event-entry
  .event-title
    color: $primary
  .event-time
    font-size: 12px
    color: $secondary
  .event-day
    position: relative
    top: 3px
    font-weight: bold
    width: 2rem
  .event-month
    font-size: 12px
    position: relative
    top: -2px
    text-transform: uppercase
</style>
