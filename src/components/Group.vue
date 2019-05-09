<template lang="html">
  <v-container style="max-width:98%">
    <v-layout pb-4 px-4 justify-end>
      <v-btn
        class="white--text font-weight-bold"
        color="#79b3bf"
        @click.native="modal = true"
      >그룹 생성</v-btn>
    </v-layout>
    <v-layout row>
      <v-flex
        v-for="i in groups.length"
        :key="(i-1)"
        px-4 pb-5
      >
        <v-card
          style="max-width:240px; border-radius:15px;"
        >
          <v-img
            :src="groups[i-1].src"
            contain
            width="240px"
            height="180px"
          ></v-img>
          <v-card-title
            primary-title
            style="background-color:#4f5d7e;"
            class="pt-3"
          >
            <v-layout
              column
              style="height:150px;"
            >
            <v-flex>
              <div class="headline font-weight-bold white--text ma-0">{{ groups[i-1].title }}</div>
              <div class="px-1 py-2 white--text font-weight-medium">{{ groups[i-1].context }}</div>
            </v-flex>
            <v-layout align-self-end>
              <v-flex>
                <v-btn color="#79b3bf" class="white--text font-weight-bold">자세히보기</v-btn>
              </v-flex>
              </v-layout>
            </v-layout>
          </v-card-title>
        </v-card>
      </v-flex>
      <v-flex
        v-for="i in (10-groups.length)"
        :key="(groups.length+i-1)"
        px-4 pb-5
      >

        <v-card
          style="max-width:240px; border-radius:15px;"
        >
          <v-img
            style="background-color:white;"
            contain
            width="240px"
            height="180px"
          ></v-img>
          <v-card-title
            primary-title
            style="background-color:#4f5d7e;"
            class="pt-3"
          >
            <v-layout
              column
            >
              <v-card height="150px" flat style="background-color:#4f5d7e;"></v-card>
            </v-layout>
          </v-card-title>
        </v-card>
      </v-flex>
    </v-layout>

    <mdb-modal :show="modal" @close="modal = false">
      <mdb-modal-header color="mdb-color">
        <mdb-modal-title><div class="font-weight-medium">그룹 생성</div></mdb-modal-title>
      </mdb-modal-header>
      <mdb-modal-body>
        <v-layout column>
          <v-flex lg5>
            <v-card flat>
              <v-card
                width="470px"
                height="240px"
                flat
                color="grey">
              </v-card>
              <v-flex py-3>
                <b-form-input
                  id="input-formatter"
                  v-model="text1"
                  :formatter="format"
                  placeholder="그룹 이름"
                  aria-describedby="input-formatter-help"
                  class="px-2 py-4"
                ></b-form-input>
              </v-flex>
              <v-flex>
                <b-form-textarea
                  id="textarea"
                  v-model="text2"
                  placeholder="그룹 설명"
                  rows="3"
                  max-rows="6"
                  class="px-2 py-2"
                ></b-form-textarea>
              </v-flex>
            </v-card>
          </v-flex>

        </v-layout>
      </mdb-modal-body>
      <mdb-modal-footer class="pa-1">
        <mdb-btn color="mdb-color" class="font-weight-medium">Next</mdb-btn>
      </mdb-modal-footer>
    </mdb-modal>

  </v-container>
</template>

<script>
  import { mdbModal, mdbModalHeader, mdbModalTitle, mdbModalBody, mdbModalFooter, mdbBtn } from 'mdbvue';

  export default {
    components: {
      mdbModal,
      mdbModalHeader,
      mdbModalTitle,
      mdbModalBody,
      mdbModalFooter,
      mdbBtn,
    },
    data() {
      return {
        text1: '',
        text2: '',
        modal: false,
        groups: [
          { title: '카루토모1', src: require('../assets/KARUTOMO_LOGO.png'), context: '모든 카루타를 좋아하는 그룹입니다! 어떠한 카드를 사용해도 좋습니다~' },
          { title: '카루토모2', src: require('../assets/KARUTOMO_LOGO.png'), context: '모든 카루타를 좋아하는 그룹입니다! 어떠한 카드를 사용해도 좋습니다~' },
          { title: '카루토모3', src: require('../assets/KARUTOMO_LOGO.png'), context: '모든 카루타를 좋아하는 그룹입니다! 어떠한 카드를 사용해도 좋습니다~' },
          { title: '카루토모4', src: require('../assets/KARUTOMO_LOGO.png'), context: '모든 카루타를 좋아하는 그룹입니다! 어떠한 카드를 사용해도 좋습니다~' },
          { title: '카루토모5', src: require('../assets/KARUTOMO_LOGO.png'), context: '모든 카루타를 좋아하는 그룹입니다! 어떠한 카드를 사용해도 좋습니다~' },
          { title: '카루토모6', src: require('../assets/KARUTOMO_LOGO.png'), context: '모든 카루타를 좋아하는 그룹입니다! 어떠한 카드를 사용해도 좋습니다~' },
          { title: '카루토모7', src: require('../assets/KARUTOMO_LOGO.png'), context: '모든 카루타를 좋아하는 그룹입니다! 어떠한 카드를 사용해도 좋습니다~' },
        ]
      }
    },
    methods: {
      format(value, event) {
        return value.toLawerCase()
      }
    }

  }

</script>

<style scoped>
/* .modal-content {
  width:600px !important;
} */
#t_area > .v-text-field__details {
  display: none !important;
}
</style>
