import { useEffect } from 'react'

const SelectWidget = ({ listValues = [], setValue, selectedValues = [] }) => {
  useEffect(() => {
    setValue(selectedValues)
    // eslint-disable-next-line
  }, [])

  return (
    <select
      className="SelectWidget"
      multiple
      defaultValue={selectedValues}
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
