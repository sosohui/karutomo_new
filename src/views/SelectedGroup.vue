<template lang="html">
  <v-container
    class="py-0 px-3"
  >
  <selectedGroup></selectedGroup>
  </v-container>
</template>

<script>
  import selectedGroup from '../components/selectedGroup.vue'

  export default {
    components: {
      selectedGroup
    }
  }
</script>

<style scoped>
  .container {
    max-width:100%;
  }
</style>
