import React from 'react'

import QueryBuilder from './components/query-builder'

import data from '../data'

const App = () => {
  const onChange = ({ treeQuery, outputs }) => {
    document.getElementById('tree-query').innerHTML = JSON.stringify(
      treeQuery,
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
      <QueryBuilder nodeLeafQuery={data[num].nodeLeaf} onChange={onChange} />

      <div className="panel panel--blue">
        <h3 className="title">Node Leaf Query (Static)</h3>
        <span>
          <i>entered manually into demo via data.js and query string in hash</i>
        </span>
        <xmp>{JSON.stringify(data[num].nodeLeaf, null, 4)}</xmp>
      </div>

      <div className="panel panel--red">
        <h3 className="title">Tree Query</h3>
        <span>
          <i>i.e. generated via processing node leaf query</i>
        </span>
        <xmp id="tree-query"></xmp>
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
