import { useEffect } from 'react'

let flags = undefined

const SelectWidget = ({
  listValues = [],
  setValue,
  value,
  allOperands,
  field
}) => {
  const hack = () => {
    if (!flags) {
      flags = {}
      allOperands.forEach(({ Attribute }) => {
        flags[Attribute] = { count: 0 }
      })
    }

    const arr = allOperands.filter(({ Attribute }) => Attribute === field)
    const val = arr[flags[field].count]?.Value.split(',') || []

    flags[field].count = flags[field].count + 1
    flags[field].val = val

    setValue(val)
  }

  useEffect(() => {
    hack()
    // eslint-disable-next-line
  }, [])

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
