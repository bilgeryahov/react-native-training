import React from 'react';
import { View, Text, Image } from 'react-native';

import styles from './styles';

import { capitalizeFirstLetter } from '../../helpers/string';

const Header = ({ picture, name }) => {

	return (
		<View>
			<Image
				source={{uri: picture.large}}
			    style={styles.image}
			/>
			<Text>
				{capitalizeFirstLetter(name.first)} {capitalizeFirstLetter(name.last)}
			</Text>
		</View>
	);
};

export default Header;