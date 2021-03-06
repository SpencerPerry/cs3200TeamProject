import React, { Component } from 'react';
import {
		Platform,
		StyleSheet,
		Text,
		View
} from 'react-native';
import { 
		NavigationActions,
		StackNavigator, 
    TabNavigator,
} from 'react-navigation';

import Events from './src/Components/Events';
import Births from './src/Components/Births';
import Deaths from './src/Components/Deaths';

const RootTab = TabNavigator({
	TabOne: {
			screen: Events,
			navigationOptions: {
          title: 'Events',
      }
	},
	TabTwo: {
			screen: Births,
			navigationOptions: {
					title: 'Births'
			}
  },
  TabThree: {
			screen: Deaths,
			navigationOptions: {
					title: 'Deaths'
			}
  }
},
{
  tabBarPosition: 'bottom'
});

//The base component for the tab menu
export default class App extends Component {
		render() {
			return (
				<RootTab />
			);
		}
}