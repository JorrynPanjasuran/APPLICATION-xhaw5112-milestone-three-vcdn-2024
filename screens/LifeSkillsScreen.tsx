import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // Assuming you're using Expo for icons

const LifeSkillsScreen = ({ navigation }) => (
    <ScrollView style={styles.container}>
        <View style={styles.header}>
            <TouchableOpacity
                style={styles.backButton}
                onPress={() => navigation.goBack()} // Navigate back to the previous screen
            >
                <Ionicons name="arrow-back" size={30} color="white" />
            </TouchableOpacity>
            <Text style={styles.title}>Life Skills Course</Text>
        </View>

        <View style={styles.content}>
            <View style={styles.header}>
                <Image source={require('../assets/logo.png')} style={styles.logo} />
                <Text style={styles.title}>Child Minding Course</Text>
            </View>

            <Text style={styles.heading}>Course Overview</Text>
            <Text style={styles.paragraph}>
                Our Life Skills Course covers essential skills for personal and professional growth, including communication, time management, and financial literacy.
            </Text>

            <Text style={styles.heading}>Course Details</Text>
            <Text style={styles.listItem}>• Duration: 6 months</Text>
            <Text style={styles.listItem}>• Modules: Communication, Time Management, Problem-Solving</Text>
            <Text style={styles.listItem}>• Schedule: Mondays and Wednesdays</Text>

            <Text style={styles.heading}>What You Will Learn</Text>
            <Text style={styles.listItem}>• Effective communication</Text>
            <Text style={styles.listItem}>• Time management and productivity</Text>
            <Text style={styles.listItem}>• Financial literacy basics</Text>
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
        backgroundColor: '#81D8D0', // Match website's theme
    },
    backButton: {
        padding: 10,
    },
    title: {
        fontSize: 24,
        fontFamily: 'Didot, serif',
        color: 'white', // Ensure the title text color stays white
        fontWeight: 'bold',
        marginLeft: 10, // Add margin to space out the back button and title
    },
    content: {
        padding: 20,
        backgroundColor: 'white',
    },
    heading: {
        fontSize: 22,
        fontFamily: 'Didot, serif',
        color: '#81D8D0',
        justifyContent: 'center',
        alignSelf: 'center',
        marginBottom: 10,
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
    logo: {
        width: 200,
        height: 200,
        borderRadius: 100,
    },
});

export default LifeSkillsScreen;
