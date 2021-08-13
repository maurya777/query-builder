import { HashRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import { withNav } from './with-nav'
import TreeToNodeleaf from './tree-to-nodeleaf'
import NodeleafToTree from './nodeleaf-to-tree'

import './style.css'

const App = () => {
  return (
    <Router>
      <Switch>
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
        <Redirect to="/tree-to-nodeleaf" />
      </Switch>
    </Router>
  )
}

export default App
