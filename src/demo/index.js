import React from 'react'

import QueryBuilder from './components/query-builder'

/*
When user will select DeviceTag or Software Tag from list, then UI need to call
separate API to fetch values for given Tag Key.
*/

const App = () => {
  const onChange = ({ query }) => {
    document.getElementById('query').innerHTML = JSON.stringify(query, null, 4)
  }

  return (
    <div className="app">
      <QueryBuilder
        meta={[
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
        ]}
        query={{
          Operator: 'and',
          Operands: []
        }}
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
