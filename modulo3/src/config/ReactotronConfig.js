import Reactotron from 'reactotron-react-native'
import { reactotronRedux } from 'reactotron-redux'
import reactotronSaga from 'reactotron-redux-saga'

// 192.168.25.2:19000
if (__DEV__) {
  const tron = Reactotron.configure({ host: '192.168.25.2', port: 9090 })
    .useReactNative()
    .use(reactotronRedux())
    .use(reactotronSaga())
    .connect()

  console.tron = tron
  tron.clear()
}
