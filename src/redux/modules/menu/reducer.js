import { produce } from "immer"

import * as types from "@/redux/mutation-types"

const menuState = {
  isCollapse: false,
  menuList: [],
}

const menu = (state = menuState, action) => {
  return produce(state, (draftState) => {
    switch (action.type) {
      case types.UPDATE_COLLAPSE:
        draftState.isCollapse = action.isCollapse
        break
      case types.SET_MENU_LIST:
        draftState.menuList = action.menuList
        break
      default:
        return draftState
    }
  })
}

export default menu
