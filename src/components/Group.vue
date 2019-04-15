<template>
  <v-container>
    <v-img
      :src="require('../assets/main.jpg')"
    ></v-img>

    <v-container
      class="text-md-center"
    >
    <div
      div class="headline font-weight-bold"
    >
      현재 인기 있는 카드를 구경해 보세요!
    </div>
    </v-container>

    <v-container fluid>
      <v-layout justify-center row>
        <v-flex xs6>
          <v-card
            color="#084548"
            class="ma-2 pa-2"
          >
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
          </v-card>
        </v-flex>
        <v-flex xs6>
         <v-card
            color="#084548"
            class="ma-2 pa-2"
          >
            <v-card
              flat
              color="white"
              class="text-md-center p-3"
            >
              <div class="headline font-weight-bold">
                내가만든 카드로 즐기기
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
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>

  </v-container>
</template>

<script>
  import cardSelect from '../components/cardSelection.vue';
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
  }
</script>

<style scoped>
</style>
