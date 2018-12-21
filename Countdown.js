
import React, {
    Component
} from 'react';

import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
    Dimensions
} from 'react-native';
// import PropTypes from 'prop-types';
// import ScreenUtils from '../utils/ScreenUtils';
const { width, height } = Dimensions.get('window');
import Orientation from 'react-native-orientation';

var that = null
export default class CountDown extends Component {
    static navigationOptions = ({ navigation }) => {
        const { params } = navigation.state

        return {
            headerStyle: { backgroundColor: '#FFCCCC' },
            headerLeft: (

                <TouchableOpacity activeOpacity={1} onPress={() => {
                    that.goBack()
                }}>
                    <View style={styles.btnStyle}>
                          <Text style={{fontSize:20,color:"#fff"}}>{"返回"}</Text>
                    </View>
                </TouchableOpacity>


            ),
            headerRight: (
                <View style={{ justifyContent: "space-between", flexDirection: "row" }}>

                </View>

            )
        }
    };
 
    constructor(props) {
        super(props);
        this.state = {
    

        };
        that = this
    }
    goBack(){
        this.props.navigation.pop()
    }


    componentDidMount() {
        this.doSetInterval()
        this.startTimeInterVal()
        Orientation.lockToLandscape();
    }

    componentWillUnmount() {
        Orientation.lockToPortrait();
        if (this.time) clearInterval(this.time);
    }
    
    startTimeInterVal() {
        this.time = setInterval(this.doSetInterval.bind(this), 1000);

    }
    doSetInterval(){
     let timer = this.getNewTimer()
     let houres = timer.houres<10?"0"+timer.houres:timer.houres
     let minutes = timer.minutes<10?"0"+timer.minutes:timer.minutes
     let seconds = timer.seconds<10?"0"+timer.seconds:timer.seconds
     this.setState({
        hours:houres,
        mins:minutes,
        segs:seconds
     })
    }
    getNewTimer(){
    var myDate = new Date();//获取系统当前时间
    let houres= myDate.getHours();
    let minutes= myDate.getMinutes();
    let seconds = myDate.getSeconds();
    let dic = {
        houres:houres,
        minutes:minutes,
        seconds:seconds
    }
    return dic

  }

    render() {
        return (
            <View style={styles.container}>
                
                <View style={styles.timerView}>
                <Text style={styles.textStyle}>{this.state.hours}</Text>
                </View>
             
                <Text style={styles.defaultColon}>{":"}</Text>

                <View style={styles.timerView}>
                <Text style={styles.textStyle}>{this.state.mins}</Text>
                </View>

             

                <View style={styles.segsView}>
                <Text style={[styles.textStyle,{fontSize:30}]}>{this.state.segs}</Text>
                </View>

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
        flexDirection: 'row',
        flex:1,
        backgroundColor:"#FFCCCC", 
        justifyContent: "center",
        alignItems: "center",
    },
    titileStyle: {
        fontSize: 24,
        color: "#333333",
        marginRight:10,
    },
 
    textStyle:{
        fontSize: 150,
        color: 'white',
        textAlign:"center",
    },
    //时间文字
    defaultTime: {
        paddingHorizontal: 3,
        backgroundColor: 'rgba(85, 85, 85, 1)',
        fontSize: 12,
        color: 'white',
        marginHorizontal: 3,
        borderRadius: 2,
    },
    //冒号
    defaultColon: {
        fontSize: 40, 
        color: "#fff",
        marginRight:10,
        
    },
    timerView:{
        width:200,
        height:200,
        justifyContent: "center",
        alignItems: "center",
    },
    segsView:{
        justifyContent:"flex-end",
       alignItems:"flex-start",
        width:170,
        height:110,

    }
});


