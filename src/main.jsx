import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './styles/index.css'
import { store } from './redux-toolkit-store/store.jsx'
import { Provider } from 'react-redux'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>
)
