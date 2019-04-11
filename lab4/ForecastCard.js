import React, {Component} from 'react';
import { StyleSheet, View } from 'react-native';
import { Text, Card } from 'react-native-elements';


export default class ForecastCard extends Component {

	render() {
		return (
			<Card containerStyle={styles.card}>
				<Text style={styles.notes}>{this.props.location}</Text>
				
				<View style={{flexDirection:'row', justifyContent:'space-between', alignItems:'center'}}>
                <Text style={styles.notes}>{Math.round( this.props.main.temp * 10) / 10 }&#8451;</Text>
				</View>
			</Card>
		);
	}
}

const styles = StyleSheet.create({
	card:{
        backgroundColor:'white',
        opacity:.5,
		borderWidth:0,
		borderRadius:20
	},
	notes:{
		fontSize:30,
        color:'#000',
        textTransform:'capitalize'
	}
});