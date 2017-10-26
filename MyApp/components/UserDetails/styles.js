import { StyleSheet, Dimensions } from 'react-native';
import colors from '../../config/colors';

const window = Dimensions.get('window');

export default StyleSheet.create({
	image:{
		width: window.width / 2,
		height: window.width / 2,
		borderRadius: window.width / 4
	}
});