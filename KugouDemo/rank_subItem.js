'use-strict';
import React, {Component} from 'react';
import {
	View,
	Text,
	StyleSheet,
	Image,
} from 'react-native';

class SubItem extends Component{
	constructor(props) {
	  super(props);
	  this.state = {};
	}

	render(){
		var picUrl;
		if(this.props.picUrl == 0){
			picUrl = require('../img/day_rank.jpg')
		} else if(this.props.picUrl == 1){
			picUrl = require('../img/week_rank.jpg');
		} else if(this.props.picUrl == 2){
			picUrl = require('../img/month_rank.jpg')
		}
		return(
			<View style={styles.item}>
				<Text style={styles.title}>{this.props.title}</Text>
				<View style={styles.con}>
					<View style={styles.pic}>
						<Image style={styles.img} source={picUrl} />
					</View>
					<View style={styles.right}>
						{this.renderSub(this.props.data)}
					</View>
				</View>
			</View>
		)
	}

	renderSub(dataArray){
		var tmp = [];
		dataArray.forEach((val, index) => {
			var picUrl = 'http://img.acsing.kugou.com/v2' + val.headimg;
			tmp.push(
				<View style={styles.subItem} key={index}>
					<Image style={styles.headimg} source={{uri: picUrl}} />
					<Text style={styles.nikeName} >{val.nickname}</Text>
				</View>
			)
		})
		return tmp;
	}
}

const styles = StyleSheet.create({
	item: {
		marginLeft: 8,
		marginTop: 14,
		paddingBottom: 14,
		borderBottomWidth: 1,
		borderBottomColor: '#eee',
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

module.exports = SubItem;
