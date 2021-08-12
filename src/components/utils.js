import AntdConfig from 'react-awesome-query-builder/lib/config/antd'
// import { Utils as QbUtils } from 'react-awesome-query-builder'
// import { v4 as uuidv4 } from 'uuid'
import data from './data'

// this is where we process Node Leaf state into React Awesome Query Builder Tree state
export const convertNodeLeafToTree = () => {
  const config = {
    ...AntdConfig,
    fields: {
      'ReportDevice.ComputerName': {
        label: 'ReportDevice.ComputerName',
        type: 'text'
      },
      'ReportDevice.DomainName': {
        label: 'ReportDevice.DomainName',
        type: 'text'
      },
      'ReportDevice.DeviceName': {
        label: 'ReportDevice.DeviceName',
        type: 'text'
      },
      'ReportDevice.ComputerNumber': {
        label: 'ReportDevice.ComputerNumber',
        type: 'text'
      },
      'ReportDevice.DomainNumber': {
        label: 'ReportDevice.DomainNumber',
        type: 'text'
      },
      'ReportDevice.DeviceNumber': {
        label: 'ReportDevice.DeviceNumber',
        type: 'text'
      },
      'ReportDevice.ComputerId': {
        label: 'ReportDevice.ComputerId',
        type: 'text'
      },
      'ReportDevice.DomainId': {
        label: 'ReportDevice.DomainId',
        type: 'text'
      },
      'ReportDevice.DeviceId': {
        label: 'ReportDevice.DeviceId',
        type: 'text'
      }
    }
  }

  return {
    config,
    // query: data.one.tree
    query: data.two.tree
    // query: data.three.tree
    // query: data.four.tree
    // query: data.five.tree
  }
}

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

const _processRuleFields = ({ operator, field, value }) => ({
  Operator: _processOperator({ operator }),
  Attribute: field,
  Value: _processValue({ value, operator })
})

// this is where we process React Awesome Query Builder Tree state into Node Leaf state
export const convertTreeToNodeLeaf = ({ treeQuery }) => {
  // techdebt: this is too crude
  const level = JSON.stringify(treeQuery).split('"type":"group"').length - 1

  // array containing object or array
  // if object, is rule
  // if array, is group
  const data = Object.entries(treeQuery.children1)
    .map(val => val[1])
    .map(({ type, properties, children1 }) => {
      return type === 'rule'
        ? { _type: 'rule', ...properties }
        : {
            _type: 'group',
            conjunction: properties.conjunction.toLowerCase(),
            children: Object.entries(children1)
          }
    })

  if (level === 1) {
    return { Operator: 'and', Operands: data.map(_processRuleFields) }
  } else if (level === 2) {
    const _data = data.map(item => {
      return item._type === 'rule'
        ? _processRuleFields({ ...item })
        : {
            Operator: item.conjunction,
            Operands: item.children
              .map(val => val[1])
              .map(({ properties }) => properties)
              .map(_processRuleFields)
          }
    })
    return { Operator: 'and', Operands: _data }
  } else {
    return treeQuery // JSON.stringify(treeQuery)
  }
}
