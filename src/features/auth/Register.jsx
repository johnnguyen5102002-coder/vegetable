import Input from "../../components/Input"
import { lang } from "../../locales/i18n"
import { VisibilityIcon, VisibilityOffIcon } from "../../assets/icons/index"
import { useState } from "react"
import { Link } from "react-router"
import { USER_REGEX, PWD_REGEX } from "../../constants/Regex"

const Login = () => {
  const [isShowPwd, setIsShowPwd] = useState(true)
  const [isShowPwdMatch, setIsShowPwdMatch] = useState(true)
  const [errors, setErrors] = useState([])
  const [info, setInfo] = useState([])

  const styleIcon = {
    position: "absolute",
    top: "calc(23px + 13.5px)",
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

  function validateFeild(id, value, info) {
    let newError = [...errors]
    switch (id) {
      case "username":
        if (USER_REGEX.test(value)) {
          newError = newError.filter(error => error.id !== "username")
        } else {
          newError = [
            ...newError,
            {
              id: "username",
              msgError: lang("error_message.USER_ERROR"),
            },
          ]
        }
        break
      case "password":
        if (PWD_REGEX.test(value)) {
          newError = newError.filter(error => error.id !== "password")
        } else {
          newError = [
            ...newError,
            {
              id: "password",
              msgError: lang("error_message.PWD_ERROR"),
            },
          ]
        }
        break
      case "passwordMatch":
        if (value === info.password) {
          newError = newError.filter(error => error.id !== "passwordMatch")
        } else {
          newError = [
            ...newError,
            {
              id: "passwordMatch",
              msgError: lang("error_message.PWD_MATCH_ERROR"),
            },
          ]
        }
        break

      case "phonenumber":
        if (value !== "") {
          newError = newError.filter(error => error.id !== "phonenumber")
        } else {
          newError = [
            ...newError,
            {
              id: "phonenumber",
              msgError: lang("error_message.REQUIRED_ERROR"),
            },
          ]
        }
        break

      case "name":
        if (value !== "") {
          newError = newError.filter(error => error.id !== "name")
        } else {
          newError = [
            ...newError,
            {
              id: "name",
              msgError: lang("error_message.REQUIRED_ERROR"),
            },
          ]
        }
        break
      default:
        break
    }
    setErrors(newError)
  }

  function handleChange(id, value) {
    setInfo({ ...info, [id]: value })
    validateFeild(id, value, info)
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
              type={isShowPwd ? "password" : "text"}
              placeholder={lang("login.PLACE_PASSWORD")}
              handleChange={handleChange}
              style={{ flex: 1 }}
              errors={errors}
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
              required
              id="passwordMatch"
              type={isShowPwdMatch ? "password" : "text"}
              placeholder={lang("login.PLACE_PASSWORD_MATCH")}
              handleChange={handleChange}
              style={{ flex: 1 }}
              errors={errors}
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

          <button
            type="submit"
            className="auth-btn"
            disabled={errors.length === 0}
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
