import vi from "./vi"
import en from "./en"

const LANGUAGES = { vi, en }

const currentLang = "vi"

export const lang = keyPath => {
  const keys = keyPath.split(".")
  return keys.reduce((obj, key) => obj?.[key], LANGUAGES[currentLang])
}
