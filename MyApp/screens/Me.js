import React  from 'react';
import { View, Text } from 'react-native';

class Me extends React.Component {
	render() {
		return (
			<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
				<Text>Me Screen</Text>
			</View>
		);
	}
}

export default Me;
