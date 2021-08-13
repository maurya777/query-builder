import AntdConfig from 'react-awesome-query-builder/lib/config/antd'

import data from '../components/data'

export const convertNodeLeafToTree = ({ nodeLeafQuery }) => {
  // todo: process nodeLeafQuery

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

  return { config, query: data['01'].tree }
}
