import React  from 'react';
import { ScrollView } from 'react-native';

import { CustomTextInput } from '../components/CustomTextInput';

import colors from '../config/colors';

class NewContact extends React.Component {
	render() {
		return (
			<ScrollView style={{ backgroundColor: colors.background }}>
				<CustomTextInput
					placeholder="First name..."
				/>
			</ScrollView>
		);
	}
}

export default NewContact;
