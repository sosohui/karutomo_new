<template>
  <v-container
    class="pa-0"
  >
    <Main></Main>
  </v-container>
</template>

<script>
  import Main from '../components/Main.vue'

  export default {
    components: {
      Main
    }
  }
</script>

<style scoped>
.container {
  max-width: 100%
}
</style>
