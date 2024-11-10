import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';
import { Ionicons } from 'react-native-vector-icons'; // Importing Ionicons

const CookingScreen = ({ navigation }) => (
    <ScrollView style={styles.container}>
        <View style={styles.header}>
            <TouchableOpacity
                style={styles.backButton}
                onPress={() => navigation.goBack()} // Navigate back to the previous screen
            >
                <Ionicons name="arrow-back" size={30} color="#fff" />
            </TouchableOpacity>
            <Image source={require('../assets/logo.png')} style={styles.logo} />
            <Text style={styles.title}>Cooking Course</Text>
        </View>

        <View style={styles.content}>
            <Text style={styles.heading}>Cooking Course Overview</Text>
            <Text style={styles.paragraph}>
                The Cooking Course provides learners with practical culinary skills for home or professional environments. The course covers everything from basic cooking techniques to meal presentation.
            </Text>

            <Text style={styles.heading}>Course Details</Text>
            <Text style={styles.listItem}>• Duration: 6 weeks</Text>
            <Text style={styles.listItem}>• Modules: Basic Cooking Techniques, Meal Planning, Food Safety, Presentation</Text>
            <Text style={styles.listItem}>• Schedule: Tuesdays and Thursdays</Text>
            <Text style={styles.listItem}>• Requirements: None, open to all skill levels</Text>

            <Text style={styles.heading}>What You Will Learn</Text>
            <Text style={styles.listItem}>• Essential cooking methods and techniques</Text>
            <Text style={styles.listItem}>• How to plan and prepare nutritious meals</Text>
            <Text style={styles.listItem}>• Food safety practices and kitchen hygiene</Text>
            <Text style={styles.listItem}>• Plating and meal presentation for professional settings</Text>
        </View>
    </ScrollView>
);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f9f9f9',
    },
    header: {
        alignItems: 'center',
        padding: 10,
        backgroundColor: '#81D8D0',
        position: 'relative', // Allow positioning of the back button at the top left
    },
    backButton: {
        position: 'absolute', // Positioning the button at the top-left
        left: 10,
        top: 10,
        zIndex: 1, // Ensure the button stays on top of other elements
    },
    logo: {
        width: 200,
        height: 200,
        borderRadius: 100,
    },
    title: {
        fontSize: 24,
        fontFamily: 'Didot, serif',
        fontWeight: 'bold',
        color: 'transparent',
        textAlign: 'center',
        background: 'linear-gradient(to right, #f0286e, #81D8D0)',
        backgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
    },
    content: {
        padding: 20,
        backgroundColor: 'white',
    },
    heading: {
        fontSize: 22,
        fontFamily: 'Didot, serif',
        color: '#81D8D0',
        textAlign: 'center',
        marginBottom: 10,
    },
    paragraph: {
        fontSize: 16,
        color: '#333',
        lineHeight: 24,
        marginBottom: 10,
    },
    listItem: {
        fontSize: 16,
        color: '#666',
        marginBottom: 5,
    },
});

export default CookingScreen;
