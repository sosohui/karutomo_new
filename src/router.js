import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import EverycardCollection from "./components/CardCollection/EverycardCollection.vue";
import MycardCollection from "./components/CardCollection/MycardCollection.vue";
import StorycardCollection from "./components/CardCollection/StorycardCollection.vue";
import Group from "./components/Group.vue";
// import DetailCard from "./components/CardCollection/imageUploader.vue";
import DetailCard from "./components/CardCollection/detailCard.vue"; 
import SelectedGroup from "./components/selectedGroup.vue"
import MakeCard from "./components/CardCollection/makeCard.vue"
import Score from "./components/Score.vue"

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/home",
      name: "home",
      component: Home
    },
    {
      path: "/mycardCollection",
      name: "mycardCollection",
      component: MycardCollection
    },
    {
      path: "/everycardCollection",
      name: "everycardCollection",
      component: EverycardCollection
    },
    {
      path: "/storycardCollection",
      name: "storycardCollection",
      component: StorycardCollection
    },
    {
      path: "/group",
      name: "group",
      component: Group
    },
    {
      path: "/detailCard",
      name: "detailCard",
      component: DetailCard
    },
    {
      path: "/selectedGroup",
      name: "selectedGroup",
      component: SelectedGroup
    },
    {
      path: "/makeCard",
      name: "makeCard",
      component: MakeCard
    },
    {
      path: "/score",
      name: "score",
      component: Score
    },
  ]
});