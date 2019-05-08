 <template>
  <v-container
    class="pa-0 mx-0"
  >
    <MakeCard></MakeCard>
  </v-container>
</template>

<script>
  import MakeCard from '../components/CardCollection/makeCard.vue'

  export default {
    components: {
      MakeCard
    }
  }
</script>

<style scoped>
.container {
  max-width: 100%
}
</style>
