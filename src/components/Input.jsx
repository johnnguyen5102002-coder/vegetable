const Input = ({ label, type, id, placeholder, children, handleChange }) => {
  return (
    <div className="form-group">
      <label htmlFor={id}>{label}</label>
      <input
        type={type}
        id={id}
        placeholder={placeholder}
        onChange={handleChange}
      />
      {children}
    </div>
  )
}

export default Input
