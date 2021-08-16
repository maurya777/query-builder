import React from 'react'
import { Query, Builder, Utils as QbUtils } from 'react-awesome-query-builder'

import 'antd/dist/antd.css'

import 'react-awesome-query-builder/lib/css/styles.css'
import 'react-awesome-query-builder/lib/css/compact_styles.css' //optional, for more compact styles

import AntdConfig from 'react-awesome-query-builder/lib/config/antd'

import { convertNodeLeafToTree, convertTreeToNodeLeaf } from '../../lib'

const fields = {
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

const QueryBuilder = ({ query, onChange }) => {
  const config = { ...AntdConfig, fields }
  const _query = convertNodeLeafToTree({
    id: QbUtils.uuid(),
    nodeLeafQuery: query
  })

  return (
    <Query
      {...config}
      value={QbUtils.checkTree(QbUtils.loadTree(_query.query), config)}
      onChange={immutableTree => {
        onChange({
          query: convertTreeToNodeLeaf({
            treeQuery: QbUtils.getTree(immutableTree)
          })
        })
      }}
      renderBuilder={props => <Builder {...props} />}
    />
  )
}

export default QueryBuilder
