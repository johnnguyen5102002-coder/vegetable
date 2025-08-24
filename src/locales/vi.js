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
    REQUIRED_ERROR: "Thông tin này bắt buộc",
    PWD_MATCH_ERROR: "Mật khẩu không khớp",
  },
  home: {},
}
const placeholder = text => `Nhập ${text.toLocaleLowerCase()}`
vi.login.PLACE_USERNAME = placeholder(vi.login.USERNAME)
vi.login.PLACE_PASSWORD = placeholder(vi.login.PASSWORD)
vi.login.PLACE_PASSWORD_MATCH = placeholder(vi.login.PASSWORD_MATCH)
vi.login.PLACE_PHONE_NUMBER = placeholder(vi.login.PHONE_NUMBER)
vi.login.PLACE_EMAIL = placeholder(vi.login.EMAIL)
vi.login.PLACE_ADDRESS = placeholder(vi.login.ADDRESS)

export default vi
