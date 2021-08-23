// todo: is_empty, is_not_empty, like, not_like, starts_with, ends_with
// both is_empty and is_not_empty do not require a value - should value be present and set to empty string perhaps?
const _processRuleOperator = ({ operator }) => {
  return operator === 'equal'
    ? '=='
    : operator === 'not_equal'
    ? '!='
    : operator === 'multiselect_equals'
    ? 'In'
    : operator
}

const _processRuleValue = ({ value, operator }) => {
  return value[0] === undefined
    ? ''
    : operator === 'like'
    ? `%${value[0]}%`
    : operator === 'multiselect_equals'
    ? value.join(', ')
    : value[0]
}

export const processRuleFields = ({ operator, field, value }) => ({
  Operator: _processRuleOperator({ operator }),
  Attribute: field,
  Value: _processRuleValue({ value, operator })
})

// ------------------------------------------------------------

const _processLeafOperator = ({ Operator }) => {
  return Operator === 'In'
    ? 'multiselect_equals'
    : Operator === '=='
    ? 'equal'
    : Operator === '!='
    ? 'not_equal'
    : Operator
}

const _processLeafValue = ({ Value, Operator }) => {
  return Operator === 'In'
    ? [Value.split(',')]
    : Operator === 'like'
    ? [Value.substring(1, Value.length - 1)]
    : [Value]
}

const _processLeafValueSrc = ({ Operator }) => {
  return Operator === 'In' ? ['value'] : ['value']
}

const _processLeafValueType = ({ Operator, Value }) => {
  return typeof Value === 'boolean'
    ? ['boolean']
    : typeof Value === 'number'
    ? ['number']
    : Operator === 'In'
    ? ['multiselect']
    : ['text']
}

export const processLeafFields = ({ Operator, Attribute, Value }) => ({
  field: Attribute,
  operator: _processLeafOperator({ Operator }),
  value: _processLeafValue({ Value, Operator }),
  valueSrc: _processLeafValueSrc({ Operator }),
  valueType: _processLeafValueType({ Operator, Value })
})
