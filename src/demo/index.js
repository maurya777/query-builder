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
  const [meta, setMeta] = useState([])
  const [values, setValues] = useState([])
  const [query, setQuery] = useState({})

  useEffect(() => {
    SPOOFAPI().then(() => {
      setMeta([
        {
          DisplayName: 'Device AD Site Name',
          Type: 'String',
          Attribute: 'ReportDevice.ADSiteName'
        },
        {
          DisplayName: 'Device Tag Department',
          Type: 'DeviceTag',
          Attribute: 'DeviceTag.Department'
        },
        {
          DisplayName: 'Software Tag AdobeProducts',
          Type: 'SoftwareTag',
          Attribute: 'SoftwareTag.AdobeProducts'
        }
      ])

      setValues([
        {
          Attribute: 'DeviceTag.Department',
          Values: ['Biztech', 'Engineering', 'Finance', 'HR']
        },
        {
          Attribute: 'SoftwareTag.AdobeProducts',
          Values: ['Acrobat', 'Illustrator', 'Photoshop']
        }
      ])

      setQuery({
        Operator: 'and',
        Operands: [
          {
            Operator: '==',
            Attribute: 'ReportDevice.ADSiteName',
            Value: '1E.local'
          },
          {
            Operator: 'and',
            Operands: [
              {
                Operator: 'In',
                Attribute: 'DeviceTag.Department',
                Value: 'Biztech'
              },
              {
                Operator: 'and',
                Operands: [
                  {
                    Operator: 'In',
                    Attribute: 'DeviceTag.Department',
                    Value: 'Engineering'
                  },
                  {
                    Operator: 'and',
                    Operands: [
                      {
                        Operator: 'In',
                        Attribute: 'DeviceTag.Department',
                        Value: 'Engineering,Finance'
                      },
                      {
                        Operator: 'and',
                        Operands: [
                          {
                            Operator: 'In',
                            Attribute: 'DeviceTag.Department',
                            Value: 'HR'
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
          meta={meta}
          values={values}
          query={query}
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
