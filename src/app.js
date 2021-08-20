import { HashRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import Demo from './demo'

import './style.css'

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Demo} />
        <Redirect to="/" />
      </Switch>
    </Router>
  )
}

export default App
