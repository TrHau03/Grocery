/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useContext } from 'react';
import { UserContext, UserProvider } from './src/component/Login/API/LoginProvider';
import { Provider } from 'react-redux';
import store from './src/component/Redux/store';
import { AppProvider } from './src/component/App/API/AppProvider';
import AppNavigation from './src/component/Navigation/Navigation';
function App(): JSX.Element {
  const { isLoggedIn } = useContext(UserContext);
  return (
    <Provider store={store}>
      <UserProvider>
        <AppProvider>
          <AppNavigation/>
        </AppProvider>
      </UserProvider>
    </Provider>
  );
}

export default App;
