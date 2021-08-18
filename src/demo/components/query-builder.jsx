import React from 'react'
import { Query, Builder, Utils as QbUtils } from 'react-awesome-query-builder'

import 'antd/dist/antd.css'

import 'react-awesome-query-builder/lib/css/styles.css'
import 'react-awesome-query-builder/lib/css/compact_styles.css' //optional, for more compact styles

import AntdConfig from 'react-awesome-query-builder/lib/config/antd'

import {
  convertMetaToFields,
  convertNodeLeafToTree,
  convertTreeToNodeLeaf
} from '../../lib'

const QueryBuilder = ({ meta, query, onChange }) => {
  const config = {
    ...AntdConfig,
    operators: {
      equal: {
        ...AntdConfig.operators.equal,
        label: 'equal to'
      },
      not_equal: {
        ...AntdConfig.operators.not_equal,
        label: 'not equal to'
      },
      like: {
        ...AntdConfig.operators.like,
        label: 'like'
      },
      multiselect_equals: {
        ...AntdConfig.operators.multiselect_equals,
        label: 'any in'
      }
    },
    fields: convertMetaToFields({ meta })
  }

  const _query = convertNodeLeafToTree({
    id: QbUtils.uuid(),
    nodeLeafQuery: query
  })

  return (
    <Query
      {...config}
      value={QbUtils.checkTree(QbUtils.loadTree(_query), config)}
      onChange={immutableTree => {
        onChange({
          query: convertTreeToNodeLeaf({
            treeQuery: QbUtils.getTree(immutableTree)
          })
        })
      }}
      renderBuilder={props => (
        <div className="query-builder-container">
          <div className="query-builder qb-lite">
            <Builder {...props} />
          </div>
        </div>
      )}
    />
  )
}

export default QueryBuilder
