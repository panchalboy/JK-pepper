import React, {useEffect, useState} from 'react';
import {StatusBar, Text, LogBox, AsyncStorage} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import 'react-native-gesture-handler';
import {Provider as PaperProvider} from 'react-native-paper';

import {initialState, UserContext} from './src/contexts/UserContext';
import {Index} from './src/screens/Index';

LogBox.ignoreAllLogs();

const App = () => {
  const [auth, setAuth] = useState(initialState);
  const [loading, setLoading] = useState(true);

  const setAuthPayload = async (authPayload) => {
    try {
      setAuth(authPayload);
      await AsyncStorage.setItem('auth', JSON.stringify(authPayload));
    } catch (error) {
      console.log('Error in Asyncstorage', error);
    }
  };

  const logout = () => {
    setAuthPayload({...initialState});
  };

  const fetchAuthBeforeAppLoad = async () => {
    try {
      const authAsync = await AsyncStorage.getItem('auth');
      if (authAsync) {
        setAuth(JSON.parse(authAsync));
        setLoading(false);
      } else {
        setLoading(false);
      }
    } catch (error) {
      console.log(error, 'Error in Async storage');
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAuthBeforeAppLoad();
  }, []);

  return (
    <PaperProvider>
      <NavigationContainer>
        <UserContext.Provider
          value={{authPayload: auth, setAuthPayload, logout}}>
          <StatusBar translucent backgroundColor="transparent" />
          {loading && <Text>Loading...</Text>}
          {!loading && <Index />}
        </UserContext.Provider>
      </NavigationContainer>
    </PaperProvider>
  );
};

export default App;
