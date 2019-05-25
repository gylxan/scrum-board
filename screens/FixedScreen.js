import React from 'react';
import { StyleSheet, View } from 'react-native';
import TicketListPage from '../components/TicketListPage';

export default class FixedScreen extends React.Component {
	static navigationOptions = {
		title: 'Fixed'
	};
	static asyncKey = 'FixedTickets';

	render() {
		return (
			<View style={styles.listContainer}>
				<TicketListPage asyncKey={FixedScreen.asyncKey} />
			</View>
		);
	}
}

const styles = StyleSheet.create({
	listContainer: {
		paddingTop: 15
	}
});
