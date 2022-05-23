import { $t } from "/@/plugins/i18n";
const Layout = () => import("/@/layout/index.vue");

const permissionRouter = {
  path: "/permission",
  component: Layout,
  redirect: "/permission/page/index",
  meta: {
    title: "menus.permission",
    icon: "lollipop",
    rank: 7
  },
  children: [
    {
      path: "/permission/page/index",
      name: "permissionPage",
      component: () => import("/@/views/permission/page/index.vue"),
      meta: {
        title: $t("menus.permissionPage")
      }
    },
    {
      path: "/permission/button/index",
      name: "permissionButton",
      component: () => import("/@/views/permission/button/index.vue"),
      meta: {
        title: $t("menus.permissionButton")
      }
    },
    {
      path: "/permission/test/index",
      name: "permissionTest",
      component: () => import("/@/views/permission/test/index.vue"),
      meta: {
        title: $t("menus.permissionTest")
      }
    }
  ]
};

export default permissionRouter;
