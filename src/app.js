import { HashRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import { withNav } from './with-nav'
import QueryDemo01 from './query-demo-01'

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/01" component={withNav(QueryDemo01)} />
        <Redirect to="/01" />
      </Switch>
    </Router>
  )
}

export default App
