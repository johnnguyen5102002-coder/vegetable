const vi = {
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

vi.login.PLACE_USERNAME = `Nhập ${vi.login.USERNAME}`
vi.login.PLACE_PASSWORD = `Nhập ${vi.login.PASSWORD}`
vi.login.PLACE_PASSWORD_MATCH = `Nhập ${vi.login.PASSWORD_MATCH}`
vi.login.PLACE_PHONE_NUMBER = `Nhập ${vi.login.PHONE_NUMBER}`
vi.login.PLACE_EMAIL = `Nhập ${vi.login.EMAIL}`
vi.login.PLACE_ADDRESS = `Nhập ${vi.login.ADDRESS}`

export default vi
