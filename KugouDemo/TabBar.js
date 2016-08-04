'use-strict';
import React, {Component} from 'react';
import {
	View,
	Text,
	StyleSheet,
	TouchableOpacity,
	LayoutAnimation,
} from 'react-native';

import ScrollableTabView, {ScrollableTabBar} from 'react-native-scrollable-tab-view';

var ProductPage = require('./product.js');
var RichPage = require('./rich.js');

class Tabbar extends Component{
	constructor(props) {
	  super(props);
	  this.state = {};
	}

	render(){
		return(
			<ScrollableTabView style={styles.wraper} {...this.props}>
		        <ProductPage tabLabel="作品榜" {...this.props}/>
		        <RichPage tabLabel="富豪榜" />
      		</ScrollableTabView>
		)
	}
}

const styles = StyleSheet.create({
	wraper: {
		backgroundColor: 'transparent',
	}
})

module.exports = Tabbar;