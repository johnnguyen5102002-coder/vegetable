const en = {
  login: {
    TITLE: "Đăng nhập",
    USERNAME: "Tên tài khoản",
    PHONE_NUMBER: "Số điện thoại",
    PASSWORD: "Mật khẩu",
    PASSWORD_MATCH: "Nhập lại mật khẩu",
    EMAIL: "Email",
    ADDRESS: "Địa chỉ",
    BUTTON: "Đăng nhập",
  },
  error_message: {
    USER_ERROR: "Vui lòng nhập tên tài khoản hợp lệ",
    PWD_ERROR:
      "Mật khẩu phải dài từ 8 đến 15 ký tự và chứa chữ cái, số và ký tự đặc biệt",
    PWD_REQUIRED_ERROR: "Mật khẩu bắt buộc",
    USER_REQUIRED_ERROR: "Tên tài khoản bắt buộc",
    PWD_MATCH_ERROR: "Mật khẩu không khớp",
    INVALID_ERROR: "Vui lòng xác nhận mật khẩu của bạn",
  },
  home: {},
}

en.login.PLACE_USERNAME = `Nhập ${en.login.USERNAME}`
en.login.PLACE_PASSWORD = `Nhập ${en.login.PASSWORD}`
en.login.PLACE_PASSWORD_MATCH = `Nhập ${en.login.PASSWORD_MATCH}`
en.login.PLACE_PHONE_NUMBER = `Nhập ${en.login.PHONE_NUMBER}`
en.login.PLACE_EMAIL = `Nhập ${en.login.EMAIL}`
en.login.PLACE_ADDRESS = `Nhập ${en.login.ADDRESS}`

export default en
