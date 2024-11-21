import { useState } from "react"
import { Outlet } from "react-router-dom"
import { Layout, theme } from "antd"
import Header from "./Header"
import Menu from "./Menu"

const { Sider, Content } = Layout

import "./index.less"

const LayoutIndex = () => {
  const [collapsed] = useState(false)
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken()

  return (
    <Layout className="layout-container">
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <Menu />
      </Sider>
      <Layout>
        <Header />
        <Content
          style={{
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
          <Outlet></Outlet>
        </Content>
      </Layout>
    </Layout>
  )
}

export default LayoutIndex
