import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import EverycardCollection from "./views/EverycardCollection.vue";
import MycardCollection from "./views/MycardCollection.vue";
import StorycardCollection from "./views/StorycardCollection.vue";
import Group from "./views/Group.vue";


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
    }
  ]
});
