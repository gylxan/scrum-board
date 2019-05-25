import React from 'react';
import { AsyncStorage, Text, StyleSheet, View } from 'react-native';
import { createGenericId } from '../services/utils/StringUtils';
import TicketList from './TicketList';

export default class TicketListPage extends React.Component {
	state = {
		tickets: []
	};

	componentDidMount() {
		this._loadTickets();
	}

	/**
	 * Loads all tickets from the Storage
	 * @private
	 */
	_loadTickets = () => {
		AsyncStorage.getItem(this.props.asyncKey).then((data) => {
			this.setState({
				tickets: data !== null ? JSON.parse(data) : []
			});
		});
	};

	/**
	 * Saves all tickets to the storage
	 * @param {Array} tickets Tickets to save
	 * @private
	 */
	_saveTickets = (tickets) => {
		this.setState({
			tickets: tickets
		});
		AsyncStorage.setItem(this.props.asyncKey, JSON.stringify(tickets));
	};

	/**
	 * Triggered when a ticket is deleted
	 * @param {string} id ID of the ticket to delete
	 * @private
	 */
	_onTicketDelete = (id) => {
		const tickets = [...this.state.tickets];
		const ticketsWithoutDeleted = tickets.filter((ticket) => {
			return ticket.id !== id;
		});
		this._saveTickets(ticketsWithoutDeleted);
	};
	/**
	 * Triggered when a ticket title changed
	 * @param {string} id ID of the ticket
	 * @param {string} value New value of the ticket
	 * @private
	 */
	_onTicketChange = (id, value) => {
		const tickets = [...this.state.tickets];
		const updatedTickets = tickets.map((ticket) => {
			if (ticket.id === id) {
				ticket.title = value;
			}
			return ticket;
		});
		this._saveTickets(updatedTickets);

	};

	_onTicketAdd = () => {
		const tickets = [...this.state.tickets];
		tickets.push({ id: createGenericId(), title: '' });
		this._saveTickets(tickets);
	};

	render() {
		return (
			<TicketList
				data={this.state.tickets}
				onAddItem={this._onTicketAdd}
				onChangeItem={this._onTicketChange}
				onDeleteItem={this._onTicketDelete}
				noTicketsText={this.props.noTicketsText}
				ticketInputPlaceholder={this.props.ticketInputPlaceholder}
			/>
		);
	}
}