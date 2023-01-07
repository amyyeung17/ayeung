import NotFound from './components/NotFound.vue'
import MainBody from './components/MainBody.vue'
import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: MainBody
    }/*, 
    {
      path: "/:noPage(.*)",
      name: "notfound",
      component: NotFound
    }*/
  ],
  scrollBehavior (to, _, savedPosition) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        /*if (savedPosition) {
          location.href = '/'
          return savedPosition
        }*/
        if (to.hash && document.querySelector(to.hash)) {
          resolve( {
            el: to.hash,
            behavior: 'smooth'
          });
        }
        resolve({ x: 0, y: 0 })
      }, 100)
    })
  }
});

export default router;