import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Header = props => {
    return (
        <View style={styles.header}>
            <Text style={styles.headerTitle}>{props.title}</Text>
        </View>
    )
};

const styles = StyleSheet.create({
    header: {
        borderWidth: 1,
        width: '100%',
        height: 90,
        paddingTop: 36,
        backgroundColor: 'whitesmoke',
        alignItems: 'center',
        justifyContent:'center'
    },
    headerTitle: {
        borderWidth: 1,
        // color: 'black',
        fontSize: 18,
    }
});

export default Header;