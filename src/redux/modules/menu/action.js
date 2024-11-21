import * as types from "@/redux/mutation-types"

// 更新菜单展开和收起
export const updateCollapse = (isCollapse) => ({
  type: types.UPDATE_COLLAPSE,
  isCollapse,
})

// 设置菜单列表
export const setMenuList = (menuList) => ({
  type: types.SET_MENU_LIST,
  menuList,
})
