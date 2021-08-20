import { useEffect } from 'react'

let flags = undefined

const SelectWidget = ({
  listValues = [],
  setValue,
  value,
  allOperands,
  field
}) => {
  /*
  We are determining which values to assign to which SelectWidget by...
  - creating a flags object which contains all operands as keys along with a counter
  - assigning the first Operand value to the first SelectWidget where the field matches the Attribute
  - assigning the second Operand value... etc
  We need to take this approach as not all Attributes will be unique
  */
  const populateSelectHack = () => {
    if (!flags) {
      flags = {}
      allOperands.forEach(({ Attribute }) => {
        flags[Attribute] = { count: 0 }
      })
    }

    const arr = allOperands.filter(({ Attribute }) => Attribute === field)
    const val = arr[flags[field].count]?.Value.split(',') || []

    flags[field].count = flags[field].count + 1
    flags[field].val = val // storing the val for debugging purposes only

    setValue(val)
  }

  useEffect(() => {
    populateSelectHack()
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
