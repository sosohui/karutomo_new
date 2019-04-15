<template>
  <v-flex text-xs-center>
    <mdb-btn-group class="justify-content-center">
      <mdb-btn outline="dark-green" darkWaves fab>
        <router-link
          :to="{name: 'mycardCollection'}"
          class="black--text ma-3 font-weight-black"
          style=" text-decoration: none"
        >
        <span class="subheading font-weight-black">나의 카드</span>
        </router-link>
      </mdb-btn>
      <mdb-btn outline="dark-green" darkWaves fab>
        <router-link
          :to="{name: 'everycardCollection'}"
          class="black--text ma-3 font-weight-black"
          style=" text-decoration: none"
        >
        <span class="subheading font-weight-black">모두의 카드</span>
        </router-link>
      </mdb-btn>
      <mdb-btn outline="dark-green" darkWaves fab>
        <router-link
          :to="{name: 'storycardCollection'}"
          class="black--text ma-3 font-weight-black"
          style=" text-decoration: none"
        >
        <span class="subheading font-weight-black">스토리 카드</span>
        </router-link>
      </mdb-btn>
    </mdb-btn-group>
  </v-flex>
</template>

<script>
  import { mdbBtn, mdbBtnGroup } from 'mdbvue';
  export default {
    name: 'ButtonsGroup',
    components: {
      mdbBtn,
      mdbBtnGroup
    },
    data() {
      return {

      }
    }
  }
</script>

<style>

</style>
