import AntdConfig from 'react-awesome-query-builder/lib/config/antd'

import { processRuleFields } from './process-fields'

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

  const num = window.location.hash.split('#/?level=')[1]

  return {
    config,
    query: data[num].tree || data['01'].tree
  }
}

// this is where we process React Awesome Query Builder Tree state into Node Leaf state
export const convertTreeToNodeLeaf = ({ treeQuery }) => {
  const recurse = ({ children }) =>
    Object.entries(children)
      .map(val => val[1])
      .map(({ type, properties, children1 }) =>
        type === 'rule'
          ? {
              ...processRuleFields({ ...properties })
            }
          : {
              Operator: properties.conjunction.toLowerCase(),
              Operands: recurse({ children: children1 })
            }
      )

  return {
    Operator: 'and',
    Operands: recurse({ children: treeQuery.children1 })
  }
}
