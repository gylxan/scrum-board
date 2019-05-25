import React from 'react';
import { StyleSheet, View } from 'react-native';
import TicketListPage from '../components/TicketListPage';

export default class FastlaneScreen extends React.Component {
	static navigationOptions = {
		title: 'Fastlane'
	};
	static asyncKey = 'FastlaneTickets';

	render() {
		return (
			<View style={styles.listContainer}>
				<TicketListPage asyncKey={FastlaneScreen.asyncKey} />
			</View>
		);
	}
}

const styles = StyleSheet.create({
	listContainer: {
		paddingTop: 15
	}
});
