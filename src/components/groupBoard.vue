<template lang="html">
  <v-container pa-0 ma-1>
    <v-layout class="headline font-weight-bold" pb-3 pt-4>그룹 게시판</v-layout>
    <div>
      <v-data-table
        :headers="headers"
        :items="boards"
        :search="search"
        hide-actions
        :pagination.sync="pagination"
        class="elevation-1"
      >
        <template v-slot:items="props">
          <td class="subheading">{{ props.item.num }}</td>
          <td class="text-xs-center subheading">{{ props.item.title }}</td>
          <td class="text-xs-center subheading">{{ props.item.writer }}</td>
          <td class="text-xs-center subheading">{{ props.item.date }}</td>
        </template>
      </v-data-table>
      <div class="text-xs-center pt-2">
        <v-pagination v-model="pagination.page" :length="pages"></v-pagination>
      </div>
    </div>
  </v-container>
</template>

<script>
  export default {
    data() {
      return {
        search: '',
        pagination: {},
        selected: [],
        headers: [
          {
            text: 'No.',
            align: 'left',
            sortable: false,
            value: 'num'
          },
          {
            text: 'Title',
            value: 'title',
            align: 'center',
            sortable: false,
          },
          {
            text: 'Writer',
            value: 'writer',
            align: 'center',
            sortable: false,
          },
          {
            text: 'Date',
            value: 'date',
            align: 'center',
            sortable: false,
          },
        ],
        boards: [
          {
            num: '1',
            title: '원피스 카루타 공략법 알려드립니다',
            writer: '조로',
            date: '2019-04-29'
          },
          {
            num: '2',
            title: '마르코는 9살 카드 제작하면 어떨까요?',
            writer: '마르코',
            date: '2019-04-29'
          },
        ],
        desserts: [
          {
            name: 'Frozen Yogurt',
            calories: 159,
            fat: 6.0,
            carbs: 24,
            protein: 4.0,
            iron: '1%'
          },
          {
            name: 'Ice cream sandwich',
            calories: 237,
            fat: 9.0,
            carbs: 37,
            protein: 4.3,
            iron: '1%'
          },
          {
            name: 'Eclair',
            calories: 262,
            fat: 16.0,
            carbs: 23,
            protein: 6.0,
            iron: '7%'
          },
          {
            name: 'Cupcake',
            calories: 305,
            fat: 3.7,
            carbs: 67,
            protein: 4.3,
            iron: '8%'
          },
          {
            name: 'Gingerbread',
            calories: 356,
            fat: 16.0,
            carbs: 49,
            protein: 3.9,
            iron: '16%'
          },
          {
            name: 'Jelly bean',
            calories: 375,
            fat: 0.0,
            carbs: 94,
            protein: 0.0,
            iron: '0%'
          },
          {
            name: 'Lollipop',
            calories: 392,
            fat: 0.2,
            carbs: 98,
            protein: 0,
            iron: '2%'
          },
          {
            name: 'Honeycomb',
            calories: 408,
            fat: 3.2,
            carbs: 87,
            protein: 6.5,
            iron: '45%'
          },
        ]
      }
    },
    computed: {
      pages () {
        if (this.pagination.rowsPerPage == null || this.pagination.totalItems == null) return 0

        return Math.ceil(this.pagination.totalItems / this.pagination.rowsPerPage)
      }
    }
  }
</script>

<style scoped>

</style>
