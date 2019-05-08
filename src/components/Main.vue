<template lang="html">
  <v-container>
    <v-img
      :src="require('../assets/main.jpg')"
    ></v-img>

    <v-container
      class="py-5"
    >
    <div
      div class="headline font-weight-bold m-4 text-md-center"
    >
      현재 인기 있는 카드를 구경해 보세요!
    </div>

    <carousel
      :navigation-enabled="true"
      :per-page="3"
      :pagination-enabled="false"
      :navigation-next-label="navigationNext"
      :navigation-prev-label="navigationPrev"
      class="p-3"
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
            color="#4f5d7e"
            class="white--text p-2 ml-4"
            style="max-width: 23rem;"
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
                  class="p-1"
                >
                  <p class="title font-weight-bold m-1">{{ card.title }}</p>
                  <div class="body-2 m-1">{{ card.context }}</div>
                  <div class="body-2 m-1">#{{ card.tag }}</div>
                  <v-btn small color="#79b3bf" class="white--text font-weight-bold ml-5 px-4 body-2">자세히보기</v-btn>
                    <span class="mx-1 mt-1">
                      <v-icon>remove_red_eye</v-icon>
                      <span class="mx-2 body-2">{{ card.hits }}</span>
                      <v-icon>star_border</v-icon>
                      <span class="mx-2 body-2">{{ card.hits }}</span>
                    </span>
                </v-card-title>
              </v-flex>
            </v-layout>
          </v-card>
        </v-flex>
      </slide>
      <!-- <slide
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
      </slide> -->
    </carousel>


    </v-container>

    <v-container fluid>
      <v-layout justify-center row>
        <v-flex xs6>
          <v-card
            color="#084548"
            class="ma-2 pa-2"
          >
            <a href="../everycardCollection" style="text-decoration:none;">
              <v-card
                flat
                color="white"
                class="text-md-center p-3"
              >
                <div class="headline font-weight-bold">
                  다앙한 카드로 즐기기
                </div>
                <b-img
                  :src="require('../assets/every_card.png')"
                  width="270px"
                  center
                ></b-img>
                <div class="subheading font-weight-bold">
                  다른 사용자들이 만든 카드를 구독하고 구독한 카드로 카루타를 즐겨 보세요!
                </div>
              </v-card>
            </a>
          </v-card>
        </v-flex>
        <v-flex xs6>
          <v-card
            color="#084548"
            class="ma-2 pa-2"
          >
            <a href="../mycardCollection" style="text-decoration:none;">
              <v-card
                flat
                color="white"
                class="text-md-center p-3"
              >
                <div class="headline font-weight-bold">
                  내가 만든 카드로 즐기기
                </div>
                <b-img
                  :src="require('../assets/my_card.png')"
                  width="270px"
                  center
                ></b-img>
                <div class="subheading font-weight-bold">
                  내가 원하는 카드가 없다면 직접 만들어 카루타를 즐겨 보세요!
                </div>
              </v-card>
            </a>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>

  </v-container>
</template>

<script>
  import cardSelect from './CardCollection/cardSelection.vue';
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
          { title: '로빈 카루타', src: require('../assets/로빈.jpg'), context: '원피스 캐릭터 로빈 카루타입니다', tag: '원피스' , hits: 30, flex: 4.5 },
          { title: '에이스 카루타', src: require('../assets/에이스.jpg'), context: '원피스 캐릭터 에이스 카루타입니다', tag: '원피스', hits: 30, flex: 4.5 },
          { title: '조로 카루타', src: require('../assets/조로.jpg'), context: '원피스 캐릭터 조로 카루타입니다', tag: '원피스', hits: 30, flex: 4.5 },
          { title: '에이스2 카루타', src: require('../assets/에이스.jpg'), context: '원피스 캐릭터 에이스 카루타입니다', tag: '원피스', hits: 30, flex: 4.5 },
        ]
      }
    },
    computed: {
      navigationNext: function() { return `<i class="fas fa-chevron-right fa-4x"></i>` },
      navigationPrev: function() { return `<i class="fas fa-chevron-left fa-4x"></i>` }
    }
  }
</script>

<style scoped>
.container {
    text-decoration:none;
}
</style>