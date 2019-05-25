import React from 'react';
import { FlatList, Platform, ScrollView, StyleSheet, Text, View, TouchableOpacity, TouchableWithoutFeedback } from 'react-native';
import { TextInput } from 'react-native-paper';
import Icon from './Icon';
import Colors from '../constants/Colors';

class TicketListItem extends React.Component {
	/**
	 * Triggered when the item text changes
	 * @param {string} newValue The new value
	 * @private
	 */
	_onChangeItemText = (newValue) => {
		this.props.onChangeItemText(this.props.id, newValue);
	};

	/**
	 * Triggered when the delete icon is pressed
	 * @private
	 */
	_onDeleteIconPress = () => {
		this.props.onPressDeleteItem(this.props.id);
	};

	render() {
		return (
			<View style={styles.listItemRow}>
				<TextInput value={this.props.title} clearButtonMode={'always'} style={styles.listItemInput} onChangeText={this._onChangeItemText}
					underlineColorAndroid={Colors.tintColor} placeholder={this.props.inputPlaceholder || 'Ticket eingeben'} autoFocus={this.props.focusInput} />
				<View style={styles.listItemIconWrapper}>
					<TouchableWithoutFeedback onPress={this._onDeleteIconPress} style={styles.listAddIcon}>
						<Icon name={
							Platform.OS === 'ios'
								? 'ios-remove-circle-outline'
								: 'md-remove-circle-outline'} />
					</TouchableWithoutFeedback>
				</View>
			</View>
		);
	}
}

export default class TicketList extends React.Component {

	/** Key extractor to use id for the key */
	_keyExtractor = (item) => item.id;
	/** Initial state */
	state = { refresh: false, focusLast: false, initialMount: true };

	/**
	 * When the component receives new props, refresh the list
	 * @param nextProps
	 * @param nextContext
	 */
	componentWillReceiveProps(nextProps, nextContext) {
		if (this.props.data.length !== nextProps.data.length) {
			this.setState({
				refresh: !this.state.refresh
			});
		}
		// When there are more data now than before, focus the last one
		if (this.props.data.length < nextProps.data.length) {
			this.setState({
				focusLast: true
			});
		} else {
			this.setState({
				focusLast: false
			});
		}
	}


	/**
	 * Returns the item element to render
	 * @param {Object} item Item data
	 * @param {int} Index of the element
	 * @return {TicketListItem}
	 * @private
	 */
	_renderItem = ({ item, index }) => {
		return <TicketListItem
			id={item.id}
			onChangeItemText={this.props.onChangeItem}
			onPressDeleteItem={this.props.onDeleteItem}
			title={item.title}
			inputPlaceholder={this.props.ticketInputPlaceholder}
			focusInput={this.state.focusLast && index === this.props.data.length - 1}
		/>;
	};

	render() {
		return (
			<View style={styles.container}>
				{this.props.data.length === 0
					? <View style={styles.noTicketsView}><Text
						style={styles.noTicketsText}>{this.props.noTicketsText || 'Keine Tickets vorhanden'}</Text></View>
					: <ScrollView style={styles.listContainer}>
						<FlatList
							data={this.props.data}
							renderItem={this._renderItem}
							keyExtractor={this._keyExtractor}
							extraData={this.state}
						/>
					</ScrollView>
				}
				<TouchableOpacity onPress={this.props.onAddItem} style={styles.listAddIcon}>
					<Icon size={50} name={
						Platform.OS === 'ios'
							? 'ios-add-circle'
							: 'md-add-circle'} />
				</TouchableOpacity>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	noTicketsView      : {
		flex          : 1,
		alignItems    : 'center',
		justifyContent: 'center',
		textAlign     : 'center'
	},
	noTicketsText      : {
		fontSize: 27,
		color   : Colors.tabIconDefault
	},
	container          : {
		height         : '100%',
		backgroundColor: Colors.background
	},
	listContainer      : {
		flex         : 1,
		paddingBottom: 50
	},
	listAddIcon        : {
		position: 'absolute',
		bottom  : 10,
		right   : 10
	},
	listItemRow        : {
		flexDirection: 'row',
		marginBottom : 5
	},
	listItemInput      : {
		width          : '90%',
		backgroundColor: Colors.tabBar
	},
	listItemIconWrapper: {
		width         : '10%',
		justifyContent: 'center',
		alignItems    : 'center'
	}
});