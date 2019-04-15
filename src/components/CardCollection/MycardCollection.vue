<template>
  <v-container>

    <cardSelect></cardSelect>
    <div class="m-3">
      <div class="title font-weight-black">내가 제작한 카드</div>
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
      <!-- 카드 추가를 위한 버튼 -->
      <slide
        class="pl-3"
      >
        <span>
          <mdb-btn
            outline="mdb-color"
            class="py-4 mt-1 ml-2"
            @click.native="modal = true"
          >
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

    <mdb-modal :show="modal" @close="modal = false">
      <mdb-modal-header>
        <mdb-modal-title>Modal title</mdb-modal-title>
      </mdb-modal-header>
      <mdb-modal-body>...</mdb-modal-body>
      <mdb-modal-footer>
        <mdb-btn color="secondary" @click.native="modal = false">Close</mdb-btn>
        <mdb-btn color="primary">Save changes</mdb-btn>
      </mdb-modal-footer>
    </mdb-modal>

    <div class="m-3">
      <div class="title font-weight-black">내가 제작한 카드</div>
    </div>
    <v-flex xs12>
        <v-container
          fluid
          grid-list-md
          class="pt-0"
        >
          <v-layout
            row
            wrap
          >
            <v-flex
              v-for="card in cards"
              :key="card.title"
              v-bind="{ [`xs${card.flex}`]: true }"
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
          </v-layout>
        </v-container>
      </v-flex>



      <div>
        <b-button v-b-toggle.collapse-1 variant="primary">Toggle Collapse</b-button>
        <b-collapse id="collapse-1" class="mt-2">
          <b-card>
            <p class="card-text">Collapse contents Here</p>

          </b-card>
        </b-collapse>
      </div>


  </v-container>
</template>

<script>
  import { mdbModal, mdbModalHeader, mdbModalTitle, mdbModalBody, mdbModalFooter, mdbBtn } from 'mdbvue';
  import cardSelect from '../cardSelection.vue';
  import { Carousel, Slide } from 'vue-carousel';
  import makeCardModal from '../Modal/makeCard_Modal.vue'
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
      Slide,
      makeCardModal
    },
    data() {
      return {
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
    },
    computed: {
      navigationNext: function() { return `<i class="fas fa-chevron-right fa-4x"></i>` },
      navigationPrev: function() { return `<i class="fas fa-chevron-left fa-4x"></i>` }
    }
  }
</script>

<style>

</style>
