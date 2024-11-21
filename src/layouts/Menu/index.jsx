// import React, { useEffect, useState } from "react"
// import { useLocation, useNavigate } from "react-router-dom"
import { Menu } from "antd"

import "./index.less"

const LayoutMenu = () => {
  return (
    <div className="menu">
      <Menu
        theme="dark"
        mode="inline"
        defaultSelectedKeys={["1"]}
        items={[
          {
            key: "1",

            label: "nav 1",
          },
          {
            key: "2",

            label: "nav 2",
          },
        ]}
      />
    </div>
  )
}

export default LayoutMenu
