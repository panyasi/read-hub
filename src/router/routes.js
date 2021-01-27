import Topic from "@/views/Topic";
import Daily from "@/views/Daily";

export default [
  {
    path: "/",
    name: "Home",
    component: Topic,
    meta: {
      title: "产品深度精选 - 首页"
    }
  },
  {
    path: "/topic",
    name: "Topic",
    component: Topic,
    meta: {
      title: "产品深度精选 - 首页"
    }
  },
  {
    path: "/daily",
    name: "Daily",
    component: Daily,
    meta: {
      title: "产品深度精选 - 早报"
    }
  }
];
