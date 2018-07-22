<template lang="pug">
  section.page
    h4.bg-primary.py-2.mb-0.text-white
      .container {{ name }} + {{ id }}
</template>

<script>
export default {
  asyncData({ params }) {
    return new Promise(resolve =>
      setTimeout(() => {
        resolve({
          id: params.id,
          name: "Event"
        });
      }, 500)
    );
  },

  data() {
    return {
      name: null
    };
  },

  mounted() {
    console.log("event detail page");
  }
};
</script>
