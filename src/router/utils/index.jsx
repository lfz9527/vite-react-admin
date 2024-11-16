import React, { lazy, Suspense } from "react"

/**
 * @description 路由懒加载
 * @param {String} Comp 需要访问的组件
 * @returns element
 */
const lazyLoad = (Comp) => {
  return (
    // @TODO 路由懒加载逻辑
    <Suspense fallback={"loading..."}>
      {React.createElement(lazy(Comp))}
    </Suspense>
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
