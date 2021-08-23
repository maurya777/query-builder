import { Query, Builder, Utils as QbUtils } from 'react-awesome-query-builder'

import './css/antd.css'
import './css/styles.css'
import './css/compact_styles.css'

import getConfig from './config'

import { convertPayloadToValues } from '../../../lib/values'

import {
  convertNodeLeafToTree,
  convertTreeToNodeLeaf
} from '../../../lib/query'

const QueryBuilder = ({
  metaPayload = [],
  valuesPayload = [],
  queryPayload = {},
  onChange
}) => {
  const values = convertPayloadToValues({
    meta: metaPayload,
    payload: valuesPayload
  })

  const config = getConfig({ meta: metaPayload, values })

  const query = convertNodeLeafToTree({
    id: QbUtils.uuid(),
    nodeLeafQuery: queryPayload
  })

  return (
    <div className="_1eqb">
      <Query
        {...config}
        value={QbUtils.checkTree(QbUtils.loadTree(query), config)}
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
    </div>
  )
}

export default QueryBuilder
