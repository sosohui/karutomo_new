<template lang="html">
  <v-container pt-2 style="max-width:98%;">
    <v-layout py-2>
      <cardSelect class="pa-2"></cardSelect>
    </v-layout>
    <v-layout justify-center style="background-color:#b7b7b7">
      <v-flex xs10>
        <div class="headline font-weight-black white--text pt-4 pb-1">
          맞춤 추천 카드
        </div>
        <carousel
          :autoplay="true"
          :autoplay-timeout="100000"
          :loop="true"
          :navigation-enabled="true"
          :per-page="2"
          :pagination-enabled="false"
          :navigation-next-label="navigationNext"
          :navigation-prev-label="navigationPrev"
          :mouse-drag="false"
          class="py-3 mb-4"
        >
          <slide
            v-for="card in cards"
            :key="card.title"
          >
            <v-flex
                v-bind="{ [`xs${card.flex}`]: true }"
                class="py-0 px-4"
              >
              <v-card
                color="#4f5d7e"
                class="white--text p-2 ml-5"
                style="max-width: 35rem;"
              >
                <v-layout>
                  <v-flex xs5>
                    <v-img
                      :src="card.src"
                      contain
                      width="200px"
                      height="280px"
                    ></v-img>
                  </v-flex>
                  <v-container
                    ma-0
                    pa-2
                  >
                    <!-- <v-card-title
                      primary-title
                      class="p-1"
                    > -->
                      <v-layout
                        column
                        justify-space-around
                        fill-height
                      >
                        <v-flex>
                          <div class="headline font-weight-bold m-1 pa-1">{{ card.title }}</div>
                          <div class="subheading ma-1 pa-1">{{ card.context }}</div>
                          <div class="subheading ma-1 pa-2">#{{ card.tag }}</div>
                        </v-flex>
                        <v-layout
                          style="height:100px;"
                          column
                          justify-end
                          fill-height
                        >
                          <router-link
                            :to="{name: 'detailCard'}"
                            style=" text-decoration: none"
                            class="pa-2"
                          >
                            <v-btn
                              color="#79b3bf"
                              class="white--text font-weight-bold ml-5 px-4 subheading"
                            >
                              구독하러가기
                            </v-btn>
                          </router-link>
                          <div
                            class="mx-1 mt-1 pa-1"
                          >
                            <v-icon>remove_red_eye</v-icon>
                            <span class="mx-2 body-2">{{ card.hits }}</span>
                            <v-icon>star_border</v-icon>
                            <span class="mx-2 body-2">{{ card.hits }}</span>
                          </div>
                        </v-layout>
                      </v-layout>
                    <!-- </v-card-title> -->
                  </v-container>
                </v-layout>
              </v-card>
            </v-flex>
          </slide>

        </carousel>
      </v-flex>
    </v-layout>

    <v-container style="max-width:97%">
      <div class="headline font-weight-black px-3 pt-4">모든 카드 보기</div>

      <v-layout
        row
      >
        <v-flex
          v-for="card in cards"
          :key="card.title"
          py-4
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
                    <router-link
                      :to="{name: 'detailCard'}"
                      style=" text-decoration: none"
                    >
                      <v-btn small color="#79b3bf" class="white--text font-weight-bold ml-5 px-4 body-2">자세히보기</v-btn>
                    </router-link>
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
        </v-flex>
      </v-layout>

    </v-container>

  </v-container>
</template>

<script>
  import { mdbBtn } from 'mdbvue';
  import cardSelect from './cardSelection.vue';
  import { Carousel, Slide } from 'vue-carousel';
  export default {
    components: {
      Carousel,
      cardSelect,
      Slide
    },
    data() {
      return {
        cards: [
          { title: '로빈 카루타', src: require('../../assets/로빈.jpg'), context: '원피스 캐릭터 로빈 카루타입니다', tag: '원피스' , hits: 30, flex: 4.5 },
          { title: '에이스 카루타', src: require('../../assets/에이스.jpg'), context: '원피스 캐릭터 에이스 카루타입니다', tag: '원피스', hits: 30, flex: 4.5 },
          { title: '조로 카루타', src: require('../../assets/조로.jpg'), context: '원피스 캐릭터 조로 카루타입니다', tag: '원피스', hits: 30, flex: 4.5 },
          { title: '조로 카루타2', src: require('../../assets/조로.jpg'), context: '원피스 캐릭터 조로 카루타입니다', tag: '원피스', hits: 30, flex: 4.5 },
          { title: '로빈 카루타2', src: require('../../assets/로빈.jpg'), context: '원피스 캐릭터 로빈 카루타입니다', tag: '원피스' , hits: 30, flex: 4.5 },
          { title: '에이스 카루타2', src: require('../../assets/에이스.jpg'), context: '원피스 캐릭터 에이스 카루타입니다', tag: '원피스', hits: 30, flex: 4.5 },
          { title: '조로 카루타3', src: require('../../assets/조로.jpg'), context: '원피스 캐릭터 조로 카루타입니다', tag: '원피스', hits: 30, flex: 4.5 },
          { title: '조로 카루타4', src: require('../../assets/조로.jpg'), context: '원피스 캐릭터 조로 카루타입니다', tag: '원피스', hits: 30, flex: 4.5 },
        ]
      }
    },
    methods: {
    },
    computed: {
      navigationNext: function() { return `<i class="fas fa-chevron-right fa-4x"></i>` },
      navigationPrev: function() { return `<i class="fas fa-chevron-left fa-4x"></i>` }
    }
  }
</script>

<style scoped>
</style>
