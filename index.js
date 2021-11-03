/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './src/App';
import {name as appName} from './app.json';

//Entry Point    and Root Component of The App
AppRegistry.registerComponent(appName, () => App);
