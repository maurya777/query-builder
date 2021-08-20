import React from 'react'
import { Query, Builder, Utils as QbUtils } from 'react-awesome-query-builder'

import 'antd/dist/antd.css'

import 'react-awesome-query-builder/lib/css/styles.css'
import 'react-awesome-query-builder/lib/css/compact_styles.css' //optional, for more compact styles

import AntdConfig from 'react-awesome-query-builder/lib/config/antd'

import { convertTreeToNodeLeaf } from '../../lib/query'

const QueryBuilder = ({ treeQuery, onChange }) => {
  // hide <button>'s containing "Not"
  // useEffect(() => {
  //   document.querySelectorAll('.group--header button').forEach(btn => {
  //     if (btn.innerHTML === '<span>Not</span>') btn.style.display = 'none'
  //   })
  // }, [])

  const config = { ...AntdConfig, fields: treeQuery.fields }

  return (
    <Query
      {...config}
      value={QbUtils.checkTree(QbUtils.loadTree(treeQuery.query), config)}
      onChange={(immutableTree, config) => {
        // Tip: for better performance you can apply `throttle` - see `examples/demo`
        onChange({
          nodeLeafQuery: convertTreeToNodeLeaf({
            treeQuery: QbUtils.getTree(immutableTree)
          }),
          outputs: {
            queryString: QbUtils.queryString(immutableTree, config),
            sqlFormat: QbUtils.sqlFormat(immutableTree, config),
            mongodbFormat: QbUtils.mongodbFormat(immutableTree, config)
          }
        })
      }}
      renderBuilder={props => <Builder {...props} />}
    />
  )
}

export default QueryBuilder
