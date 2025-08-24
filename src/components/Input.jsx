const Input = ({
  label,
  type,
  id,
  placeholder,
  children,
  handleChange,
  style,
}) => {
  return (
    <div className="form-group" style={style}>
      <label>{label}</label>
      <input
        type={type}
        itemID={id}
        placeholder={placeholder}
        onChange={handleChange}
      />
      {children}
    </div>
  )
}

export default Input
