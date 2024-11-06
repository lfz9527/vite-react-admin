import { lazyLoad } from "../utils/index"

import { LayoutIndex } from "@/router/constant"

// 首页
const homeRouter = [
  {
    element: <LayoutIndex />,
    children: [
      {
        path: "/home",
        element: lazyLoad(() => import("@/views/home")),
        meta: {
          requiresAuth: true,
          title: "首页",
          key: "home",
        },
      },
    ],
  },
]

export default homeRouter
