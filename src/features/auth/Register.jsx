import Input from "../../components/Input"
import { lang } from "../../locales/i18n"
import { VisibilityIcon, VisibilityOffIcon } from "../../assets/icons/index"
import { useState } from "react"
import { Link } from "react-router"

const Login = () => {
  const [isShowPwd, setIsShowPwd] = useState(true)
  const [isShowPwdMatch, setIsShowPwdMatch] = useState(true)

  const styleIcon = {
    position: "absolute",
    bottom: 8,
    right: 10,
    cursor: "pointer",
    fontSize: 20,
  }

  function toggleShowPwd() {
    setIsShowPwd(!isShowPwd)
  }

  function toggleShowPwdMatch() {
    setIsShowPwdMatch(!isShowPwdMatch)
  }

  return (
    <div className="auth">
      <div className="overlay"></div>
      <div className="auth-container register-container">
        <h2>Đăng ký</h2>
        <form>
          <Input
            label="Họ và tên"
            id="username"
            type="text"
            placeholder="Nhập họ và tên"
            style={{ flex: 1 }}
          />

          <div style={{ display: "flex", columnGap: 10 }}>
            <Input
              label={lang("login.PHONE_NUMBER")}
              id="phonenumber"
              type="text"
              placeholder={lang("login.PLACE_PHONE_NUMBER")}
              style={{ flex: 1 }}
            />
            <Input
              label={lang("login.EMAIL")}
              id="email"
              type="text"
              placeholder={lang("login.PLACE_EMAIL")}
              style={{ flex: 1 }}
            />
          </div>

          <Input
            label={lang("login.ADDRESS")}
            id="address"
            type="text"
            placeholder={lang("login.PLACE_ADDRESS")}
            style={{ flex: 1 }}
          />

          <Input
            label={lang("login.USERNAME")}
            id="username"
            type="text"
            placeholder={lang("login.PLACE_USERNAME")}
          />

          <div style={{ display: "flex", columnGap: 10 }}>
            <Input
              label={lang("login.PASSWORD")}
              id="password"
              type={isShowPwd ? "password" : "text"}
              placeholder={lang("login.PLACE_PASSWORD")}
              style={{ flex: 1 }}
            >
              <div onClick={() => toggleShowPwd()}>
                {isShowPwd ? (
                  <VisibilityIcon sx={styleIcon} />
                ) : (
                  <VisibilityOffIcon sx={styleIcon} />
                )}
              </div>
            </Input>

            <Input
              label={lang("login.PASSWORD_MATCH")}
              id="passwordMatch"
              type={isShowPwdMatch ? "password" : "text"}
              placeholder={lang("login.PLACE_PASSWORD_MATCH")}
              style={{ flex: 1 }}
            >
              <div onClick={() => toggleShowPwdMatch()}>
                {isShowPwdMatch ? (
                  <VisibilityIcon sx={styleIcon} />
                ) : (
                  <VisibilityOffIcon sx={styleIcon} />
                )}
              </div>
            </Input>
          </div>

          <button type="submit" className="auth-btn">
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
