import { createRouter, createWebHistory } from "vue-router";
import VuelidateFormDemo from "./VuelidateFormDemo.vue"

export const router = createRouter({
  history: createWebHistory(),
  routes: [{ path: "/", component: VuelidateFormDemo }]
});