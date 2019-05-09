<template lang="html">
  <v-container pt-2>
    <v-layout pb-0 pt-2>
      <cardSelect class="pa-2"></cardSelect>
    </v-layout>

    <div class="m-3">
      <div class="headline font-weight-black">내가 제작한 카드</div>
    </div>
    <carousel
      :navigation-enabled="true"
      :per-page="3"
      :pagination-enabled="false"
      :navigation-next-label="navigationNext"
      :navigation-prev-label="navigationPrev"
      :mouse-drag="false"
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
                  class="pa-1"
                >
                  <p class="title font-weight-bold m-1">{{ card.title }}</p>
                  <div class="body-2 ma-1">{{ card.context }}</div>
                  <div class="body-2 ma-1">#{{ card.tag }}</div>
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
      </slide>

      <!-- 카드 추가를 위한 버튼 -->
      <slide
        class="pl-0"
      >
        <span>
          <router-link
            :to="{name: 'makeCard'}"
            class="black--text ma-3 font-weight-black"
            style=" text-decoration: none"
          >
            <mdb-btn
                outline="mdb-color"
                class="py-4 mt-1 ml-4"
                @click.native="modal = true"
            >
                <span class="px-5">
                <span class="pa-4">
                    <v-icon x-large class="pa-5">
                    add
                    </v-icon>
                </span>
                </span>
            </mdb-btn>
          </router-link>
        </span>
      </slide>
    </carousel>

    <!-- 카드 제작 모달창 -->
    <!-- <mdb-modal :show="modal" @close="modal = false">
      <mdb-modal-header class="text-md-center" color="mdb-color">
        <mdb-modal-title><div class="font-weight-bold headline">카드 팩 제작</div></mdb-modal-title>
      </mdb-modal-header>
      <mdb-modal-body style="background-color:#45526e;">
        <v-layout justify-center text-md-center column>
          <v-flex pb-2>
            <div class="form-group1">
              <label
                class="title font-weight-bold white--text"
              >카드팩 이름</label>
              <v-text-field
                label="Card Pack Name"
                solo
                v-model="cardPackName"
              ></v-text-field>
            </div>
          </v-flex>
          <v-flex py-2>
            <div class="form-group2">
              <label
                class="title font-weight-bold white--text"
              >카드팩 설명</label>
              <v-textarea
                solo
                name="input-7-4"
                label="Card Pack Context"
                v-model="cardPackContext"
              ></v-textarea>
            </div>
          </v-flex>
          <v-flex pt-2>
            <div class="form-group3">
              <label
                for="cardPackName"
                class="title font-weight-bold white--text"
              >해시태그</label>
              <v-text-field
                label="#Hashtag"
                solo
                v-model="cardPackHashtag"
              ></v-text-field>
            </div>
          </v-flex>
        </v-layout>
      </mdb-modal-body>
      <mdb-modal-footer class="pa-1" style="background-color:#45526e;">
        <v-btn
          v-on:click="cardPackInfo()"
          :to="{name: 'detailCard'}"
          color="#59698d"
          class="font-weight-medium white--text"
        >
          Next
        </v-btn>
      </mdb-modal-footer>
    </mdb-modal> -->
    <!-- 모달창 끝 -->

    <div class="m-3">
      <div class="headline font-weight-black">내가 구독한 카드</div>
    </div>
    <carousel
      :navigation-enabled="true"
      :per-page="3"
      :pagination-enabled="false"
      :navigation-next-label="navigationNext"
      :navigation-prev-label="navigationPrev"
      :mouse-drag="false"
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
                  class="pa-1"
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
      </slide>
      <slide
        class="pl-3"
      >
        <span>
          <mdb-btn
            outline="mdb-color"
            class="py-4 mt-1 ml-4"
          >
            <span class="px-5">
              <span class="pa-4">
                <router-link
                  :to="{name: 'everycardCollection'}"
                  style="text-decoration: none"
                >
                <v-icon x-large class="pa-5">
                  add
                </v-icon>
                </router-link>
              </span>
            </span>
          </mdb-btn>
        </span>
      </slide>
    </carousel>

  </v-container>
</template>

<script>
  import { mdbModal, mdbModalHeader, mdbModalTitle, mdbModalBody, mdbModalFooter, mdbBtn } from 'mdbvue';
  import cardSelect from './cardSelection.vue';
  import { Carousel, Slide } from 'vue-carousel';
  import { eventBus } from '../../main';
  export default {
    name: 'ButtonPage',
    components: {
      mdbModal,
      mdbModalHeader,
      mdbModalTitle,
      mdbModalBody,
      mdbModalFooter,
      cardSelect,
      mdbBtn,
      Carousel,
      Slide
    },
    data() {
      return {
        cardPackName:'',
        cardPackContext:'',
        cardPackHashtag: '',
        modal: false,
        cards: [
          { title: '로빈 카루타', src: require('../../assets/로빈.jpg'), context: '원피스 캐릭터 로빈 카루타입니다', tag: '원피스' , hits: 30, flex: 4.5 },
          { title: '에이스 카루타', src: require('../../assets/에이스.jpg'), context: '원피스 캐릭터 에이스 카루타입니다', tag: '원피스', hits: 30, flex: 4.5 },
          { title: '조로 카루타', src: require('../../assets/조로.jpg'), context: '원피스 캐릭터 조로 카루타입니다', tag: '원피스', hits: 30, flex: 4.5 }
        ]
      }
    },
    methods: {
      onSlideStart(slide) {
        this.sliding = true
      },
      onSlideEnd(slide) {
        this.sliding = false
      },
      cardPackInfo() {
        eventBus.$emit("createCardName",this.cardPackName);
        eventBus.$emit("createCardContext",this.cardPackContext);
        eventBus.$emit("createCardHashtag",this.cardPackHashtag);
        // console.log(this.cardPackName);
      }
    },
    computed: {
      navigationNext: function() { return `<i class="fas fa-chevron-right fa-4x"></i>` },
      navigationPrev: function() { return `<i class="fas fa-chevron-left fa-4x"></i>` }
    }
  }
</script>

<style scoped>
.v-label {
  margin:0px;
  color: black;
}
</style>