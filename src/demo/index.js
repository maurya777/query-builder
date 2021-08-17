import React from 'react'

import QueryBuilder from './components/query-builder'

const queries = [
  {
    Operator: 'and',
    Operands: []
  },
  {
    Operator: 'and',
    Operands: [
      {
        Operator: 'like',
        Attribute: 'ReportDevice.ComputerName',
        Value: '%1E%'
      },
      {
        Operator: '==',
        Attribute: 'ReportDevice.DomainName',
        Value: '1E.local'
      }
    ]
  },
  {
    Operator: 'and',
    Operands: [
      {
        Operator: '==',
        Attribute: 'ReportDevice.ComputerId',
        Value: '123'
      },
      {
        Operator: 'like',
        Attribute: 'ReportDevice.ComputerName',
        Value: '%comp%'
      },
      {
        Operator: 'and',
        Operands: [
          {
            Operator: '==',
            Attribute: 'ReportDevice.DomainName',
            Value: 'dom'
          },
          {
            Operator: '==',
            Attribute: 'ReportDevice.DeviceName',
            Value: 'dev'
          }
        ]
      }
    ]
  },
  {
    Operator: 'and',
    Operands: [
      {
        Operator: '==',
        Attribute: 'ReportDevice.ComputerId',
        Value: 'comp-id-123'
      },
      {
        Operator: 'like',
        Attribute: 'ReportDevice.ComputerName',
        Value: '%comp-name%'
      },
      {
        Operator: 'and',
        Operands: [
          {
            Operator: '==',
            Attribute: 'ReportDevice.DomainName',
            Value: 'dom-name'
          },
          {
            Operator: 'and',
            Operands: [
              {
                Operator: '==',
                Attribute: 'ReportDevice.DeviceId',
                Value: 'dev-id'
              },
              {
                Operator: '==',
                Attribute: 'ReportDevice.DeviceName',
                Value: 'dev-name'
              }
            ]
          }
        ]
      }
    ]
  },
  {
    Operator: 'and',
    Operands: [
      {
        Operator: '==',
        Attribute: 'ReportDevice.ComputerId',
        Value: 'comp-id-123'
      },
      {
        Operator: 'and',
        Operands: [
          {
            Operator: '==',
            Attribute: 'ReportDevice.DomainName',
            Value: 'dom-name'
          },
          {
            Operator: 'like',
            Attribute: 'ReportDevice.ComputerName',
            Value: '%comp-name%'
          },
          {
            Operator: 'and',
            Operands: [
              {
                Operator: '==',
                Attribute: 'ReportDevice.DeviceId',
                Value: 'dev-id'
              },
              {
                Operator: '==',
                Attribute: 'ReportDevice.DeviceName',
                Value: 'dev-name'
              },
              {
                Operator: 'and',
                Operands: [
                  {
                    Operator: '==',
                    Attribute: 'ReportDevice.DomainId',
                    Value: 'dom-id'
                  },
                  {
                    Operator: '==',
                    Attribute: 'ReportDevice.DomainNumber',
                    Value: 'dom-num'
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  },
  {
    Operator: 'and',
    Operands: [
      {
        Operator: '==',
        Attribute: 'ReportDevice.ComputerId',
        Value: 'comp-id-123'
      },
      {
        Operator: 'and',
        Operands: [
          {
            Operator: '==',
            Attribute: 'ReportDevice.DomainName',
            Value: 'dom-name'
          },
          {
            Operator: 'like',
            Attribute: 'ReportDevice.ComputerName',
            Value: '%comp-name%'
          },
          {
            Operator: 'and',
            Operands: [
              {
                Operator: '==',
                Attribute: 'ReportDevice.DeviceId',
                Value: 'dev-id'
              },
              {
                Operator: '==',
                Attribute: 'ReportDevice.DeviceName',
                Value: 'dev-name'
              },
              {
                Operator: 'and',
                Operands: [
                  {
                    Operator: '==',
                    Attribute: 'ReportDevice.DomainId',
                    Value: 'dom-id'
                  },
                  {
                    Operator: '==',
                    Attribute: 'ReportDevice.DomainNumber',
                    Value: 'dom-num'
                  },
                  {
                    Operator: 'and',
                    Operands: [
                      {
                        Operator: '==',
                        Attribute: 'ReportDevice.DeviceNumber',
                        Value: 'dev-num-999'
                      }
                    ]
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  }
]

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

// const fields = {
//   string: {
//     label: 'String',
//     type: 'text'
//   },
//   multiselect: {
//     label: 'Multi Select',
//     type: 'multiselect',
//     valueSources: ['value'],
//     fieldSettings: {
//       listValues: [
//         { value: 'a', title: 'A' },
//         { value: 'b', title: 'B' },
//         { value: 'c', title: 'C' }
//       ]
//     }
//   }
// }

const App = () => {
  const onChange = ({ query }) => {
    document.getElementById('query').innerHTML = JSON.stringify(query, null, 4)
  }

  return (
    <div className="app">
      <QueryBuilder
        // meta={[
        //   {
        //     DisplayName: 'Device AD Site Name',
        //     Type: 'String',
        //     Attribute: 'ReportDevice.ADSiteName'
        //   },
        //   {
        //     DisplayName: 'Device Tag Department',
        //     Type: 'DeviceTag',
        //     Attribute: ' DeviceTag.Department'
        //   },
        //   {
        //     DisplayName: 'Software Tag AdobeProducts',
        //     Type: 'SoftwareTag',
        //     Attribute: ' SoftwareTag.AdobeProducts'
        //   }
        // ]}
        // todo: remove fields
        fields={fields}
        query={queries[1]}
        onChange={onChange}
      />

      <div
        className="panel panel--red"
        style={{
          width: '100%',
          margin: '0'
        }}
      >
        <h3 className="title">Node Leaf Query</h3>
        <span>
          <i>i.e. generated via processing tree query</i>
        </span>
        <xmp id="query">{JSON.stringify({}, null, 4)}</xmp>
      </div>
    </div>
  )
}

export default App
