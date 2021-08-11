import { Utils as QbUtils } from 'react-awesome-query-builder'
import AntdConfig from 'react-awesome-query-builder/lib/config/antd'
import { v4 as uuidv4 } from 'uuid'

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
      }
    }
  }

  const query = {
    id: QbUtils.uuid(),
    type: 'group',
    children1: {
      [uuidv4()]: {
        type: 'rule',
        properties: {
          field: 'ReportDevice.ComputerName',
          operator: 'like',
          value: ['1E'],
          valueSrc: ['value'],
          valueType: ['text']
        }
      },
      [uuidv4()]: {
        type: 'rule',
        properties: {
          field: 'ReportDevice.DomainName',
          operator: 'equal',
          value: ['1E.local'],
          valueSrc: ['value'],
          valueType: ['text']
        }
      }
    }
  }

  return { config, query }
}

export const convertTreeToNodeLeaf = ({ treeQuery }) => {
  // Object.entries(jsonTree)
  // Object.entries(jsonTree.children1)
  // .map(val => val[1])
  // .map(({ properties }) => properties)
  // .map(({ operator, value }) => ({
  //   Operator: 'and',
  //   Operands: [
  //     {
  //       Operator: operator,
  //       Attribute: 'todo', //"ReportDevice.ComputerName",
  //       Value: value[0] // "%1E%"
  //     },
  //     {
  //       Operator: operator,
  //       Attribute: 'todo', //"ReportDevice.DomainName",
  //       Value: value[0] // "1E.local"
  //     }
  //   ]
  // }))
  return treeQuery
}
