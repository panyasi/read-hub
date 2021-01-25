import Vue from "vue";
import VueRouter from "vue-router";
import routes from "./routes";
import NProgress from "nprogress";
import "nprogress/nprogress.css";
// import Store from "@/store/index";
// import Cookie from "js-cookie";

Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});
router.firstInit = false;

router.beforeEach(async (to, from, next) => {
  NProgress.start();
  if (to.meta.title) document.title = to.meta.title;
  try {
    next();
  } catch {
    next();
  }
});

router.afterEach(() => {
  NProgress.done();
});

export default router;
