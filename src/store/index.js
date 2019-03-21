import {RouterStore, syncHistoryWithStore} from 'mobx-react-router'

export default history => {
  const routingStore = new RouterStore();

  return {
      stores: {
        routing: routingStore,
      }, 
      history: syncHistoryWithStore(history, routingStore)
  }
}