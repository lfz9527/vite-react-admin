import React, { useEffect, useState } from "react"
import { useLocation, useNavigate } from "react-router-dom"
import * as Icons from "@ant-design/icons"
import { Menu } from "antd"

import "./index.less"
import { getOpenKeys, searchRoute } from "@/utils/index"

const testMenus = [
  {
    icon: "AreaChartOutlined",
    path: "/home",
    title: "首页",
  },
]

const LayoutMenu = () => {
  const { pathname } = useLocation()
  const [selectedKeys, setSelectedKeys] = useState([pathname])
  const [openKeys, setOpenKeys] = useState([])
  const [menuList, setMenuList] = useState([])

  console.log("openKeys", openKeys)
  // 刷新页面菜单保持高亮
  useEffect(() => {
    setSelectedKeys([pathname])
    // isCollapse ? null : setOpenKeys(getOpenKeys(pathname))
    // console.log("getOpenKeys(pathname)", getOpenKeys(pathname))
    setOpenKeys(getOpenKeys(pathname))
  }, [pathname])

  // 点击当前菜单跳转页面
  const navigate = useNavigate()
  const clickMenu = ({ key }) => {
    const route = searchRoute(key, testMenus)
    if (route.isLink) window.open(route.isLink, "_blank")
    navigate(key)
  }

  // 设置当前展开的 subMenu
  const onOpenChange = (openKeys) => {
    if (openKeys.length === 0 || openKeys.length === 1)
      return setOpenKeys(openKeys)
    const latestOpenKey = openKeys[openKeys.length - 1]
    if (latestOpenKey.includes(openKeys[0])) return setOpenKeys(openKeys)
    setOpenKeys([latestOpenKey])
  }

  // 动态渲染 Icon 图标
  const customIcons = Icons
  const addIcon = (name) => {
    return React.createElement(customIcons[name])
  }

  const getItem = (label, key, icon, children, type) => ({
    key,
    icon,
    children,
    label,
    type,
  })

  // 模拟处理后台返回菜单 key 值为 antd 菜单需要的 key 值
  const deepLoopFloat = (menuList, newArr = []) => {
    menuList.forEach((item) => {
      // 下面判断代码解释 *** !item?.children?.length   ==>   (!item.children || item.children.length === 0)
      if (!item?.children?.length) {
        return newArr.push(getItem(item.title, item.path, addIcon(item.icon)))
      }
      newArr.push(
        getItem(
          item.title,
          item.path,
          addIcon(item.icon),
          deepLoopFloat(item.children),
        ),
      )
    })
    return newArr
  }

  const getMenuData = () => {
    setMenuList(deepLoopFloat(testMenus))
  }

  useEffect(() => {
    getMenuData()
  }, [])

  return (
    <div className="menu">
      <Menu
        theme="dark"
        mode="inline"
        triggerSubMenuAction="click"
        openKeys={openKeys}
        selectedKeys={selectedKeys}
        items={menuList}
        onClick={clickMenu}
        onOpenChange={onOpenChange}
      ></Menu>
    </div>
  )
}

export default LayoutMenu
