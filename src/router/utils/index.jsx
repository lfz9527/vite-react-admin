import { lazy, Suspense } from "react"

/**
 * @description 路由懒加载
 * @param {String} CompPath 需要访问的组件
 * @returns element
 */
const lazyLoad = (CompPath) => {
  return (
    // @TODO 路由懒加载逻辑
    <Suspense fallback={"loading..."}>{CompPath && lazy(() => import(CompPath))}</Suspense>
  )
}

/**
 * @description 路由守卫组件
 * */
const AuthRouter = (props) => {
  // @TODO 路由守卫逻辑
  return props.children
}

export { AuthRouter, lazyLoad }
