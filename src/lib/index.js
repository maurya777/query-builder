import AntdConfig from 'react-awesome-query-builder/lib/config/antd'

// import { Utils as QbUtils } from 'react-awesome-query-builder'
// import { v4 as uuidv4 } from 'uuid'

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

  return {
    config,
    // query: data.one.tree
    // query: data.two.tree
    query: data.three.tree
    // query: data.four.tree
    // query: data.five.tree
  }
}

const init = ({ children }) => {
  return Object.entries(children)
    .map(val => val[1])
    .map(({ type, properties, children1 }) => {
      return type === 'rule'
        ? {
            ...processRuleFields({ ...properties })
          }
        : {
            conjunction: properties.conjunction.toLowerCase(),
            children: init({ children: children1 })
          }
    })
}

// this is where we process React Awesome Query Builder Tree state into Node Leaf state
export const convertTreeToNodeLeaf = ({ treeQuery }) => {
  const data = init({ children: treeQuery.children1 })

  return data
}
