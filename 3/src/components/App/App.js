// Libs
import React from 'react'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'

// Bootstrap - Components
import { ListGroup } from 'react-bootstrap'

// Components
import Home from '../Home'
import About from '../About'
import NoMatch from '../NoMatch'
import Message from '../Message'

/*
class App extends React.Component {
  render () {
    return (
      <div className='App'>
        <div className='App-header'>
          <h2>
            Hi, hi boiii how are yu
          </h2>
        </div>
      </div>
    )
  }
}
*/

const App = () => {
  return (
    <Router>
      <div className='App'>
        <h2>
          {'Hi, hi boiii how are yu'}
        </h2>
        <hr />

        <div className='App-header'>
          <ul>
            <li>
              <Link to='/'>
                {'Home'}
              </Link>
            </li>
            <li>
              <Link to='/about'>
                {'About'}
              </Link>
            </li>
            <li>
              <Link to='/message/perro flaco'>
                {'Testo'}
              </Link>
            </li>
          </ul>
          <hr />
          <hr />
          <h3>
            {'React bootstrap listgroup'}
          </h3>
          <ListGroup as='ul'>
            <ListGroup.Item
              action
              href='/'
            >
              {'Home'}
            </ListGroup.Item>
            <ListGroup.Item
              action
              href='/about'
            >
              {'About'}
            </ListGroup.Item>
          </ListGroup>
          <hr />
          <hr />
        </div>

        <div className='app-body'>
          <Switch>
            <Route
              component={Home}
              exact
              path='/'
            />
            <Route
              component={About}
              path='/about'
            />
            <Route
              component={Message}
              path='/message/:text'
            />
            <Route
              component={NoMatch}
            />
          </Switch>
        </div>

      </div>
    </Router>
  )
}

export default App
