import React from "react";
import { TextInput, StyleSheet, View , TouchableOpacity} from "react-native";
import Icon from 'react-native-vector-icons/Ionicons';

const arrowButton = props => (
    <TouchableOpacity>
        <View
            {...props}
            style={[styles.circle, props.style]}
        >
            <Icon style={styles.arrow} color="white" name={props.name} onPress={props.onPress}/>
        </View>
    </TouchableOpacity>

);

const styles = StyleSheet.create({
    circle: {
        width: 30,
        height: 30,
        borderRadius: 15,
        backgroundColor: "#F02055",
        // position: 'relative',
        // top: "-50%",
        // left: "35%",
        alignItems: 'center',
        // justifyContent: "center",
    },
    arrow: {
        paddingTop: 2,
        fontSize: 25,
    }


});

export default arrowButton;
