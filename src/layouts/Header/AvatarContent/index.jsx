import { useNavigate } from "react-router-dom"
import { Avatar, Dropdown, message, Modal } from "antd"

import avatarImage from "@/assets/images/avatar.png"

const AvatarIndex = () => {
  const navigate = useNavigate()

  const logout = () => {
    Modal.confirm({
      title: "温馨提示 🧡",
      content: "是否确认退出登录？",
      okText: "确认",
      cancelText: "取消",
      onOk: () => {
        message.success("退出登录成功！")
        navigate("/login", {
          replace: true,
        })
      },
    })
  }

  const items = [
    {
      key: "4",
      label: <span className="dropdown-item">退出登录</span>,
      onClick: logout,
    },
  ]

  return (
    <Dropdown menu={{ items }} placement="bottom" arrow trigger={["click"]}>
      <Avatar style={{ cursor: "pointer" }} size="large" src={avatarImage} />
    </Dropdown>
  )
}

export default AvatarIndex
