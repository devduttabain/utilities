import { createApp } from "vue";
import { createWebHistory, createRouter } from "vue-router";
import uaParser from "ua-parser-js";

import './css/index.css';

// views

import Landing from './views/Landing.vue'
import Courses from './views/Courses.vue'
import CourseDetails from './views/CourseDetails.vue'


// styles

// import "font-awesome/css/font-awesome.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

// mouting point for the whole app

import App from "@/App.vue";

// routes

const routes = [
  {
    // path: "/landing",
    path: "/",
    component: Landing,
  },
  {
    path: "/courses",
    component: Courses,
  },
  {
    path: "/courses/:id",
    component: CourseDetails,
  },
  // { path: "/:pathMatch(.*)*", redirect: "/landing" },
  { path: "/:pathMatch(.*)*", redirect: "/" },
];


const router = createRouter({
  history: createWebHistory(),
  routes,
});

createApp(App)
  .use(router)
  .use(uaParser)
  .mount("#app");
