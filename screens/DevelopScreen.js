import React from 'react';
import { StyleSheet, View } from 'react-native';
import TicketListPage from '../components/TicketListPage';

export default class DevelopScreen extends React.Component {
	static navigationOptions = {
		title: 'In develop'
	};
	static asyncKey ='DevelopTickets';
	render() {
		return (
			<View style={styles.listContainer}>
				<TicketListPage asyncKey={DevelopScreen.asyncKey} />
			</View>
		);
	}
}

const styles = StyleSheet.create({
	listContainer: {
		paddingTop: 15
	}
});
