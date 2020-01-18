import React from 'react';
import { View, Text, TouchableOpacity, Image, StatusBar,StyleSheet, ImageBackground } from 'react-native'; 

const stiller = StyleSheet.create({
	ustYazi: { 
		color: 'white', 
		borderWidth: 2, 
		margin: 5, 
		padding: 5, 
		textAlign: 'center', 
		textAlignVertical: 'center' 
	},
	
	container: {
		flex: 1, 
		padding: 16,
	
	},
	topContainer: {
		height: '30%',
		borderBottomWidth: 0.75,
		borderBottomColor: 'rgb(240,240,240)',
		marginBottom: 15,
		flex: 1,
		justifyContent: 'flex-end',
		paddingBottom:15,
	},


	buttonContainer1: {
		height: '9%',
		marginTop: 8,
		marginBottom: 8,
		flexDirection: 'row', 
		justifyContent: 'center',
		alignItems: 'center',
	},
	
	button1: {
		flex: 1,
		height: '100%',
		justifyContent: 'center',
		alignItems: 'center',
		margin: 5,
		
  },
  
	buttonText1: {
		color: 'white',
		fontSize: 30,
		textAlignVertical: 'center',
		textAlign: 'center'
	},

	processText: {
		color: 'white',
		fontSize: 60,
		textAlign: 'right'
	},
	resultText: {
		color: 'white',
		fontSize: 40,
		textAlign: 'right'
	}
});



class ekran extends React.Component { 
	constructor(ozellikler) {
		console.disableYellowBox = true; 

		console.log('YAPILANDIRICI BAŞLADI');
		super(ozellikler);
		console.log('YAPILANDIRICI BİTTİ');
	}


	state = { processText: '', resultText: '0' };


	
	componentWillMount() {
		console.log('componentWillMount BAŞLADI');
	}


	componentDidMount() {
		console.log('componentDidMount BAŞLADI');
	}


	componentWillUpdate() {
		console.log('componentWillUpdate BAŞLADI');
	}

	componentDidUpdate() {
		console.log('componentDidUpdate BAŞLADI');
	}

	componentWillUnmount() {
		console.log('componentWillUnmount BAŞLADI');
	}

	componentWillReceiveProps() {
		console.log('componentWillReceiveProps BAŞLADI');
	}

	componentDidCatch() {
		console.log('componentDidCatch BAŞLADI');
	}



	onPressButton1 = d => (this.setState({ processText: `${this.state.processText}${d}` }))
	control1 = d => (this.state.processText.length > 0 && this.state.processText[this.state.processText.length - 1] !== d);

	delete = () => this.setState({ processText: this.state.processText.substring(0, this.state.processText.length - 1) })


	equal = () => {
		const pt = this.state.processText;
		const ptl = pt.length;

		let arr = [];

		let number = '';
		for (let i = 0; i < ptl; i++) {
			const P = pt[i];

			if (P === '/') { arr.push(parseFloat(number)); number = ''; arr.push('/'); }
			else if (P === 'x') { arr.push(parseFloat(number)); number = ''; arr.push('x'); }
			else if (P === '-') { arr.push(parseFloat(number)); number = ''; arr.push('-'); }
			else if (P === '+') { arr.push(parseFloat(number)); number = ''; arr.push('+'); }
			else number = `${number}${P}`;

			if (i === ptl - 1) { arr.push(parseFloat(number)); number = ''; }
		}

		//DEVAMI GELECEK
	}

