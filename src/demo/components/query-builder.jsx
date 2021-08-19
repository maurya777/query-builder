import { Query, Builder, Utils as QbUtils } from 'react-awesome-query-builder'

import 'antd/dist/antd.css'

import 'react-awesome-query-builder/lib/css/styles.css'
import 'react-awesome-query-builder/lib/css/compact_styles.css' //optional, for more compact styles

import AntdConfig from 'react-awesome-query-builder/lib/config/antd'
import TextWidget from './text-widget'
import SelectWidget from './select-widget'

import {
  getSelectedValues,
  convertMetaToFields,
  convertNodeLeafToTree,
  convertTreeToNodeLeaf
} from '../../lib'

const QueryBuilder = ({ meta = [], values = [], query = {}, onChange }) => {
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
    // NB currently unable to prepopulate select fields w/ values usibng AntD out of the box :(
    // ... but can achieve this with custom widget
    // without widgets object RAQB will default back to using Ant Design components
    widgets: {
      ...AntdConfig.widgets,
      multiselect: {
        ...AntdConfig.widgets.multiselect,
        factory: props => {
          return (
            <SelectWidget
              {...props}
              /*
              bug:
              every time this widget is used it sets selected values
              this is desirable on first load but not when a new query is added 
              */
              selectedValues={getSelectedValues({
                initValues: true,
                Operands: query.Operands,
                name: props.field
              })}
            />
          )
        }
      },
      text: {
        ...AntdConfig.widgets.text,
        factory: props => <TextWidget {...props} />
      }
    },
    fields: convertMetaToFields({ meta, values })
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
