import React from 'react'

import QueryBuilder from './components/query-builder'

const App = () => {
  // NB Our component returns query (i.e. nodeLeafQuery), BUT also treeQuery for development
  const onChange = ({ query, treeQuery }) => {
    document.getElementById('tree-query').innerHTML = JSON.stringify(
      treeQuery,
      null,
      2
    )
    document.getElementById('node-leaf-query').innerHTML = JSON.stringify(
      query,
      null,
      2
    )
  }

  return (
    <div className="app">
      <QueryBuilder query={{}} onChange={onChange} />

      <div className="panel">
        <h3 className="title">Tree Query</h3>
        <span style={{ visibility: 'hidden' }}>
          <i>---</i>
        </span>
        <xmp id="tree-query"></xmp>
      </div>

      <div className="panel">
        <h3 className="title">New Node / Leaf Query</h3>
        <span>
          <i>i.e. processed tree leaf query</i>
        </span>
        <xmp id="node-leaf-query">{JSON.stringify({}, null, 2)}</xmp>
      </div>
    </div>
  )
}

export default App
