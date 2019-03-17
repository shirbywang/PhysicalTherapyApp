/** @format */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

global.newuser=true;
global.newpoints=0;
global.returningpoints=25;
global.newstreak=0;
global.returningstreak=5;

AppRegistry.registerComponent(appName, () => App);
