import { HashRouter as Router, Switch, Route } from 'react-router-dom'
import { withNav } from './with-nav'
import QueryDemo01 from './query-demo-01'

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={withNav(QueryDemo01)} />
      </Switch>
    </Router>
  )
}

export default App
