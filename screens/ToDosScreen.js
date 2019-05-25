import React from 'react';
import { StyleSheet, View } from 'react-native';
import TicketListPage from '../components/TicketListPage';

export default class TodDosScreen extends React.Component {
	static navigationOptions = {
		title: 'ToDos'
	};
	static asyncKey = 'ToDos';

	render() {
		return (
			<View style={styles.listContainer}>
				<TicketListPage asyncKey={TodDosScreen.asyncKey} noTicketsText={'Keine ToDos vorhanden'}
					ticketInputPlaceholder={'ToDo eingeben'} />
			</View>
		);
	}
}

const styles = StyleSheet.create({
	listContainer: {
		paddingTop: 15
	}
});
