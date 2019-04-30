<template lang="html">
  <v-container
    class="pa-0"
  >
  <cardDetail></cardDetail>
  </v-container>
</template>

<script>
  import CardDetail from '../components/CardCollection/detailCard.vue'

  export default {
    components: {
      CardDetail
    }
  }
</script>

<style scoped>
  .container {
    max-width:100%;
  }
</style>
