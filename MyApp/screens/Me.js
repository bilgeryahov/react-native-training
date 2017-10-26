import React  from 'react';
import { View, Text, ScrollView } from 'react-native';

import { Header, Actions, Info } from '../components/UserDetails';
import colors from '../config/colors';
import { me } from '../config/data';

class Me extends React.Component {
	render() {
		return (
			<ScrollView style={{ backgroundColor: colors.background }}>
				<Header {...me}/>
				<Actions {...me}/>
				<Info {...me}/>
			</ScrollView>
		);
	}
}

export default Me;
