<template>
  <v-container
    class="pa-0"
  >
    <Group></Group>
  </v-container>
</template>

<script>
  import Group from '../components/Group.vue'

  export default {
    components: {
      Group
    }
  }
</script>

<style scoped>
  .container {
    max-width: 100%
  }
</style>
