import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { Box, Button, Checkbox, FormControl, FormControlLabel, FormHelperText, TextField } from "@mui/material"

export default function Login() {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({ username: "", password: "" })
  const [errors, setErrors] = useState({ username: false, password: false })
  const [rememberMe, setRememberMe] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()

    // 简单的表单验证
    const newErrors = { username: !formData.username, password: !formData.password }
    setErrors(newErrors)

    // 如果没有错误，进行提交
    if (!newErrors.name && !newErrors.email) {
      navigate("/home", { replace: true })
    }
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }
  const handleRememberMeChange = (e) => {
    setRememberMe(e.target.checked)
  }

  return (
    <div className="login-container w-full h-screen bg-[#f4f6f9] flex justify-center items-center ">
      <div className="form-card-wrap shadow-card">
        <Box
          component="form"
          autoComplete="off"
          onSubmit={handleSubmit}
          sx={{
            width: 500,
            padding: 3,
            borderRadius: 2,
            bgcolor: "#fff",
          }}
        >
          <FormControl fullWidth error={errors.username} margin="dense">
            <TextField label="账号" name="username" value={formData.username} onChange={handleChange} required size="small" />
            {errors.username && <FormHelperText>必填项</FormHelperText>}
          </FormControl>
          <FormControl fullWidth error={errors.password} margin="normal">
            <TextField label="密码" name="password" value={formData.password} onChange={handleChange} required size="small" />
            {errors.password && <FormHelperText>必填项</FormHelperText>}
          </FormControl>
          <FormControlLabel control={<Checkbox size="small" checked={rememberMe} onChange={handleRememberMeChange} color="primary" />} label="记住密码" />
          <Button type="submit" variant="contained" size="large" fullWidth>
            登 录
          </Button>
        </Box>
      </div>
    </div>
  )
}
