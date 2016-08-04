
    /**
   * Sample React Native App
   * https://github.com/facebook/react-native
   * @flow
   */
   'use strict'
  import React, {
    Component
  } from 'react';
  import {
    AppRegistry,
    StyleSheet,
    ScrollView,
    Text,
    Image,
    View,
    listView,
    Navigator,
    NativeModules,
    requireNativeComponent,
  } from 'react-native';

// var ListViewCom = require('./listView/index.js');
// var Bar = require('./listView/tabBar.js');
// var AnimatedDemo = require('./listView/animatedDemo.js')
// var TabBarDemo = require('./listView/tabBarDemo.js');
// var StatusBarExample = require('./listView/statusBarDemo.js');
// var WithLabel = require('./listView/textInputDemo.js')
// var ScrollTabDemo = require('./listView/scrollableTabView.js');
var KugouDemo = require('./KugouDemo/index.js');

var RNBridgeModule = NativeModules.RNBridgeModule;

var Butoom = require('./component/button.js');

class NativeTest extends Component{
    constructor(props) {
      super(props);
      this.state = {};
    }

    componentDidMount() {
        let d1 = new Date().getTime()
        // RNBridgeModule.RNecomd5('2a76be0df7ceec0c', (error, events) => {
        //     // let d2 = new Date().getTime()
        //     // console.log(d2 - d1);
        //     error ? console.log(error) : console.log(events); 
        // })  
    }

    render () {
        return(
           <Navigator
               initialRoute={{name: '排行版',component: KugouDemo}}
               configureScene={(route) => {
                return Navigator.SceneConfigs.PushFromRight;
              }}
              sceneStyle = {styles.bg}
               renderScene={(route, navigator) => {
                    let Component = route.component; 
                    return(
                         <Component {...route.params} navigator={navigator} />
                    )
                 }
               }
             />
           // <Butoom />
        )
    }
}

const styles = StyleSheet.create({
  bg: {
    backgroundColor: 'rgba(0,0,0,0)'
  }
})

AppRegistry.registerComponent('NativeTest', () => NativeTest);
