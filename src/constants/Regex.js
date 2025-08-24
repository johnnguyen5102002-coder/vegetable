const USER_REGEX = /^[a-zA-Z][a-zA-Z0-9_]{2,15}$/
const PWD_REGEX =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&])[A-Za-z\d@.#$!%*?&]{8,15}$/

export { USER_REGEX, PWD_REGEX }
