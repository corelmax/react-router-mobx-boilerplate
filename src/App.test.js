import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer'
import App, {ProfileSingle2} from './App';
import ProfileStore from './ProfileStore'

describe('ProfileSingle2', () => {
  it('should render placeholder when no profile', done => {
    const mockProps = {
      store: ProfileStore
    }
    const snapshot = renderer.create(<ProfileSingle2 {...mockProps} />).toJSON()
    expect(snapshot).toMatchSnapshot()
    done()
  })

  it('should render profile if has profile', done => {
    const mockProps = {
      store: ProfileStore
    }
    ProfileStore.profile = {id: 1, name: 'test'}
    const snapshot = renderer.create(<ProfileSingle2 {...mockProps} />).toJSON()
    expect(snapshot).toMatchSnapshot()
    done()
  })
})