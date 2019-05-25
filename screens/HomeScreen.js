import React from 'react';
import { AsyncStorage, Image, ScrollView, StyleSheet, Text, TouchableNativeFeedback, View } from 'react-native';
import Colors from '../constants/Colors';
import DevelopScreen from './DevelopScreen';
import CodeReviewScreen from './CodeReviewScreen';
import FixedScreen from './FixedScreen';
import ToDosScreen from './ToDosScreen';
import FastlaneScreen from './FastlaneScreen';


export default class HomeScreen extends React.Component {
	static navigationOptions = {
		header: null
	};

	_onDeletePress = () => {
		AsyncStorage.removeItem(DevelopScreen.asyncKey);
		AsyncStorage.removeItem(CodeReviewScreen.asyncKey);
		AsyncStorage.removeItem(FixedScreen.asyncKey);
		AsyncStorage.removeItem(FastlaneScreen.asyncKey);
		AsyncStorage.removeItem(ToDosScreen.asyncKey);

	};

	render() {
		return (
			<View style={styles.listContainer} contentContainerStyle={styles.mainContentContainer}>
				<ScrollView style={styles.listContainer} contentContainerStyle={styles.contentContainer}>
					<View style={styles.welcomeContainer}>
						<Image
							source={
								__DEV__
									? require('../assets/images/icon-scrumboard-dev.png')
									: require('../assets/images/icon-scrumboard-prod.png')
							}
							style={styles.welcomeImage}
						/>
					</View>

					<View style={styles.getStartedContainer}>
						<Text style={styles.getStartedText}>
							Eine kleine App um die bearbeiteten Tickets zu pflegen
							und um ToDos zu erstellen.
						</Text>
					</View>
					<View style={styles.clearTicketsContainer}>
						<TouchableNativeFeedback background={TouchableNativeFeedback.SelectableBackground()} onPress={this._onDeletePress}>
							<View style={styles.clearTicketsButton}>
								<Text style={styles.clearTicketsButtonText}>Alle Tickets und ToDos löschen</Text>
							</View>
						</TouchableNativeFeedback>
					</View>
				</ScrollView>
			</View>
		);
	}

}

const styles = StyleSheet.create({
	listContainer         : {
		flex           : 1,
		backgroundColor: Colors.background
	},
	mainContentContainer  : {
		height        : '100%',
		justifyContent: 'center'
	},
	contentContainer      : {
		justifyContent: 'center',
		paddingTop    : 30
	},
	welcomeContainer      : {
		flex        : 1,
		alignItems  : 'center',
		marginTop   : 10,
		marginBottom: 20
	},
	welcomeImage          : {
		width     : 200,
		height    : 160,
		resizeMode: 'contain',
		marginTop : 10
	},
	getStartedContainer   : {
		alignItems      : 'center',
		marginHorizontal: 50
	},
	getStartedText        : {
		fontSize  : 17,
		color     : 'rgba(96,100,109, 1)',
		lineHeight: 24,
		textAlign : 'center'
	},
	clearTicketsContainer : {
		marginTop : 30,
		alignItems: 'center'
	},
	clearTicketsButton    : {
		borderRadius   : 5,
		width          : 280,
		alignItems     : 'center',
		backgroundColor: Colors.tintColor
	},
	clearTicketsButtonText: {
		fontSize: 17,
		color   : Colors.tabBar,
		margin  : 20
	}
});
