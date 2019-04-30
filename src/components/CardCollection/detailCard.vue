<template lang="html">
  <v-container>
    <v-navigation-drawer
      :width="310"
      fixed
      clipped
      app
      right
      class="blue-grey darken-3"
    >
    <v-layout
      column
    >
      <div
        class="
          headline
          text-md-center
          font-weight-bold
          pa-3
          white--text

        "
      >
        카드 정보 보기
      </div>
      <b-img
        :src="card.src"
        center
        contain
        width="200px"
        height="280px"
      ></b-img>
      <div
        class="
          title
          text-md-center
          pa-3
          font-weight-medium
          white--text
        "
      >
        {{ cardPackName }}
      </div>
      <div
        class="
          subheading
          text-md-center
          pa-2
          font-weight-medium
          white--text
        "
      >
        {{ card.context }}
      </div>
      <v-layout
        justify-center
      >
        <v-btn
          color="#368D9C"
          class="white--text"
        >
          Primary
        </v-btn>
      </v-layout>
    </v-layout>
    </v-navigation-drawer>
    <span
      v-for="i in 30"
      :key="i"
    >
      <mdb-btn
        outline="mdb-color"
        class="py-5 ma-2"
        @click.native="modal = true"
      >
        <span class="py-">
          <span class="px-1 py-5">
            <v-icon x-large class="pa-5">
              add
            </v-icon>
          </span>
        </span>
      </mdb-btn>
    </span>

    <!-- 카드 제작 모달창 -->
    <mdb-modal :show="modal" @close="modal = false">
      <mdb-modal-header color="mdb-color">
        <mdb-modal-title><div class="font-weight-medium">카드 제작</div></mdb-modal-title>
      </mdb-modal-header>
      <mdb-modal-body>
        <v-layout>
          <v-flex lg6>
            <v-card flat>
              <v-flex>
                <b-form-checkbox
                  id="checkbox-1"
                  v-model="edgeCheck"
                  name="checkbox-1"
                  value="accepted"
                  unchecked-value="not_accepted"
                  class="subheading font-weight-regular"
                >
                  테두리
                </b-form-checkbox>
                <v-btn-toggle
                  class="pa-2"
                >
                  <v-btn flat color="success">
                    <v-icon>format_color_fill</v-icon>
                  </v-btn>
                  <v-btn flat color="error">
                    <v-icon>format_color_fill</v-icon>
                  </v-btn>
                  <v-btn flat color="warning">
                    <v-icon>format_color_fill</v-icon>
                  </v-btn>
                  <v-btn flat color="info">
                    <v-icon>format_color_fill</v-icon>
                  </v-btn>
                </v-btn-toggle>
              </v-flex>
              <v-flex>
                <b-form-checkbox
                  id="checkbox-1"
                  v-model="leaderCheck"
                  name="checkbox-1"
                  value="accepted"
                  unchecked-value="not_accepted"
                  class="subheading font-weight-regular"
                >
                  대표 문자
                </b-form-checkbox>
                <v-flex pa-1>
                  <b-form-input
                    id="input-formatter"
                    v-model="leader"
                    :formatter="format"
                    placeholder="대표문자"
                    aria-describedby="input-formatter-help"
                    class="px-2 py-4"
                  ></b-form-input>
                </v-flex>
                <v-btn-toggle
                  class="pa-2"
                >
                  <v-btn flat color="success">
                    <v-icon>format_color_fill</v-icon>
                  </v-btn>
                  <v-btn flat color="error">
                    <v-icon>format_color_fill</v-icon>
                  </v-btn>
                  <v-btn flat color="warning">
                    <v-icon>format_color_fill</v-icon>
                  </v-btn>
                  <v-btn flat color="info">
                    <v-icon>format_color_fill</v-icon>
                  </v-btn>
                </v-btn-toggle>
              </v-flex>
              <v-flex>
                <b-form-checkbox
                  id="checkbox-1"
                  v-model="soundCheck"
                  name="checkbox-1"
                  value="accepted"
                  unchecked-value="not_accepted"
                  class="subheading font-weight-regular"
                >
                  음성파일
                </b-form-checkbox>
                <v-flex pa-1>
                  <b-form-input
                    id="input-formatter"
                    v-model="sound"
                    :formatter="format"
                    placeholder="음성파일"
                    aria-describedby="input-formatter-help"
                    class="px-2 py-4"
                  ></b-form-input>
                </v-flex>
                <v-flex pa-1>
                  <b-form-input
                    id="input-formatter"
                    v-model="soundText"
                    :formatter="format"
                    placeholder="텍스트"
                    aria-describedby="input-formatter-help"
                    class="px-2 py-4"
                  ></b-form-input>
                </v-flex>
              </v-flex>
            </v-card>
          </v-flex>
          <v-flex ml-4 wrap>
            <v-card width="230px" height="328px" flat color="grey"></v-card>
          </v-flex>
        </v-layout>
      </mdb-modal-body>
      <mdb-modal-footer class="pa-1">
        <mdb-btn color="mdb-color" class="font-weight-medium">Next</mdb-btn>
      </mdb-modal-footer>
    </mdb-modal>
    <!-- 모달창 끝 -->

  </v-container>
</template>

<script>
import { eventBus } from '../../main';
import { mdbModal, mdbModalHeader, mdbModalTitle, mdbModalBody, mdbModalFooter, mdbBtn } from 'mdbvue';
  export default {
    components: {
      mdbModal,
      mdbModalHeader,
      mdbModalTitle,
      mdbModalBody,
      mdbModalFooter,
      mdbBtn
    },
    data() {
      return {
        soundCheck:'',
        edgeCheck: '',
        leaderCheck: '',
        leader:'',
        sound:'',
        soundText:'',
        cardPackName:'',
        cardPackContext:'',
        cardPackHashtag: '',
        modal: false,
        card: {
            title: '에이스 카루타', src: require('../../assets/에이스.jpg'), context: '원피스 캐릭터 에이스 카루타입니다', hits: 30, flex: 4.5,
            hash: ["#aa", "#bb"]
          },
        // tag를 어떻게 처리할까......................
      }
    },
    created() {
      eventBus.$on("createCardName", (name) => {
        this.cardPackName = name;
      })
      eventBus.$on("createCardContext",(context) => {
        this.cardPackContext = context;
      })
      eventBus.$on("createCardHashtag",(hashtag) => {
        this.cardPackHashtag = hashtag;
      })
      console.log(this.cardPackName)
    }
  }
</script>

<style scoped>
.v-btn-toggle--selected {
  box-shadow: none;
}
</style>
