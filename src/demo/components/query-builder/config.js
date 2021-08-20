import AntdConfig from 'react-awesome-query-builder/lib/config/antd'

import { convertMetaToFields } from '../../../lib'

const getConfig = ({ query, meta, values }) => ({
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
  // widgets: {
  //   ...AntdConfig.widgets,
  //   multiselect: {
  //     ...AntdConfig.widgets.multiselect,
  //     factory: props => <SelectWidget {...props} />
  //   },
  //   text: {
  //     ...AntdConfig.widgets.text,
  //     factory: props => <TextWidget {...props} />
  //   }
  // },
  fields: convertMetaToFields({ meta, values })
})

export default getConfig
