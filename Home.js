
import React, {
    Component
} from 'react';

import {
    StyleSheet,
    View,
    Text,
    Image,
    TouchableOpacity,
    Dimensions
} from 'react-native';
// import PropTypes from 'prop-types';
// import ScreenUtils from '../utils/ScreenUtils';
const { width, height } = Dimensions.get('window');
import Orientation from 'react-native-orientation';
export default class Home extends Component {
    
 
    constructor(props) {
        super(props);
        this.state = {
    

        };
  
    }


    componentDidMount() {
       
    }
    pushTimer=()=>{
        this.props.navigation.push("Countdown")
    }
    pushCustomTimer=()=>{
        this.props.navigation.push("CustomTimer")
    }
  
   

    render() {
        return (
            <View style={styles.container}>
                   <TouchableOpacity activeOpacity={1} onPress={this.pushTimer}>
                <View style={styles.timerView}>
                <Text style={styles.textStyle}>{"选择系统时间"}</Text>
                </View>
                </TouchableOpacity>
           
                <TouchableOpacity activeOpacity={1} onPress={this.pushCustomTimer}>
                <View style={styles.timerView}>
                <Text style={styles.textStyle}>{"自定义时间"}</Text>
                </View>
                </TouchableOpacity>
            

            </View>


        );
    }

};


const styles = StyleSheet.create({
    cardItemTimeRemainTxt: {
        fontSize: 20,
        color: '#ee394b'
    },
    text: {
        fontSize: 30,
        color: '#FFF',
        marginLeft: 7,
    },
    container: {
        marginTop:100,
        alignItems: "center",
        flex:1,
    },
    titileStyle: {
        fontSize: 24,
        color: "#333333",
        marginRight:10,
    },
 
    textStyle:{
        fontSize: 30,
        color: '#999999',
        textAlign:"center",
    },
    timerView:{
        marginTop:30
    }
 
});


