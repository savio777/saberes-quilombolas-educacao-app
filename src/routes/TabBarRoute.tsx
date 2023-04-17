import React, {useEffect} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {useDispatch} from 'react-redux';

import {TabBarCustomized, Header} from '../components';
import {
  Home,
  Presentation,
  ClassroomStrategies,
  SignificantMethodologies,
  KnowledgeLibrary,
  Profile,
  LanguageSpace,
  Saved,
  KnowledgeLibraryExplanatoryTable,
  KnowledgeLibraryCurriculumOrganization,
  DidacticResourcesSupportMaterials,
  PartTwo,
  PartFive,
  PartFour,
  PartThree,
} from '../screens';
import {cleanFiles} from '../store/modules/Files';

const TabBar = createBottomTabNavigator();

const TabBarRoute = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(cleanFiles());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <TabBar.Navigator
      initialRouteName="Presentation"
      tabBar={props => <TabBarCustomized {...props} />}>
      <TabBar.Screen
        name="Home"
        component={Home}
        options={{title: 'Início', header: () => <Header title="Início" />}}
      />
      <TabBar.Screen
        name="Saved"
        component={Saved}
        options={{title: 'Salvos', header: () => <Header title="Salvos" />}}
      />
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
        name="DidacticResourcesSupportMaterials"
        component={DidacticResourcesSupportMaterials}
        options={{
          title: 'DidacticResourcesSupportMaterials',
          header: () => (
            <Header title="Materiais de apoio para educação escolar quilombola do Maranhão" />
          ),
        }}
      />
      <TabBar.Screen
        name="SignificantMethodologies"
        component={SignificantMethodologies}
        options={{
          title: 'SignificantMethodologies',
          header: () => (
            <Header title="Organizações pedagógicas para educação escolar quilombola" />
          ),
        }}
      />
      <TabBar.Screen
        name="KnowledgeLibrary"
        component={KnowledgeLibrary}
        options={{
          title: 'KnowledgeLibrary',
          header: () => (
            <Header title="Coleções de textos sobre educação quilombola" />
          ),
        }}
      />
      <TabBar.Screen
        name="KnowledgeLibraryExplanatoryTable"
        component={KnowledgeLibraryExplanatoryTable}
        options={{
          title: 'KnowledgeLibraryExplanatoryTable',
          header: () => <Header title="Quadro Explicativo" />,
        }}
      />
      <TabBar.Screen
        name="KnowledgeLibraryCurriculumOrganization"
        component={KnowledgeLibraryCurriculumOrganization}
        options={{
          title: 'KnowledgeLibraryCurriculumOrganization',
          header: () => <Header title="Organização Currícular" />,
        }}
      />
      <TabBar.Screen
        name="LanguageSpace"
        component={LanguageSpace}
        options={{
          title: 'LanguageSpace',
          header: () => (
            <Header title="Materiais de apoio para construção de aulas ilustrativas e dinâmicas" />
          ),
        }}
      />

      <TabBar.Screen
        name="PartTwo"
        component={PartTwo}
        options={{
          title: 'PartTwo',
          header: () => (
            <Header title="Organização didática para o espaço escolar quilombola" />
          ),
        }}
      />

      <TabBar.Screen
        name="PartThree"
        component={PartThree}
        options={{
          title: 'PartThree',
          header: () => <Header title="Coleções de texto" />,
        }}
      />

      <TabBar.Screen
        name="PartFour"
        component={PartFour}
        options={{
          title: 'PartFour',
          header: () => <Header title="Organizações didáticos" />,
        }}
      />

      <TabBar.Screen
        name="PartFive"
        component={PartFive}
        options={{
          title: 'PartFive',
          header: () => <Header title="Materiais de apoio" />,
        }}
      />
    </TabBar.Navigator>
  );
};

export default TabBarRoute;
