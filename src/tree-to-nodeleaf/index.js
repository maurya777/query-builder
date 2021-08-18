import React from 'react'

import { Utils as QbUtils } from 'react-awesome-query-builder'

import QueryBuilder from './components/query-builder'

import getData from '../data'
const data = getData({ id: QbUtils.uuid() })

const App = () => {
  const onChange = ({ nodeLeafQuery, outputs }) => {
    document.getElementById('node-leaf-query').innerHTML = JSON.stringify(
      nodeLeafQuery,
      null,
      4
    )
    document.getElementById('outputs').innerHTML = JSON.stringify(
      outputs,
      null,
      4
    )
  }

  const num = window.location.hash.split('?level=')[1]

  return (
    <div className="app">
      {/* <QueryBuilder
        treeQuery={{ fields: data.fields, query: data[num].tree }}
        onChange={onChange}
      /> */}

      <div className="panel panel--blue">
        <h3 className="title">Tree Query (Static)</h3>
        <span>
          <i>entered manually into demo via data.js and query string in hash</i>
        </span>
        <xmp>{JSON.stringify(data[num].tree, null, 4)}</xmp>
      </div>

      <div className="panel panel--red">
        <h3 className="title">Node Leaf Query</h3>
        <span>
          <i>i.e. generated via processing tree query</i>
        </span>
        <xmp id="node-leaf-query">{JSON.stringify({}, null, 4)}</xmp>
      </div>

      <div
        className="panel"
        style={{
          width: '100%',
          margin: '0'
        }}
      >
        <h3 className="title">Outputs</h3>
        <span style={{ visibility: 'hidden' }}>
          <i>---</i>
        </span>
        <xmp id="outputs">{JSON.stringify({}, null, 4)}</xmp>
      </div>
    </div>
  )
}

export default App
