import { createRouter, createWebHistory } from "vue-router";
import LandingPage from "@/views/LandingPage.vue";

// pages for logined member 
import ProfilePage from "@/views/manage/ProfilePage.vue";
import LearningList from "@/views/manage/LearningList.vue";
import TeachingList from "@/views/manage/TeachingList.vue";
import CourseAdd from "@/views/manage/CourseAdd.vue";
import CourseEdit from "@/views/manage/CourseEdit.vue";
import ChapterList from "@/views/manage/ChapterList.vue";
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: LandingPage,
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("@/views/AboutView.vue"),
    },
    {
      path: '/manage/profile',
      name: 'profilePage',
      component: ProfilePage,       
    },
    {
      path: '/manage/learning',
      name: 'learingList',
      component: LearningList,       
    },
    {
      path: '/manage/teaching',
      name: 'teachingList',
      component: TeachingList,       
    },
    {
      path: '/manage/courses/add',
      name: 'courseAdd',
      component: CourseAdd,       
    },
    {
      path: '/manage/courses/edit',
      name: 'courseEdit',
      component: CourseEdit,       
    },
    {
      path: '/manage/chapters/list',
      name: 'chapterList',
      component: ChapterList,       
    },
  ],
});

export default router;
