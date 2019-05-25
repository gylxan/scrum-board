import React from 'react';
import { StyleSheet, View } from 'react-native';
import TicketListPage from '../components/TicketListPage';

export default class CodeReviewScreen extends React.Component {
	static navigationOptions = {
		title: 'Code Reviews'
	};
	static asyncKey = 'CodeReviewTickets';

	render() {
		return (
			<View style={styles.listContainer}>
				<TicketListPage asyncKey={CodeReviewScreen.asyncKey} />
			</View>
		);
	}
}

const styles = StyleSheet.create({
	listContainer: {
		paddingTop: 15
	}
});
