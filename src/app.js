import { HashRouter as Router, Switch, Route } from 'react-router-dom'
import { withNav } from './with-nav'
import Demo from './demo'
import TreeToNodeleaf from './tree-to-nodeleaf'
import NodeleafToTree from './nodeleaf-to-tree'

import './style.css'

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Demo} />
        <Route
          exact
          path="/tree-to-nodeleaf"
          component={withNav(TreeToNodeleaf)}
        />
        <Route
          exact
          path="/nodeleaf-to-tree"
          component={withNav(NodeleafToTree)}
        />
      </Switch>
    </Router>
  )
}

export default App
