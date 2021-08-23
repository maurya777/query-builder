export const convertMetaToFields = ({ meta, values }) => {
  const fields = {}

  // todo: Type === DateTime (not tested)
  meta.forEach(({ DisplayName, Type, Attribute }) => {
    if (Type === 'String') {
      fields[Attribute] = {
        label: DisplayName,
        type: 'text'
      }
    } else if (Type === 'Int' || Type === 'Decimal') {
      fields[Attribute] = {
        label: DisplayName,
        type: 'number',
        valueSources: ['value'],
        preferWidgets: ['number']
      }
    } else if (Type === 'Boolean') {
      fields[Attribute] = {
        label: DisplayName,
        type: 'boolean',
        operators: ['equal'],
        valueSources: ['value']
      }
    } else {
      const { Values } = values.find(val => val.Attribute === Attribute) || {
        Values: []
      }
      fields[Attribute] = {
        label: DisplayName,
        type: 'multiselect',
        valueSources: ['value'],
        fieldSettings: {
          listValues: Values
        }
      }
    }
  })

  return fields
}

export const convertFieldsToMeta = ({ fields }) =>
  Object.entries(fields).map(field => {
    const Attribute = field[0]
    const Type =
      field[1].type === 'text'
        ? 'String'
        : Attribute.includes('DeviceTag')
        ? 'DeviceTag'
        : Attribute.includes('SoftwareTag')
        ? 'SoftwareTag'
        : 'number'
        ? 'Number'
        : 'String' // NB defaulting to String

    return {
      Attribute,
      Type,
      DisplayName: field[1].label
    }
  })
