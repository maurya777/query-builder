import { HashRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import { withNav } from './with-nav'
import QueryDemo01 from './query-demo-01'
import QueryDemo02 from './query-demo-02'

const App = () => {
  return (
    <Router>
      <Switch>
        <Route
          exact
          path="/tree-to-nodeleaf"
          component={withNav(QueryDemo01)}
        />
        <Route
          exact
          path="/nodeleaf-to-tree"
          component={withNav(QueryDemo02)}
        />
        <Redirect to="/tree-to-nodeleaf" />
      </Switch>
    </Router>
  )
}

export default App
