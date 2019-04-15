<template>
  <v-container>
    <cardSelect></cardSelect>
    <carousel
      :per-page="3"
      :mouse-drag="false"
      class="p-4"
    >
      <slide
        v-for="card in cards"
        :key="card.title"
      >
        <v-flex
            v-bind="{ [`xs${card.flex}`]: true }"
            class="pa-0"
          >
          <v-card
            color="#60a25d"
            class="white--text m-2"
            style="max-width: 21rem;"
          >
            <v-layout>
              <v-flex xs5>
                <v-img
                  :src="card.src"
                  contain
                  width="125px"
                  height="175px"
                ></v-img>
              </v-flex>
              <v-flex xs12>
                <v-card-title
                  primary-title
                  class="p-2"
                >
                  <h4>{{ card.title }}</h4>
                  <div>{{ card.context }}</div>
                  <div>#{{ card.tag }}</div>
                  <v-btn small color="success" class="ml-5 px-4">자세히보기</v-btn>
                    <span class="mx-1 mt-1">
                      <v-icon>remove_red_eye</v-icon>
                      <span class="mx-2">{{ card.hits }}</span>
                      <v-icon>star_border</v-icon>
                      <span class="mx-2">{{ card.hits }}</span>
                    </span>
                </v-card-title>
              </v-flex>
            </v-layout>
          </v-card>
        </v-flex>
      </slide>
      <slide
        class="pt-2"
      >
        <span>
          <mdb-btn outline="dark-green">
            <span class="px-4">
              <span class="pa-4">
                <v-icon x-large class="pa-5">
                  add
                </v-icon>
              </span>
            </span>
          </mdb-btn>
        </span>
      </slide>
    </carousel>
  </v-container>
</template>

<script>
  import cardSelect from '../cardSelection.vue';
  import { mdbBtn } from 'mdbvue';
  import { Carousel, Slide } from 'vue-carousel';
  export default {
    name: 'navigation',
    components: {
      cardSelect,
      mdbBtn,
      Carousel,
      Slide
    },
    data() {
      return {
        cards: [
          { title: '로빈 카루타', src: require('../../assets/로빈.jpg'), context: '원피스 캐릭터 로빈 카루타입니다', tag: '원피스' , hits: 30, flex: 4.5 },
          { title: '에이스 카루타', src: require('../../assets/에이스.jpg'), context: '원피스 캐릭터 에이스 카루타입니다', tag: '원피스', hits: 30, flex: 4.5 },
          { title: '조로 카루타', src: require('../../assets/조로.jpg'), context: '원피스 캐릭터 조로 카루타입니다', tag: '원피스', hits: 30, flex: 4.5 },
          { title: '에이스2 카루타', src: require('../../assets/에이스.jpg'), context: '원피스 캐릭터 에이스 카루타입니다', tag: '원피스', hits: 30, flex: 4.5 },
        ]
      }
    },
  }
</script>

<style scoped>

</style>
