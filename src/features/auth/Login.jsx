import Input from "../../components/Input"
import { lang } from "../../locales/i18n"
import { VisibilityIcon, VisibilityOffIcon } from "../../assets/icons/index"
import { useState } from "react"
import { Link } from "react-router"

const Login = () => {
  const [isHide, setIsHide] = useState(true)

  const styleIcon = {
    position: "absolute",
    bottom: 8,
    right: 10,
    cursor: "pointer",
    fontSize: 20,
  }

  function toggleHidePwd() {
    setIsHide(!isHide)
  }

  return (
    <div className="auth">
      <div className="overlay"></div>
      <div className="auth-container">
        <h2>Đăng nhập</h2>
        <form>
          <Input
            label={lang("login.USERNAME")}
            id="username"
            type="text"
            placeholder={lang("login.PLACE_USERNAME")}
          />

          <Input
            label={lang("login.PASSWORD")}
            id="password"
            type={isHide ? "password" : "text"}
            placeholder={lang("login.PLACE_PASSWORD")}
          >
            <div onClick={() => toggleHidePwd()}>
              {isHide ? (
                <VisibilityIcon sx={styleIcon} />
              ) : (
                <VisibilityOffIcon sx={styleIcon} />
              )}
            </div>
          </Input>

          <button type="submit" className="auth-btn">
            Đăng nhập
          </button>
          <div className="extra-links">
            <p>
              <a href="#">Quên mật khẩu?</a>
            </p>
            <p>
              Chưa có tài khoản? <Link to="/register">Đăng ký</Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login
