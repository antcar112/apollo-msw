import './index.css'
import ReactDOM from 'react-dom'

import { Provider } from 'apollo'
import { App } from './App'

ReactDOM.render(
  <Provider>
    <App />
  </Provider>,
  document.getElementById('root')
)
