<template lang="html">
  <v-container
    class="pa-0"
  >
  <ImageUploader></ImageUploader>
  <!-- <cardDetail></cardDetail> -->
  </v-container>
</template>

<script>
  // import CardDetail from '../components/CardCollection/detailCard.vue'
  import ImageUploader from '../components/CardCollection/imageUploader.vue'

  export default {
    components: {
      ImageUploader
    }
  }
</script>

<style scoped>
  .container {
    max-width:100%;
  }
</style>
