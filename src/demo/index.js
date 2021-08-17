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

/*
// devicetag + softwaretag are multi select
// multiselect values are comma separated. e.g. 

Device Tag rule Where TagName = Department and TagValues are Biztech,Engineering,Finance,HR
{
    "Operator": "and",
    "Operands": [
        {
            "Operator": "In",
            "Attribute": "DeviceTag.Department",
            "Value": "Biztech, Engineering, Finance, HR"
        }
    ]
}

Software Tag rule where TagName = AdobeProducts and TagValues are Acrobat, Illustrator,Photoshop

               {
    "Operator": "and",
    "Operands": [
        {
            "Operator": "In",
            "Attribute": "SoftwareTag.AdobeProducts",
            "Value": "Acrobat,Illustrator,Photoshop"
        }
    ]
}
*/
// https://github.com/ukrbublik/react-awesome-query-builder/blob/master/CONFIG.adoc
const fields = {
  text: {
    label: 'Text',
    type: 'text',
    tooltip: 'foo'
    // mode: 'none' // some, all, none
  },
  number: {
    label: 'Number',
    type: 'number',
    fieldSettings: {
      min: 0
      // max: 100
    },
    valueSources: ['value'],
    preferWidgets: ['number']
  },
  slider: {
    label: 'Slider',
    type: 'number', // NB slider has type of numner ?
    valueSources: ['value'],
    fieldSettings: {
      min: 10,
      max: 100
    },
    preferWidgets: ['slider', 'rangeslider', 'number']
  },
  options: {
    label: 'Select',
    type: 'select',
    valueSources: ['value'],
    fieldSettings: {
      listValues: [
        { value: 'one', title: 'One' },
        { value: 'two', title: 'Two' },
        { value: 'three', title: 'Three' }
      ]
    }
  },
  boolean: {
    label: 'Boolean',
    type: 'boolean',
    operators: ['equal'],
    valueSources: ['value']
  },
  multiselect: {
    label: 'Multi Select',
    type: 'multiselect',
    valueSources: ['value'],
    fieldSettings: {
      listValues: [
        { value: 'a', title: 'A' },
        { value: 'b', title: 'B' },
        { value: 'C', title: 'C' }
      ]
    }
  },
  treeselect: {
    label: 'Tree Select',
    type: 'treeselect' // not working?
  },
  treemultiselect: {
    label: 'Tree Multi Select',
    type: 'treemultiselect',
    valueSources: ['value'],
    fieldSettings: {
      listValues: [
        { value: 'a', title: 'A' },
        { value: 'b', title: 'B' },
        { value: 'b', title: 'C' }
      ]
    }
  },
  datetime: {
    label: 'Date Time',
    type: 'datetime' // only showing one date
  },
  time: {
    label: 'Time',
    type: 'time' // only showing one date
  },
  date: {
    label: 'Date',
    type: 'date' // only showing one date
  },
  user: {
    type: '!struct', // special keyword for comlex fields
    label: 'User',
    subfields: {
      // subfields of complex field
      firstName: {
        type: 'text',
        label: 'First Name',
        label2: 'firstname' //optional, see below
        // fieldSettings: {
        //   validateValue: (val, _fieldSettings) => val.length <= 20
        // }
      },
      lastName: {
        type: 'text',
        label: 'Last Name',
        label2: 'lastname' //optional, see below
        // fieldSettings: {
        //   validateValue: (val, _fieldSettings) => val.length <= 20
        // }
      }
    }
  }
}

const textFields = {
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

const App = () => {
  const onChange = ({ query }) => {
    document.getElementById('query').innerHTML = JSON.stringify(query, null, 4)
  }

  return (
    <div className="app">
      <QueryBuilder fields={fields} query={queries[0]} onChange={onChange} />

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
