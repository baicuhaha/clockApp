
import React, {
    Component
} from 'react';

import {
    StyleSheet,
    View,
    Text,
    TextInput,
    TouchableOpacity,
    Dimensions
} from 'react-native';
// import PropTypes from 'prop-types';
// import ScreenUtils from '../utils/ScreenUtils';
const { width, height } = Dimensions.get('window');
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
export default class CustomTimer extends Component {


    constructor(props) {
        super(props);
        this.state = {


        };

    }


    componentDidMount() {

    }

    render() {
        return (
            <KeyboardAwareScrollView>
                <View style={styles.container}>
                    <TextInput
                        allowFontScaling={false}
                        selectionColor={"#3dc6b8"}
                        placeholderTextColor={"#666666"}
                        placeholder='请输入小时'
                        style={styles.inputStyle}
                        keyboardType={"numeric"}
                        underlineColorAndroid="transparent"
                        onChangeText={(text) => {
                          this.inputHours = text;
                        }} />

                    <TextInput
                        allowFontScaling={false}
                        selectionColor={"#3dc6b8"}
                        placeholderTextColor={"#666666"}
                        placeholder='请输入分钟'
                        style={styles.inputStyle}
                        keyboardType={"numeric"}
                        underlineColorAndroid="transparent"

                        onChangeText={(text) => {
                            this.inputMinutes = text;
                        }} />

                </View>
                <TouchableOpacity activeOpacity={1} onPress={this.goPush.bind(this)}>
                         <View style={styles.loginStyle}>
                                <Text style={{ color: "#fff", fontSize: 20 }}>{"开始"}</Text>
                            </View>
                </TouchableOpacity>


            </KeyboardAwareScrollView>
        );
    }
    goPush(){
        alert("正在开发");
        return;
        this.props.navigation.push("StartTimer",{
            minutes:this.inputMinutes,
            hours:this.inputHours
        })
    }

};


const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    inputStyle: {
        flex: 1,

        height: 45,
        backgroundColor: "#fff",
        borderBottomWidth: 1,
        borderColor: "#999999"
    },
    loginStyle: {
        marginHorizontal: 24,
        height: 45,
        borderRadius: 45,
        backgroundColor: "#3dc6b8",
        justifyContent: "center",
        alignItems: "center",
        marginTop: 45

    }
});


