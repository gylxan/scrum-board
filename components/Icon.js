import React from 'react';
import VectorIcon from 'react-native-vector-icons/Ionicons';

import Colors from '../constants/Colors';

/**
 * Icon component
 */
export default class Icon extends React.Component {
	render() {
		return (
			<VectorIcon
				name={this.props.name}
				size={26}
				color={this.props.focused ? Colors.tabIconSelected : Colors.tabIconDefault}
				{...this.props}
			/>
		);
	}
}