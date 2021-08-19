import AntdConfig from 'react-awesome-query-builder/lib/config/antd'
import TextWidget from '../text-widget'
import SelectWidget from '../select-widget'

import { getAllOperands, convertMetaToFields } from '../../../lib'

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
  // NB currently unable to prepopulate multiselect fields w/ values
  widgets: {
    ...AntdConfig.widgets,
    multiselect: {
      ...AntdConfig.widgets.multiselect,
      factory: props => (
        <SelectWidget
          {...props}
          // factory props should contain everything the component needs
          // it contains listValues (i.e. all the options)
          // it does not contain value / defaultValue (i.e. preselected options)
          allOperands={getAllOperands({
            Operands: query.Operands
          })}
        />
      )
    },
    text: {
      ...AntdConfig.widgets.text,
      factory: props => <TextWidget {...props} />
    }
  },
  fields: convertMetaToFields({ meta, values })
})

export default getConfig