	render() {
		return (
      <ImageBackground source={require('/React/hesapmakinesi/mavi.jpg')} style={{width: '100%', height: '100%'}}>
      
        <View style={stiller.container}>

				<StatusBar backgroundColor={'blue'} />

				<View style={stiller.topContainer}>
					<Text style={stiller.processText}>{this.state.processText}</Text>
					<Text style={stiller.resultText}>{this.state.resultText}</Text>
				</View>


				<View style={stiller.buttonContainer1}>
					<TouchableOpacity style={stiller.button1} activeOpacity={0.8} onPress={() => this.setState({ processText: '', resultText: '0' })}>
            			<Text style={stiller.buttonText1}>C</Text>
					</TouchableOpacity>


					<TouchableOpacity style={stiller.button1} activeOpacity={0.8} onPress={this.delete}>
            			<Text style={stiller.buttonText1}>del</Text>
					</TouchableOpacity>


					<TouchableOpacity style={stiller.button1} activeOpacity={0.8}>
            			<Text style={stiller.buttonText1}>%</Text>
					</TouchableOpacity>


					<TouchableOpacity style={stiller.button1} activeOpacity={0.8} onPress={() => this.onPressButton1('/')}>
            			<Text style={stiller.buttonText1}>/</Text>
					</TouchableOpacity>
				</View>


				<View style={stiller.buttonContainer1}>
					<TouchableOpacity style={stiller.button1} activeOpacity={0.8} onPress={() => this.onPressButton1(7)}>
						<Text style={stiller.buttonText1}>7</Text>
					</TouchableOpacity>


					<TouchableOpacity style={stiller.button1} activeOpacity={0.8} onPress={() => this.onPressButton1(8)}>
						<Text style={stiller.buttonText1}>8</Text>
					</TouchableOpacity>


					<TouchableOpacity style={stiller.button1} activeOpacity={0.8} onPress={() => this.onPressButton1(9)}>
						<Text style={stiller.buttonText1}>9</Text>
					</TouchableOpacity>


					<TouchableOpacity style={stiller.button1} onPress={() => this.control1('x') && this.onPressButton1('x')}>
            			<Text style={stiller.buttonText1}>X</Text>
					</TouchableOpacity>
				</View>


				<View style={stiller.buttonContainer1}>
					<TouchableOpacity style={stiller.button1} activeOpacity={0.8} onPress={() => this.onPressButton1(4)}>
						<Text style={stiller.buttonText1}>4</Text>
					</TouchableOpacity>


					<TouchableOpacity style={stiller.button1} activeOpacity={0.8} onPress={() => this.onPressButton1(5)}>
						<Text style={stiller.buttonText1}>5</Text>
					</TouchableOpacity>


					<TouchableOpacity style={stiller.button1} activeOpacity={0.8} onPress={() => this.onPressButton1(6)}>
						<Text style={stiller.buttonText1}>6</Text>
					</TouchableOpacity>


					<TouchableOpacity style={stiller.button1} onPress={() => this.control1('-') && this.onPressButton1('-')}>
            			<Text style={stiller.buttonText1}>-</Text>
					</TouchableOpacity>
				</View>


				<View style={stiller.buttonContainer1}>
					<TouchableOpacity style={stiller.button1} activeOpacity={0.8} onPress={() => this.onPressButton1(1)}>
						<Text style={stiller.buttonText1}>1</Text>
					</TouchableOpacity>


					<TouchableOpacity style={stiller.button1} activeOpacity={0.8} onPress={() => this.onPressButton1(2)}>
						<Text style={stiller.buttonText1}>2</Text>
					</TouchableOpacity>


					<TouchableOpacity style={stiller.button1} activeOpacity={0.8} onPress={() => this.onPressButton1(3)}>
						<Text style={stiller.buttonText1}>3</Text>
					</TouchableOpacity>


					<TouchableOpacity style={stiller.button1} onPress={() => this.control1('+') && this.onPressButton1('+')}>
            			<Text style={stiller.buttonText1}>+</Text>
					</TouchableOpacity>
				</View>


				<View style={stiller.buttonContainer1}>
					<TouchableOpacity style={stiller.button1} activeOpacity={0.8} onPress={() => this.onPressButton1(0)}>
						<Text style={stiller.buttonText1}>0</Text>
					</TouchableOpacity>


					<TouchableOpacity style={stiller.button1} activeOpacity={0.8}>
						<Text style={stiller.buttonText1}>00</Text>
					</TouchableOpacity>


					<TouchableOpacity style={stiller.button1} activeOpacity={0.8}>
						<Text style={stiller.buttonText1}>.</Text>
					</TouchableOpacity>


					<TouchableOpacity style={stiller.button1} onPress={this.equal}>
          				<Text style={stiller.buttonText1}>=</Text>
					</TouchableOpacity>
				</View>



			</View>
    </ImageBackground>
    
		);
	}
}

export default ekran; 
