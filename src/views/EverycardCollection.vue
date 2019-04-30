<template>
  <v-container>
    <EverycardCollection></EverycardCollection>
  </v-container>
</template>

<script>
  import EverycardCollection from '../components/CardCollection/EverycardCollection'

  export default {
    components: {
      EverycardCollection
    }
  }
</script>

<style scoped>
  .container {
    max-width: 100%
  }
</style>
