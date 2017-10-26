import React  from 'react';
import { FlatList, View, Text } from 'react-native';

import { contacts } from '../config/data';
import colors from '../config/colors';

import { ListItem } from '../components/ListItem';

class Contacts extends React.Component {
	render() {
		return (
			<FlatList
				style={{ backgroundColor: colors.background }}
			    data={contacts}
				renderItem={({item}) =>
					<ListItem contact={item} onPress={() => this.handleRowPress(item)}/>
				}
			    keyExtractor={(item) => item.email}
			/>
		);
	}
}

export default Contacts;
