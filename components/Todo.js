import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Checkbox from './Checkbox';

export default function Todo({
    id,
    text,
    isCompleted,
    isToday,
    hour,
}) {
    return (
        <View style={styles.container}>
            <Checkbox id={id} text={text} isCompleted={isCompleted} isToday={isToday} hour={hour} />
            <Text style={styles.text}>{text}</Text>
            <Text style={styles.time}>{hour}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginBottom: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    text: {
        fontSize: 15,
        fontWeight: '500',
        color: '#737373',
    },
    time: {
        fontSize: 16,
        color: '#a3a3a3',
        fontWeight: '500',
    }
})