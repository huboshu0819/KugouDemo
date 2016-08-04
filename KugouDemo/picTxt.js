import React, {Component} from 'react';
import {
	View,
	Text,
	StyleSheet,
	Image,
	TouchableOpacity,
	Dimensions,
	NativeModules,
} from 'react-native';

var nativeMethod = NativeModules.MyClass;
console.log(nativeMethod);


class PicTxt extends Component{
	constructor(props) {
	  super(props);
	  this.state = {};
	}

	_pressButton(){
		nativeMethod.addEvent('Nav', 'sss', {'opusId': this.props.opusId}, function(){})
	}


	render(){
		var picUlr = 'http://img.acsing.kugou.com/v2' + this.props.playerBase.headImg;
		return(
			<View style={styles.item}>
				<View style={styles.left}>
					<Text style={styles.rankText}>{Number(this.props.rowID) + 1}</Text>
				</View>
				<View style={styles.right}>
					<View style={styles.pic}>
						<TouchableOpacity onPress={this._pressButton.bind(this)}>
							<Image style={styles.img} source={{uri: picUlr}}/>
						</TouchableOpacity>
					</View>
					<View style={styles.msg}>
						<View style={styles.top}>
							<View style={styles.songName}>
								<Image style={styles.musicIcon} source={require('../img/music_icon.png')}/>
								<Text style={styles.songNameTxt} numberOfLines={1}>{this.props.opusName}</Text>
							</View>
							<View style={styles.times}>
								<Text style={styles.timeTxt}>{this.props.hotNum}</Text>
							</View>
						</View>
						<View style={styles.down}>
							<View style={styles.nameBox}>
								<Text style={styles.name}>{this.props.playerBase.nickname}</Text>
								<Image style={styles.nameIcon} />
							</View>
							<View style={styles.cmt}>
								<Text numberOfLines={1} style={styles.cmtTxt}>{this.props.opusDesc}</Text>
							</View>
						</View>						
					</View>
				</View>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: '#ff0000'
	},
	listview: {
		height: Dimensions.get('window').height - 110,
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

module.exports = PicTxt;