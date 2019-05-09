<template lang="html">
  <v-container style="max-width:100%">
    <v-layout
      column
      style="background-color:#757575"
    >
      <v-layout
        headline
        class="px-3 pt-3 white--text font-weight-bold"
      >
        그룹 상세보기
      </v-layout>
      <v-layout
        class="px-4 pb-4 pt-3"
      >
        <v-card
          width="432px"
          height="240px"
          flat
          color="grey"
        >
          <v-img
            :src="group.src"
            min-width="240px"
            aspect-ratio="1.8"
          >
          </v-img>
        </v-card>
        <v-layout column py-1 px-3>
          <v-flex pa-1 title font-weight-bold white--text>
            그룹 이름
          </v-flex>
          <v-flex py-1 px-4 subheading font-weight-bold white--text>
            {{ group.title }}
          </v-flex>
          <v-flex pa-1 title font-weight-bold white--text>
            그룹 소개
          </v-flex>
          <v-flex py-1 px-4 subheading font-weight-bold white--text>
            {{ group.context }}
          </v-flex>
          <v-flex pa-1 title font-weight-bold white--text>
            그룹 인원
          </v-flex>
          <v-flex py-1 px-4 subheading font-weight-bold white--text>
            {{ members.length }}
          </v-flex>
        </v-layout>
      </v-layout>
    </v-layout>

    <v-layout justify-center>
      <groupBoard style="max-width:95%"></groupBoard>
    </v-layout>

    <v-navigation-drawer
      :width="280"
      right
      app
      clipped
      fixed
      floating
      style="background-color:#fafafa"
    >
      <v-container py-3 pr-3 pl-1>
        <v-card style="height:600px;">
          <v-layout pa-2 column>
            <v-layout class="title font-weight-bold" pa-2>
              그룹 회원
            </v-layout>
            <v-layout>
              <v-layout column>
                <v-flex>
                  <b-form-input v-model="text" placeholder="Enter your name"></b-form-input>
                </v-flex>
                <v-layout
                  v-for="member in members"
                  px-3
                  py-2
                >
                  <v-flex pt-1>
                    <v-icon>people</v-icon>
                    <span class=" px-3 body-2 font-weight-medium">{{ member.name }}</span>
                  </v-flex>
                </v-layout>
              </v-layout>
            </v-layout>
          </v-layout>
        </v-card>
      </v-container>
    </v-navigation-drawer>

  </v-container>
</template>

<script>
import groupBoard from './groupBoard.vue';
export default {
  data() {
    return {
      text: '',
      group : { title: '카루토모1', src: require('../assets/빵.jpg'), context: '모든 카루타를 좋아하는 그룹입니다! 어떠한 카드를 사용해도 좋습니다~'},
      members : [
        { name: 'soso' },
        { name: 'hui' },
        { name: 'karutomo' },
        { name: '조로' },
        { name: '마르코' }
      ]
    }
  },
  components: {
    groupBoard
  }
}
</script>

<style scoped>
</style>
