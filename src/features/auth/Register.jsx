import Input from "../../components/Input"
import { lang } from "../../locales/i18n"
import { VisibilityIcon, VisibilityOffIcon } from "../../assets/icons/index"
import { useState } from "react"
import { Link } from "react-router"
import { USER_REGEX, PWD_REGEX } from "../../constants/Regex"

const Login = () => {
  const [showPwd, setShowPwd] = useState({
    password: true,
    passwordMatch: true,
  })
  const [errors, setErrors] = useState([])
  const [info, setInfo] = useState({})

  const styleIcon = {
    position: "absolute",
    top: "calc(23px + 13.5px)",
    right: 10,
    cursor: "pointer",
    fontSize: 20,
  }

  function handleChange(id, value) {
    setInfo(prev => ({ ...prev, [id]: value }))
    validateFeild(id, value, { ...info, [id]: value })
  }

  function toggleShow(id) {
    setShowPwd(prev => ({ ...prev, [id]: !prev[id] }))
  }

  const rules = {
    username: {
      test: value => USER_REGEX.test(value),
      message: lang("error_message.USER_ERROR"),
    },
    password: {
      test: value => PWD_REGEX.test(value),
      message: lang("error_message.PWD_ERROR"),
    },
    passwordMatch: {
      test: (value, info) => value === info.password,
      message: lang("error_message.PWD_MATCH_ERROR"),
    },
    phonenumber: {
      test: value => value.trim() !== "",
      message: lang("error_message.REQUIRED_ERROR"),
    },
    name: {
      test: value => value.trim() !== "",
      message: lang("error_message.REQUIRED_ERROR"),
    },
  }

  function validateFeild(id, value, info) {
    const rule = rules[id]
    if (!rule) return

    const isValid = rule.test(value, info)
    let newError = [...errors]

    if (isValid) {
      newError = newError.filter(error => error.id !== id)
    } else {
      newError = [
        ...newError.filter(e => e.id !== id),
        { id, msgError: rule.message },
      ]
    }

    setErrors(newError)
  }

  return (
    <div className="auth">
      <div className="overlay"></div>
      <div className="auth-container register-container">
        <h2>Đăng ký</h2>
        <form>
          <Input
            label="Họ và tên"
            required
            id="name"
            type="text"
            placeholder="Nhập họ và tên"
            style={{ flex: 1 }}
            errors={errors}
            handleChange={handleChange}
          />

          <div style={{ display: "flex", columnGap: 10 }}>
            <Input
              label={lang("login.PHONE_NUMBER")}
              required
              id="phonenumber"
              type="text"
              errors={errors}
              placeholder={lang("login.PLACE_PHONE_NUMBER")}
              style={{ flex: 1 }}
              handleChange={handleChange}
            />
            <Input
              label={lang("login.EMAIL")}
              id="email"
              type="text"
              errors={errors}
              placeholder={lang("login.PLACE_EMAIL")}
              style={{ flex: 1 }}
              handleChange={handleChange}
            />
          </div>

          <Input
            label={lang("login.USERNAME")}
            required
            id="username"
            type="text"
            placeholder={lang("login.PLACE_USERNAME")}
            errors={errors}
            handleChange={handleChange}
          />

          <div style={{ display: "flex", columnGap: 10 }}>
            <Input
              label={lang("login.PASSWORD")}
              required
              id="password"
              type={showPwd.password ? "password" : "text"}
              placeholder={lang("login.PLACE_PASSWORD")}
              handleChange={handleChange}
              style={{ flex: 1 }}
              errors={errors}
            >
              <div onClick={() => toggleShow("password")}>
                {showPwd.password ? (
                  <VisibilityIcon sx={styleIcon} />
                ) : (
                  <VisibilityOffIcon sx={styleIcon} />
                )}
              </div>
            </Input>

            <Input
              label={lang("login.PASSWORD_MATCH")}
              required
              id="passwordMatch"
              type={showPwd.passwordMatch ? "password" : "text"}
              placeholder={lang("login.PLACE_PASSWORD_MATCH")}
              handleChange={handleChange}
              style={{ flex: 1 }}
              errors={errors}
            >
              <div onClick={() => toggleShow("passwordMatch")}>
                {showPwd.passwordMatch ? (
                  <VisibilityIcon sx={styleIcon} />
                ) : (
                  <VisibilityOffIcon sx={styleIcon} />
                )}
              </div>
            </Input>
          </div>

          <button
            disabled={Object.values(errors).some(Boolean)}
            className="auth-btn"
          >
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
