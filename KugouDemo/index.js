'use strict';
import React, {Component} from 'react';
import{
	View,
	Text,
	StyleSheet
} from 'react-native';


var TabBar = require('./TabBar');


class KugouDemo extends Component{
	constructor(props) {
	  super(props);
	  console.log(props)
	  this.state = {};
	}

	render(){
		return(
			<TabBar 
				tabBarUnderlineColor='#19ABFF'
				tabBarActiveTextColor = "#19ABFF"
				tabBarInactiveTextColor = '#000'
				tabBarUnderlineHeight={2}
				{...this.props}
			/>
		)
	}
}

module.exports = KugouDemo;