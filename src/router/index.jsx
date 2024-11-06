import { createHashRouter, Navigate, RouterProvider } from "react-router-dom"
import Login from "../views/login"

// * 导入所有router
const metaRouters = import.meta.glob("@/router/modules/*.jsx")

// * 处理路由
const moduleRouter = []
// * 遍历所有router，将其导出的路由添加到moduleRouter中
const generateModuleRouter = async () => {
  for (const key in metaRouters) {
    const metaRouter = metaRouters[key]
    const route = await metaRouter()
    const exportRoute = route.default
    if (!exportRoute) continue
    moduleRouter.push(...exportRoute)
  }
}
await generateModuleRouter()

const rootRouter = [
  {
    path: "/",
    element: <Navigate to="/login" />,
  },
  {
    path: "/login",
    element: <Login />,
    meta: {
      requiresAuth: false,
      title: "登录页",
      key: "login",
    },
  },
  ...moduleRouter,
  {
    path: "*",
    element: <Navigate to="/404" />,
  },
]
console.log("rootRouter", rootRouter)

const router = createHashRouter(rootRouter)

const createRouter = () => {
  return <RouterProvider router={router} />
}

export { createRouter, moduleRouter }
