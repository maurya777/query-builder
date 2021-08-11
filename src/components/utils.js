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
    query: data.one.tree
    // query: data.two.tree
    // query: data.three.tree
    // query: data.four.tree
    // query: data.five.tree
  }
}

// this is where we process React Awesome Query Builder Tree state into Node Leaf state
export const convertTreeToNodeLeaf = ({ treeQuery, level = 1 }) => {
  if (level === 1) {
    const Operands = Object.entries(treeQuery.children1)
      .map(val => val[1])
      .map(({ properties }) => properties)
      .map(({ operator, field, value }) => ({
        Operator: operator,
        Attribute: field,
        Value:
          value[0] === undefined
            ? ''
            : operator === 'like'
            ? `%${value[0]}%`
            : value[0]
      }))

    return { Operator: 'and', Operands }
  } else {
    return treeQuery
  }
}
