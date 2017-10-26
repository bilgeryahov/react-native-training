import React  from 'react';
import { ScrollView, Text } from 'react-native';

import { Header, Actions } from '../components/UserDetails';
import colors from '../config/colors';

class Details extends React.Component {
	render() {
		const contact = this.props.navigation.state.params;

		return (
			<ScrollView style={{ backgroundColor: colors.background }}>
				<Header {...contact} />
				<Actions {...contact} />
			</ScrollView>
		);
	}
}

export default Details;
