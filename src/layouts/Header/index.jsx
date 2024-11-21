import { Layout, theme } from "antd"
import AvatarContent from "./AvatarContent"

import "./index.less"

const { Header } = Layout

const HeaderIndex = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken()

  const headerStyle = {
    background: colorBgContainer,
    borderRadius: borderRadiusLG,
    padding: "0 20px",
  }

  return (
    <Header style={headerStyle}>
      <div className="header-l"></div>
      <div className="header-r">
        <AvatarContent />
      </div>
    </Header>
  )
}
export default HeaderIndex
