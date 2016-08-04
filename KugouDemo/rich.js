'use-strict';
import React, {Component} from 'react';
import {
	View,
	Text,
	StyleSheet,
	Image,
} from 'react-native';

var testDate = [{"rank":1,"playerId":669371659,"rankChange":0,"nickname":"江南烟梦","headimg":"/sing_img/T10LZ4BTD_1RCvBVdK.jpg","gender":1,"totalKB":59492},{"rank":2,"playerId":822507356,"rankChange":1,"nickname":"13168AA","headimg":"/sing_img/T1VbVmBCdT1RCvBVdK.jpg","gender":1,"totalKB":22146},{"rank":3,"playerId":883223354,"rankChange":1,"nickname":"牛屎a","headimg":"/sing_img/T1t9YmB5Vv1RCvBVdK.jpg","gender":1,"totalKB":12442}]


var SubRankCom = require('./rank_subItem.js')


class Rich extends Component{
	constructor(props) {
	  super(props);
	
	  this.state = {};
	}

	render(){
		return(
			<View>
				<SubRankCom data={testDate} title="富豪日版" picUrl={0} />
				<SubRankCom data={testDate} title="富豪周版" picUrl={1} />
				<SubRankCom data={testDate} title="富豪月版" picUrl={2} />
			</View>
		)
	}
}

const styles = StyleSheet.create({
	item: {
		marginLeft: 8,
		marginTop: 10,
	},
	title: {
		fontSize: 16,
		color: '#666',
		marginBottom: 5,
	},
	con: {
		flexDirection: 'row',
	},
	pic: {
		width: 98,
		height: 102,
		marginRight: 8,
	},
	img: {
		width: 98,
		height: 102,
	},
	right: {
		flex: 1,
		height: 102,
		flexDirection: 'column',
	},
	subItem: {
		flexDirection: 'row',
		marginTop: 4,
		alignItems: 'center',
	},
	headimg: {
		width: 30,
		height: 30,
		marginRight: 8,
		borderRadius: 15,
	},
	nikeName: {
		fontSize: 14,
		color: '#666',
	}

})

module.exports = Rich;
