const Input = ({
  label,
  type,
  id,
  placeholder,
  children,
  handleChange,
  style,
  errors,
  required,
}) => {
  const msgError = errors?.find(error => error.id === id)?.msgError

  return (
    <>
      <div className="form-group" style={style}>
        <label>
          {label} {required ? <span style={{ color: "red" }}>*</span> : ""}
        </label>
        <input
          type={type}
          itemID={id}
          placeholder={placeholder}
          onChange={e => handleChange(id, e.target.value)}
        />
        {children}
        <span style={{ color: "red", fontSize: 13 }}>{msgError}</span>
      </div>
    </>
  )
}

export default Input
