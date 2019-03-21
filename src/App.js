import React, {Component} from 'react';
import './App.css';
import AuthStore, { increaseCount } from './AuthStore'
import { observer } from 'mobx-react';
import {Route, Switch} from 'react-router'
import ProfileStore, {getProfileById} from './ProfileStore';

const P = props => (
  <p>{props.count}</p>
)

const users = [
  {
    id: 1,
    name: 'test'
  },
  {
    id: 2,
    name: 'test2'
  }
]

export const ProfileSingle2 = observer(props => {
  if(!props.store.profile) 
      return <div>Placeholder</div>

    return (
      <div>this is profile detail of id {props.store.profile.name}</div>
    )
})

export const withProfile = Comp => props => {
  getProfileById(props.match.params.id)
  return <Comp store={ProfileStore} />
}

class Home extends Component {
  render() {
    return (
      <div>
        this is page Home 
      </div>
    )
  }
}

const ProfileList = props => (
  <p>This is list of profile</p>
)

const ProfileEdit = props => (
  <p>This is edit profile page</p>
)

class Profile extends Component {
  render() {
    return (
      <div >
        <div style={{
          backgroundColor: '#f3e'
        }}><p>This is profile page</p></div>
        <Switch>
          <Route exact path="/profile" component={ProfileList} />
          <Route exact path="/profile/edit" component={ProfileEdit} />
          <Route exact path="/profile/:id(\d+)" component={withProfile(ProfileSingle2)} />
          <Route path="*" component={props => (<p>404</p>)} />
        </Switch>
      </div>
    )
  }
}


class About extends Component {
  render() {
    return (
      <div>
        this is page About
      </div>
    )
  }
}

@observer
class App extends Component {
  
  state = {
    count: 0,
    page: 'home',
    a: 1,
    b: 2
  }

  renderPages(page) {
    switch(page) {
      case 'home': 
        return <Home />
      case 'profile':
        return <Profile />
      case 'about':
        return <About />
    }
  }

  render() {
    return (
      <div className="App">
        <button onClick={increaseCount}>Increase Score</button>
        <Route exact path="/" component={Home} />
        <Route path="/profile" component={Profile} />
        <Route exact path="/about" component={About} />
      </div>
    );
  }
}

export default App;
