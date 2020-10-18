import React from 'react';
import { Provider } from 'react-redux';
import Theme from 'components/Theme';
import configureStore from 'store/configureStore';
import Routes from 'routes';

const store = configureStore();

function App() {
  return (
    <Theme>
      <Provider store={store}>
        <Routes />
      </Provider>
    </Theme>
  );
}

export default App;
