const Login = () => {
  return (
    <div className="login">
      <div className="overlay"></div>
      <div class="login-container">
        <h2>Đăng nhập</h2>
        <form>
          <div class="form-group">
            <label for="email">Email</label>
            <input type="email" id="email" placeholder="Nhập email" />
          </div>
          <div class="form-group">
            <label for="password">Mật khẩu</label>
            <input type="password" id="password" placeholder="Nhập mật khẩu" />
          </div>
          <button type="submit" class="login-btn">
            Đăng nhập
          </button>
          <div class="extra-links">
            <p>
              <a href="#">Quên mật khẩu?</a>
            </p>
            <p>
              Chưa có tài khoản? <a href="#">Đăng ký</a>
            </p>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login
