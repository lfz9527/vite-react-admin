import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { Button, Checkbox, Flex, Form, Input } from "antd"

export default function Login() {
  const navigate = useNavigate()
  const [form] = Form.useForm()
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    remember: false,
  })

  useEffect(() => {
    const loginData = localStorage.getItem("loginData")
    if (loginData) {
      const data = JSON.parse(loginData)
      setFormData(data)
      form.setFieldsValue(data)
    }
  }, [])

  // 登录
  const handleSubmit = (param) => {
    console.log("param", param)

    const { remember } = param

    if (remember) {
      localStorage.setItem("loginData", JSON.stringify(param))
    } else {
      localStorage.removeItem("userInfo")
    }

    navigate("/home", { replace: true })
  }

  // 忘记密码
  const forgetPassword = () => {
    alert("忘记密码")
  }

  return (
    <div className="login-container w-full h-screen bg-[#f4f6f9] flex justify-center items-center ">
      <div className="form-card-wrap shadow-card">
        <div className="bg-white  p-[30px] w-[450px]">
          <h1 className="text-[#222222] text-[24px] font-bold mb-[20px] text-center">
            登录
          </h1>
          <Form
            layout="vertical"
            form={form}
            name="login-form"
            size="large"
            initialValues={formData}
            autoComplete="off"
            onFinish={handleSubmit}
          >
            <Form.Item
              name="username"
              label="用户名"
              rules={[{ required: true, message: "请输入用户名" }]}
            >
              <Input placeholder="请输入用户名" />
            </Form.Item>
            <Form.Item
              label="密码"
              name="password"
              rules={[{ required: true, message: "请输入密码" }]}
            >
              <Input type="password" placeholder="请输入密码" />
            </Form.Item>

            <Form.Item>
              <Flex justify="space-between" align="center">
                <Form.Item name="remember" valuePropName="checked" noStyle>
                  <Checkbox>记住密码</Checkbox>
                </Form.Item>
                <span
                  className="text-[#1677ff] cursor-pointer"
                  onClick={forgetPassword}
                >
                  忘记密码？
                </span>
              </Flex>
            </Form.Item>
            <Form.Item>
              <Button block type="primary" htmlType="submit">
                登录
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </div>
  )
}
