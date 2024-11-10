// FirstAidScreen.tsx
import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons'; // Import icon library

const FirstAidScreen = ({ navigation }: any) => (
    <ScrollView style={styles.container}>
        <View style={styles.header}>
            {/* Back Button */}
            <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
                <Icon name="arrow-back" size={30} color="white" />
            </TouchableOpacity>

            {/* Title and Logo */}
            <Image source={require('../assets/logo.png')} style={styles.logo} />
            <Text style={styles.title}>First Aid Course</Text>
        </View>

        {/* Course Content */}
        <View style={styles.content}>
            <Text style={styles.heading}>Course Overview</Text>
            <Text style={styles.paragraph}>
                Our First Aid Course provides essential skills to handle emergency situations effectively. This course is ideal for those looking to gain practical knowledge and certification in first aid, ensuring safety in various environments.
            </Text>

            <Text style={styles.heading}>Course Details</Text>
            <Text style={styles.listItem}>• Duration: 2 weeks</Text>
            <Text style={styles.listItem}>• Modules: Basic First Aid, CPR, Choking Relief, Wound Care</Text>
            <Text style={styles.listItem}>• Schedule: Mondays and Wednesdays</Text>
            <Text style={styles.listItem}>• Requirements: None, open to all levels</Text>

            <Text style={styles.heading}>What You Will Learn</Text>
            <Text style={styles.listItem}>• How to perform CPR and handle choking emergencies</Text>
            <Text style={styles.listItem}>• Basic wound care techniques and infection control</Text>
            <Text style={styles.listItem}>• Recognizing and responding to various medical emergencies</Text>
        </View>
    </ScrollView>
);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f9f9f9',
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 15,
        backgroundColor: '#81D8D0', // Background color for header
    },
    backButton: {
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    logo: {
        width: 60,
        height: 60,
        borderRadius: 30,
        marginHorizontal: 10,
    },
    title: {
        fontSize: 24,
        fontFamily: 'Didot, serif',
        color: 'white',
        fontWeight: 'bold',
        flex: 1,
        textAlign: 'center',
    },
    content: {
        padding: 20,
        backgroundColor: 'white',
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)', // Shadow effect for content
    },
    heading: {
        fontSize: 22,
        fontFamily: 'Didot, serif',
        color: '#81D8D0',
        textAlign: 'center',
        marginVertical: 10,
    },
    paragraph: {
        fontSize: 16,
        lineHeight: 24,
        color: '#333',
        marginBottom: 10,
    },
    listItem: {
        fontSize: 16,
        marginBottom: 5,
        color: '#666',
    },
});

export default FirstAidScreen;
