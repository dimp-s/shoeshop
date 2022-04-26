import App from './App';
import { render } from 'react-dom';
import store from './redux/Store';
import { Provider } from 'react-redux';

const container = document.getElementById('root');
render(
  <Provider store={store}>
    <App />
  </Provider>,
  container
);
