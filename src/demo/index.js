import { useEffect, useState } from 'react'
import QueryBuilder from './components/query-builder'

const SPOOFAPI = ({ ms = 1000, error = '' } = {}) =>
  new Promise((resolve, reject) => {
    if (error) {
      reject()
    } else {
      setTimeout(resolve, ms)
    }
  })

const App = () => {
  const [loading, setLoading] = useState(true)
  const [metaPayload, setMetaPayload] = useState([])
  const [valuesPayload, setValuesPayload] = useState([])
  const [queryPayload, setQueryPayload] = useState({})

  useEffect(() => {
    SPOOFAPI().then(() => {
      setMetaPayload([
        {
          Id: 1,
          DisplayName: 'Device AD Site Name',
          Type: 'String',
          Attribute: 'ReportDevice.ADSiteName'
        },
        {
          Id: 2,
          DisplayName: 'Dummy - Number',
          Type: 'Int',
          Attribute: 'Dummy.Number'
        },
        {
          Id: 3,
          DisplayName: 'Dummy - Boolean',
          Type: 'Boolean',
          Attribute: 'Dummy.Boolean'
        },
        {
          Id: 23,
          DisplayName: 'Device Tag Department',
          Type: 'DeviceTag',
          Attribute: 'DeviceTag.Department'
        },
        {
          Id: 98,
          DisplayName: 'Software Tag AdobeProducts',
          Type: 'SoftwareTag',
          Attribute: 'SoftwareTag.AdobeProducts'
        }
      ])

      setValuesPayload([
        {
          Id: 98,
          Name: 'Adobe Products',
          TypeId: 1,
          TypeName: 'SoftwareTag',
          Values: [
            { Id: 4, Value: 'Illustrator', PropertyId: 1 },
            { Id: 1, Value: 'Photoshop', PropertyId: 1 },
            { Id: 2, Value: 'Acrobat', PropertyId: 1 }
          ]
        },
        {
          Id: 23,
          Name: 'Deployment Groups',
          TypeId: 1,
          TypeName: 'DeviceTag',
          Values: [
            { Id: 5, Value: 'Group 1 (Test devices)', PropertyId: 2 },
            { Id: 6, Value: 'Group 2 (IT Pilot devices)', PropertyId: 2 },
            { Id: 7, Value: 'Group 3 (Pilot devices)', PropertyId: 2 },
            { Id: 8, Value: 'Group 4 (non critical devices)', PropertyId: 2 },
            { Id: 9, Value: 'Group 5 (critical devices)', PropertyId: 2 }
          ]
        }
      ])

      setQueryPayload({
        Operator: 'and',
        Operands: [
          {
            Operator: '==',
            Attribute: 'Dummy.Number',
            Value: 777
          },
          {
            Operator: '==',
            Attribute: 'Dummy.Boolean',
            Value: true
          },
          {
            Operator: 'and',
            Operands: [
              {
                Operator: 'In',
                Attribute: 'DeviceTag.Department',
                Value: 'Group 2 (IT Pilot devices),Group 5 (critical devices)'
              },
              {
                Operator: 'and',
                Operands: [
                  {
                    Operator: 'In',
                    Attribute: 'SoftwareTag.AdobeProducts',
                    Value: 'Acrobat'
                  },
                  {
                    Operator: 'and',
                    Operands: [
                      {
                        Operator: 'In',
                        Attribute: 'SoftwareTag.AdobeProducts',
                        Value: 'Illustrator,Photoshop'
                      },
                      {
                        Operator: 'and',
                        Operands: [
                          {
                            Operator: 'like',
                            Attribute: 'ReportDevice.ADSiteName',
                            Value: '%1E.local%'
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
      })
      setLoading(false)
    })
  }, [])

  const onChange = ({ query }) => {
    document.getElementById('query').innerHTML = JSON.stringify(query, null, 4)
  }

  return (
    <div className="app">
      {loading ? (
        <p>LOADING</p>
      ) : (
        <QueryBuilder
          metaPayload={metaPayload}
          valuesPayload={valuesPayload}
          queryPayload={queryPayload}
          onChange={onChange}
        />
      )}

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

      <div
        className="panel panel--blue"
        style={{
          width: '100%',
          margin: '0'
        }}
      ></div>
    </div>
  )
}

export default App
