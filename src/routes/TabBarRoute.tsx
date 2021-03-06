import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {TabBarCustomized, Header} from '../components';
import {
  Home,
  Presentation,
  ClassroomStrategies,
  SignificantMethodologies,
  KnowledgeLibrary,
  Profile,
} from '../screens';

const TabBar = createBottomTabNavigator();

const TabBarRoute = () => (
  <TabBar.Navigator
    initialRouteName="Presentation"
    tabBar={props => <TabBarCustomized {...props} />}>
    <TabBar.Screen
      name="Home"
      component={Home}
      options={{title: 'Início', header: () => <Header title="Início" />}}
    />
    <TabBar.Screen name="Saved" component={Home} options={{title: 'Salvos'}} />
    <TabBar.Screen
      name="Profile"
      component={Profile}
      options={{title: 'Perfil', headerShown: false}}
    />
    <TabBar.Screen
      name="Presentation"
      component={Presentation}
      options={{
        title: 'Presentation',
        header: () => <Header title="Apresentação" />,
      }}
    />
    <TabBar.Screen
      name="ClassroomStrategies"
      component={ClassroomStrategies}
      options={{
        title: 'ClassroomStrategies',
        header: () => <Header title="Estratégias para sala de aula" />,
      }}
    />
    <TabBar.Screen
      name="SignificantMethodologies"
      component={SignificantMethodologies}
      options={{
        title: 'SignificantMethodologies',
        header: () => (
          <Header title="Práticas pedagógicas e espaço escolar quilombola" />
        ),
      }}
    />
    <TabBar.Screen
      name="KnowledgeLibrary"
      component={KnowledgeLibrary}
      options={{
        title: 'KnowledgeLibrary',
        header: () => (
          <Header title="Coleções de textos sobre educação quilombola " />
        ),
      }}
    />
  </TabBar.Navigator>
);

export default TabBarRoute;
