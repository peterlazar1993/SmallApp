/**
 * @format
 */
import React from 'react'
import {AppRegistry, Image} from 'react-native';
import {name as appName} from './app.json';

const App = () => {
    return <Image style={{ marginTop: 100 }} source={require('./assets/img/quoteGreen.png')}/>
}

AppRegistry.registerComponent(appName, () => App);
