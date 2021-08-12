import React, { useEffect } from 'react'
import { Query, Builder, Utils as QbUtils } from 'react-awesome-query-builder'

import 'antd/dist/antd.css'

import 'react-awesome-query-builder/lib/css/styles.css'
import 'react-awesome-query-builder/lib/css/compact_styles.css' //optional, for more compact styles

import './style.css'

import { convertNodeLeafToTree, convertTreeToNodeLeaf } from './utils'

const QueryBuilder = ({ query: nodeLeafQuery, onChange }) => {
  const tree = convertNodeLeafToTree({ nodeLeafQuery })

  // hide <button>'s containing "Not"
  // useEffect(() => {
  //   document.querySelectorAll('.group--header button').forEach(btn => {
  //     if (btn.innerHTML === '<span>Not</span>') btn.style.display = 'none'
  //   })
  // }, [])

  return (
    <Query
      {...tree.config}
      value={QbUtils.checkTree(QbUtils.loadTree(tree.query), tree.config)}
      onChange={(immutableTree, config) => {
        // Tip: for better performance you can apply `throttle` - see `examples/demo`
        onChange({
          treeQuery: QbUtils.getTree(immutableTree),
          query: convertTreeToNodeLeaf({
            treeQuery: QbUtils.getTree(immutableTree)
          }) // nodeLeafQuery
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
