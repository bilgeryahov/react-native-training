import React  from 'react';
import { ScrollView, View } from 'react-native';

import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scrollview';

import { CustomTextInput } from '../components/CustomTextInput';
import { PrimaryButton } from '../components/Buttons';

import colors from '../config/colors';

const fields = [
	{ placeholder: 'First Name...', stateKey: 'firstName' },
	{ placeholder: 'Last Name...', stateKey: 'lastName' },
	{ placeholder: 'Email...', stateKey: 'email', keyboardType: 'email-address' },
	{ placeholder: 'Mobile Phone...', stateKey: 'mobilePhone' },
	{ placeholder: 'Home Phone...', stateKey: 'homePhone' },
	{ placeholder: 'City...', stateKey: 'City' },
	{ placeholder: 'Birthday...', stateKey: 'birthday' },
	{ placeholder: 'Registered...', stateKey: 'registered' },
	{ placeholder: 'User Name...', stateKey: 'username' }
];

class NewContact extends React.Component {
	constructor(props){
		super(props);

		this.state = {};
	}

	onInputChange = (text, stateKey) => {
		const mod = {};
		mod[stateKey] = text;
		this.setState(mod);
	};

	handleSubmit = () => {
		alert('Submitted!');
	};

	render() {
		return (
			<KeyboardAwareScrollView style={{ backgroundColor: colors.background }}>
				{
					fields.map((field) => (
						<CustomTextInput
							key={field.stateKey}
							onChangeText={(text) => this.onInputChange(text, field.stateKey)}
							{...field}
						/>
					))
				}
				<View style={{ marginTop: 20 }}>
					<PrimaryButton
						label="Save"
					    onPress={() => this.handleSubmit()}
					/>
				</View>
			</KeyboardAwareScrollView>
		);
	}
}

export default NewContact;
