import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Home } from '../pages/Home';
import { Cart } from '../pages/Cart';
import { ProductDetails } from '../pages/ProductDetails';
import { Drawer as DrawerComponent } from '../components';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const MainStack: React.FC = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        drawerContent={(props) => <DrawerComponent {...props}/>}
      >
        <Drawer.Screen
          name="MainStack"
          component={MainStackScreens}
          options={{ headerShown: false, drawerPosition: 'right' }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

const MainStackScreens: React.FC = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Cart"
        component={Cart}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ProductDetails"
        component={ProductDetails}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default MainStack;
