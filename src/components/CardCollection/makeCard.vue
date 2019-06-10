<template lang="html">
  <v-container style="max-width:100%;">
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
        {{ card.title }}
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
    <v-layout
      row
    >
    <v-flex
      v-for="i in 30"
      :key="i"
      class="px-2"
    >
      <mdb-btn
        outline="mdb-color"
        class="py-5 ma-2"
        @click.native="modal = true"
        style="width:200px; height:280px;"
      >
        <span class="py-1">
          <span class="px-1 py-5">
            <v-icon x-large class="pa-5">
              add
            </v-icon>
          </span>
        </span>
      </mdb-btn>
    </v-flex>
    </v-layout>

    <!-- 카드 제작 모달창 -->
    <mdb-modal :show="modal" size="lg" @close="modal = false">
      <mdb-modal-header color="mdb-color">
        <mdb-modal-title><div class="font-weight-medium">카드 제작</div></mdb-modal-title>
      </mdb-modal-header>
      <mdb-modal-body>
        <v-layout>
          <v-flex lg6>
            <v-card flat>
              <v-flex>
                <b-form-checkbox
                  id="edgeCheckBox"
                  v-model="edgeCheck"
                  name="edgeCheckBox"
                  value="edgeChecked"
                  unchecked-value="edgeUnchecked"
                  class="subheading font-weight-regular"
                  @change="edgeStyleCheck()"
                >
                  테두리
                </b-form-checkbox>
                <v-btn-toggle
                  class="pa-2"
                  v-model="edgeColor"
                  @change="edgeColorCheck()"
                >
                  <v-btn flat color="success" value="green">
                    <v-icon>format_color_fill</v-icon>
                  </v-btn>
                  <v-btn flat color="error" value="red">
                    <v-icon>format_color_fill</v-icon>
                  </v-btn>
                  <v-btn flat color="warning" value="orange">
                    <v-icon>format_color_fill</v-icon>
                  </v-btn>
                  <v-btn flat color="info" value="blue">
                    <v-icon>format_color_fill</v-icon>
                  </v-btn>
                </v-btn-toggle>
              </v-flex>
              <v-flex>
                <b-form-checkbox
                  id="circleCheckBox"
                  v-model="circleCheck"
                  name="circleCheckBox"
                  value="circleChecked"
                  unchecked-value="circleUnchecked"
                  class="subheading font-weight-regular"
                  @change="circleStyleCheck()"
                >
                  대표 문자
                </b-form-checkbox>
                <v-flex pa-1>
                  <b-form-input
                    id="input-formatter"
                    v-model="leaderText"
                    placeholder="대표문자"
                    aria-describedby="input-formatter-help"
                    class="px-2 py-4"
                  ></b-form-input>
                </v-flex>
                <v-btn-toggle
                  class="pa-2"
                  v-model="circleColor"
                  @change="circleColorCheck()"
                >
                  <v-btn flat color="success" value="green">
                    <v-icon>format_color_fill</v-icon>
                  </v-btn>
                  <v-btn flat color="error" value="red">
                    <v-icon>format_color_fill</v-icon>
                  </v-btn>
                  <v-btn flat color="warning" value="orange">
                    <v-icon>format_color_fill</v-icon>
                  </v-btn>
                  <v-btn flat color="info" value="blue">
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
                    placeholder="음성파일"
                    aria-describedby="input-formatter-help"
                    class="px-2 py-4"
                  ></b-form-input>
                </v-flex>
                <v-flex pa-1>
                  <b-form-input
                    id="input-formatter"
                    v-model="soundText"
                    placeholder="텍스트"
                    aria-describedby="input-formatter-help"
                    class="px-2 py-4"
                  ></b-form-input>
                </v-flex>
              </v-flex>
            </v-card>
          </v-flex>
          <v-flex ml-4 wrap>
              <v-img
                  :src= image.dataUrl
                  v-bind:style="{ border: edgeStyle }"
                  class="mx-3"
                  style="width:230px; height:328px; backgroundColor:#C0C0C0;"
              >
              <div
                style="width:60px; height:60px; border-radius:100%; position:absolute; top:15px; right:15px;"
                v-bind:style="{ backgroundColor: circleStyle }"  
              >
                <v-flex class="white--text font-weight-black" style="font-size: 50px; position:absolute; top:-5px; left:5px;">{{ leaderText }}</v-flex>
              </div>
              </v-img>
            <image-uploader
                :preview="false"
                :className="['fileinput', { 'fileinput--loaded': hasImage }]"
                capture="environment"
                :debug="1"
                :autoRotate="true"
                outputFormat="verbose"
                @input="setImage"
                class="pt-1"
            >
            </image-uploader>
          </v-flex>
        </v-layout>
      </mdb-modal-body>
      <mdb-modal-footer class="pa-1">
        <v-btn color="mdb-color" class="font-weight-medium white--text">Next</v-btn>
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
        leaderText: '',
        circleDisplay: 'none',
        circleColor: 'black',
        circleStyle: '',
        circleCheck: 'circleUnchecked',
        edgeColor: '',
        edgeStyle: '',
        edgeCheck: 'edgeUnchecked',
        hasImage: '',
        image: '',
        soundCheck:'',
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
    methods: {
      setImage (file) {
        this.hasImage = true
        this.image = file
        console.log(file)
      },
      edgeStyleCheck() {
        console.log(this.edgeCheck)
        if(this.edgeCheck == 'edgeChecked'){
          console.log('none');
          this.edgeStyle = '';
        }else if(this.edgeCheck == 'edgeUnchecked'){
          console.log('style');
          this.edgeStyle = '15px solid black';
        }
      },
      edgeColorCheck() {
        console.log(this.edgeColor)
        if(this.edgeColor == 'green'){
           this.edgeStyle = '15px solid #4caf50'
        }else if(this.edgeColor == 'red'){
           this.edgeStyle = '15px solid #ff5252'
        }else if(this.edgeColor == 'orange'){
           this.edgeStyle = '15px solid #fb8c00'
        }else if(this.edgeColor == 'blue'){
           this.edgeStyle = '15px solid #2196f3'          
        }
      },
      circleStyleCheck() {
        console.log(this.circleCheck)
        if(this.circleCheck == 'circleChecked'){
          console.log('none')
          this.circleDisplay = 'none';
        }else if(this.circleCheck == 'circleUnchecked'){
          console.log('style')
          this.circleDisplay = "inline"
          this.circleStyle = "black"
        }
      },
      circleColorCheck() {
        console.log(this.circleColor)
        if(this.circleColor == 'green'){
          this.circleStyle = '#4caf50'
        }else if(this.circleColor == 'red'){
          this.circleStyle = '#ff5252'
        }else if(this.circleColor == 'orange'){
          this.circleStyle = '#fb8c00'
        }else if(this.circleColor == 'blue'){
          this.circleStyle = '#2196f3'          
        }
      }
    },
    created() {
    //   eventBus.$on("createCardName", (name) => {
    //     this.cardPackName = name;
    //   })
    //   eventBus.$on("createCardContext",(context) => {
    //     this.cardPackContext = context;
    //   })
    //   eventBus.$on("createCardHashtag",(hashtag) => {
    //     this.cardPackHashtag = hashtag;
    //   })
    //   console.log(this.cardPackName)
    }
  }
</script>

<style scoped>
.v-btn-toggle--selected {
  box-shadow: none;
}
</style>
