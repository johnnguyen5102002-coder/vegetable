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
  }

  function toggleHidePwd() {
    setIsHide(!isHide)
  }

  return (
    <div className="login">
      <div className="overlay"></div>
      <div className="login-container">
        <h2>Đăng ký</h2>
        <form>
          <Input
            label={lang("login.userName")}
            id="username"
            type="text"
            placeholder={lang("login.placeUserName")}
          />

          <Input
            label={lang("login.password")}
            id="password"
            type={isHide ? "password" : "text"}
            placeholder={lang("login.placePassword")}
          >
            <div onClick={() => toggleHidePwd()}>
              {isHide ? (
                <VisibilityIcon sx={styleIcon} />
              ) : (
                <VisibilityOffIcon sx={styleIcon} />
              )}
            </div>
          </Input>

          <Input
            label={lang("login.password")}
            id="password"
            type={isHide ? "password" : "text"}
            placeholder={lang("login.placePassword")}
          >
            <div onClick={() => toggleHidePwd()}>
              {isHide ? (
                <VisibilityIcon sx={styleIcon} />
              ) : (
                <VisibilityOffIcon sx={styleIcon} />
              )}
            </div>
          </Input>

          <button type="submit" className="login-btn">
            Đăng ký
          </button>
          <div className="extra-links">
            <p>
              Bạn đã có tài khoản? <Link to="/login">Đăng nhập</Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login
