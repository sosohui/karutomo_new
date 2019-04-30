<template>
  <v-container>
    <storycardCollection></storycardCollection>
  </v-container>
</template>

<script>
  import storycardCollection from '../components/CardCollection/StorycardCollection.vue'

  export default {
    components: {
      storycardCollection
    }
  }
</script>

<style scoped>
  .container {
    max-width: 100%
  }
</style>
