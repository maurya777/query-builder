const TextWidget = ({ value, setValue }) => {
  return (
    <input
      className="TextWidget"
      type="text"
      value={value}
      onChange={e => {
        setValue(e.target.value)
      }}
    />
  )
}

export default TextWidget
