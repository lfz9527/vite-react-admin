import { lazyLoad } from "../utils/index"

import { LayoutIndex } from "@/router/constant"

// 首页
const pageRouter = [
  {
    element: <LayoutIndex />,
    children: [
      {
        path: "/page",
        element: lazyLoad(() => import("@/views/page")),
        meta: {
          requiresAuth: true,
          title: "其他页面",
          key: "page",
        },
      },
    ],
  },
]

export default pageRouter
