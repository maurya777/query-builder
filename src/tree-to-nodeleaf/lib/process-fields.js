// todo: is_empty, is_not_empty, like, not_like, starts_with, ends_with, proximity
// both is_empty and is_not_empty do not require a value - should value be present and set to empty string perhaps?
// proximity has a more complicated API - do we cater for this?
const _processOperator = ({ operator }) => {
  return operator === 'equal'
    ? '=='
    : operator === 'not_equal'
    ? '!='
    : operator
}

const _processValue = ({ value, operator }) => {
  return value[0] === undefined
    ? ''
    : operator === 'like'
    ? `%${value[0]}%`
    : value[0]
}

export const processRuleFields = ({ operator, field, value }) => ({
  Operator: _processOperator({ operator }),
  Attribute: field,
  Value: _processValue({ value, operator })
})
