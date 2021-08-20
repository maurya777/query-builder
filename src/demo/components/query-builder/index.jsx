import { Query, Builder, Utils as QbUtils } from 'react-awesome-query-builder'

import 'antd/dist/antd.css'

import 'react-awesome-query-builder/lib/css/styles.css'
import 'react-awesome-query-builder/lib/css/compact_styles.css' //optional, for more compact styles

import getConfig from './config'

import { convertNodeLeafToTree, convertTreeToNodeLeaf } from '../../../lib'

const QueryBuilder = ({ meta = [], values = [], query = {}, onChange }) => {
  const config = getConfig({ query, meta, values })

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