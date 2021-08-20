const SelectWidget = ({ listValues = [], setValue, value }) => {
  return (
    <select
      className="SelectWidget"
      multiple
      value={value}
      onChange={e => {
        const arr = Array.apply(null, e.target.options)
          .filter(opt => opt.selected)
          .map(opt => opt.value)
        setValue(arr)
      }}
    >
      {listValues.map(val => (
        <option key={val} value={val}>
          {val}
        </option>
      ))}
    </select>
  )
}

export default SelectWidget
