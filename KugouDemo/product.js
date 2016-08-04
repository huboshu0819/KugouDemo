'use-strict';
import React, {Component} from 'react';
import {
	View,
	Text,
	StyleSheet,
	Image,
	TouchableOpacity,
	LayoutAnimation,
	ListView,
	RefreshControl,
	Dimensions,
	NativeModules
} from 'react-native';

import RCTNativeAppEventEmitter from 'RCTNativeAppEventEmitter';  


var page = 1 ,newData = [];

var ScrollTabDemo = require('../listView/scrollableTabView.js');
var GiftedListView = require('react-native-gifted-listview');
var nativeMethod = NativeModules.MyClass;
var PicTxt = require('./picTxt.js');

var cityCodeNum = '440100';

class Product extends Component{
	constructor(props) {
	  super(props);
	  var dataSource = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})
	  this.state = {
	  	dataSource,
	  	loaded: false,
	  	refreshing: false,
	  };
	}

	componentDidMount(){
		var s = this;
		RCTNativeAppEventEmitter.addListener('changeCityCode',function(result){
		  	cityCodeNum = result.citycode;

		  	
		  	s.refs.GiftedListView._onRefresh()
		})
	}

	fetchDate(page, callback){
		var spage = page + '';

		nativeMethod.addEvent('http', 'aaaa',
			{
			appid: '1000',
			version: "8100",
			channel: '1009',
			longitude: '0',
			latitude: '0',
			cityCode: cityCodeNum,
			platform: '2',
			times: '1467958445263',
			token: '32c58639a8b1a6113046f73496d981144ea5bf1eff6bd8800790bc8be4185248',
			pid: '847835342',
			device: 'd5e63fe31fc2f34bfe8a6aee570c408dba44a122',
			pageSize: '20',
			page: spage
		}, (result) => {
			let fetchUrl = 'http://acsing2.kugou.com/sing7/rank/json/v2/lbs/get_city_gift_opus_list?' + result;
			console.log(fetchUrl);
			fetch(fetchUrl, {
				method: 'POST',
				headers: {
					'Accept': 'application/json',
	          		'Content-Type': 'application/json'
				},
		      	body:''
	      	})
			.then((response) => response.json())
			.then((returnValue) =>{
				console.log(returnValue);
				if(returnValue.code !== 0) return;
				newData = returnValue.data.opusInfo;
				callback(newData);
			}).catch((err) => {
				console.log('err:' + err);
			})
		})
	}
	
	render(){
		return(
			<GiftedListView
				ref = "GiftedListView"
				onFetch = {this.fetchDate.bind(this)}
				rowView = {this.renderRowB.bind(this)}
				style={styles.listview}
				// onEndReached = {this._onEndReached.bind(this)}
				// renderFooter = {this._renderFooter.bind(this)}
				withSections={false}
				pagination={true}
				enableEmptySections={true}
				// onEndReachedThreshold = {-200}

				// refreshControl={
				// 	<RefreshControl  
			 //          	refreshing={this.state.refreshing} 
			 //          	onRefresh={this._onRefresh.bind(this)}
			 //            tintColor="#19ABFF" 
			 //            title={'加载中'} 
			 //            colors={['#ff0000', '#00ff00', '#0000ff']}
			 //            progressBackgroundColor="#ffff00"
	   //          	/>
	   //        	}
			/>
		)
	}

	_onRefresh(){
		this.setState({refreshing: true, title: "loading..."})
		setTimeout(() => {
			this.setState({
				refreshing: false,
			})
		}, 3000)
	}

	_pressButton(){
		// var {navigator} = this.props;
		
		// if(navigator){
		// 	var index = this.props.index + 1;
		// 	navigator.push({
  //               'name': 'ScrollTabDemo',
  //               'component': ScrollTabDemo,
  //               'index': index 
  //           })
		// }
		nativeMethod.addEvent('Nav', 'sss', {'opusId': '218469752'}, function(){})
	}

	renderRowB(rowDate, sectionID, rowID){
		if(!rowDate){
			return;
		}
		return (
			<PicTxt {...rowDate} rowID = {rowID} />
		)
	}
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: '#ff0000'
	},
	listview: {
		height: Dimensions.get('window').height - 110,
		backgroundColor: 'transparent'
	},
	txt: {
		color: '#333',
		height: 40,
	},
	item: {
		flexDirection: 'row',
		justifyContent: 'space-between',
	},
	left: {
		width: 30,
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
		paddingVertical: 10,
	},
	rankText:{
		textAlign: 'center',
	},
	right: {
		flex: 1,
		marginRight: 12,
		flexDirection: 'row',
		overflow: 'hidden',
		borderBottomWidth: 1,
		borderBottomColor: '#ccc',
		paddingVertical: 10,
	},
	pic: {
		width: 60,
		height: 60,
		marginRight: 9,
	},
	img: {
		width: 60,
		height: 60,
	},
	msg: {
		height: 60,
		flex: 1,
		flexDirection: 'column',
	},

	top: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'flex-end',
		marginBottom: 10,
	},

	songName: {
		flex: 4,
		flexDirection: 'row',
		alignItems: 'center',
		marginRight: 30,
	},
	musicIcon: {
		height: 14,
		width: 14,
	},
	songNameTxt: {
		flex: 1,
		fontSize: 16,
	},

	times: {
		flex: 1,
	},
	timeTxt: {
		fontSize: 12,
		color: '#999'
	},


	down:{
		flex: 1,
		paddingLeft: 14,
	},
	nameBox: {
		height: 15,
	},
	name: {
		fontSize: 12,
		color: '#999'
	},
	nameIcon:{

	},
	cmt: {
		height: 20,
		flexDirection: 'row',
		alignItems: 'center',
	},
	cmtTxt: {
		flex: 1,
		fontSize: 12,
		color: '#999'
	}
})

module.exports = Product;