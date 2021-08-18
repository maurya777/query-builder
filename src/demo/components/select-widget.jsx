const SelectWidget = ({ listValues, setValue }) => {
  return (
    <select
      className="SelectWidget"
      multiple
      onChange={e => {
        const arr = Array.apply(null, e.target.options)
          .filter(opt => opt.selected)
          .map(opt => opt.value)
        setValue(arr)
      }}
    >
      {listValues.map(val => (
        <option value={val}>{val}</option>
      ))}
    </select>
  )
}

export default SelectWidget
