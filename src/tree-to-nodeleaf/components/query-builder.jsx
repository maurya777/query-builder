import React from 'react'
import { Query, Builder, Utils as QbUtils } from 'react-awesome-query-builder'

import 'antd/dist/antd.css'

import 'react-awesome-query-builder/lib/css/styles.css'
import 'react-awesome-query-builder/lib/css/compact_styles.css' //optional, for more compact styles

import { convertTreeToNodeLeaf } from '../lib'

import AntdConfig from 'react-awesome-query-builder/lib/config/antd'

import data from '../../data'

const getTreeState = () => {
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

  const num = window.location.hash.split('#/tree-to-nodeleaf?level=')[1]

  return {
    config,
    query: data[num]?.tree || data['01'].tree
  }
}

const QueryBuilder = ({ onChange }) => {
  const treeState = getTreeState()

  // hide <button>'s containing "Not"
  // useEffect(() => {
  //   document.querySelectorAll('.group--header button').forEach(btn => {
  //     if (btn.innerHTML === '<span>Not</span>') btn.style.display = 'none'
  //   })
  // }, [])

  return (
    <Query
      {...treeState.config}
      value={QbUtils.checkTree(
        QbUtils.loadTree(treeState.query),
        treeState.config
      )}
      onChange={(immutableTree, config) => {
        // Tip: for better performance you can apply `throttle` - see `examples/demo`
        onChange({
          treeQuery: QbUtils.getTree(immutableTree),
          query: convertTreeToNodeLeaf({
            treeQuery: QbUtils.getTree(immutableTree)
          }),
          outputs: {
            queryString: QbUtils.queryString(immutableTree, treeState.config),
            sqlFormat: QbUtils.sqlFormat(immutableTree, treeState.config),
            mongodbFormat: QbUtils.mongodbFormat(
              immutableTree,
              treeState.config
            )
          }
        })
      }}
      renderBuilder={props => <Builder {...props} />}
    />
  )
}

export default QueryBuilder

// other QbUtils methods...
// queryString
// mongodbFormat
// sqlFormat
// jsonLogicFormat

// from demo
// qty: {
//   label: 'Qty',
//   type: 'number',
//   fieldSettings: {
//     min: 0
//   },
//   valueSources: ['value'],
//   preferWidgets: ['number']
// },
// price: {
//   label: 'Price',
//   type: 'number',
//   valueSources: ['value'],
//   fieldSettings: {
//     min: 10,
//     max: 100
//   },
//   preferWidgets: ['slider', 'rangeslider']
// },
// color: {
//   label: 'Color',
//   type: 'select',
//   valueSources: ['value'],
//   fieldSettings: {
//     listValues: [
//       { value: 'yellow', title: 'Yellow' },
//       { value: 'green', title: 'Green' },
//       { value: 'orange', title: 'Orange' }
//     ]
//   }
// },
// is_promotion: {
//   label: 'Promo?',
//   type: 'boolean',
//   operators: ['equal'],
//   valueSources: ['value']
// }
