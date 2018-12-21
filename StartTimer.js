
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
import PropTypes from 'prop-types';

const { width, height } = Dimensions.get('window');
import Orientation from 'react-native-orientation';

var that = null
export default class StartTimer extends Component {

    static navigationOptions = ({ navigation }) => {
        const { params } = navigation.state

        return {
            headerStyle: { backgroundColor: '#000000' },
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
        Orientation.lockToLandscape();
        this.startTimeInterVal()

    }
    componentWillMount() {


    }
    componentWillUnmount() {
        Orientation.lockToPortrait();
        if (this.timer) clearInterval(this.timer);
    }

    startTimeInterVal() {
        const { params } = this.props.navigation.state
        var maxtime = (60*parseInt(params.hours)) * parseInt(params.minutes); //一个小时，按秒计算，自己调整!   
        function CountDown() {
            if (maxtime >= 0) {
                let h = Math.floor(maxtime / 60 / 60 % 24 );
                let minutes = Math.floor(maxtime /60 % 60);
                let seconds = Math.floor(maxtime % 60);
                let msg = "距离结束还有"+h+"小时" + minutes + "分" + seconds + "秒";
                console.log("msg--------",msg)
                that.setState({
                    hours:h,
                    mins:minutes,
                    mins:seconds
                })

                --maxtime;
            } else {
                clearInterval(this.timer);
                alert("时间到，结束!");
            }
        }
        this.timer = setInterval(CountDown, 1000);
        // this.time = setInterval(this.doSetInterval.bind(this), 1000);

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
                    <Text style={[styles.textStyle, { fontSize: 30 }]}>{this.state.segs}</Text>
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
        flex: 1,
        backgroundColor: "#000000",
        justifyContent: "center",
        alignItems: "center",
    },
    titileStyle: {
        fontSize: 24,
        color: "#333333",
        marginRight: 10,
    },

    textStyle: {
        fontSize: 150,
        color: 'white',
        textAlign: "center",
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
        marginRight: 10,

    },
    timerView: {
        width: 200,
        height: 200,
        justifyContent: "center",
        alignItems: "center",
    },
    segsView: {
        justifyContent: "flex-end",
        alignItems: "flex-start",
        width: 170,
        height: 110,

    }
});

