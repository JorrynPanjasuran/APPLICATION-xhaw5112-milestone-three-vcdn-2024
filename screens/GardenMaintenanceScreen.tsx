import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons'; // Import Ionicons

const GardenMaintenanceScreen = ({ navigation }) => (
    <ScrollView style={styles.container}>
        <View style={styles.header}>
            {/* Go Back Button */}
            <TouchableOpacity onPress={() => navigation.goBack()} style={styles.goBackButton}>
                <Ionicons name="arrow-back" size={30} color="white" />
            </TouchableOpacity>

            <Image source={require('../assets/logo.png')} style={styles.logo} />
            <Text style={styles.title}>Garden Maintenance Course</Text>
        </View>

        <View style={styles.content}>
            <Text style={styles.heading}>Garden Maintenance Course Overview</Text>
            <Text style={styles.paragraph}>
                The Garden Maintenance Course equips learners with essential skills to maintain and enhance garden landscapes. This course provides practical knowledge in plant care, soil management, and garden tools handling.
            </Text>

            <Text style={styles.heading}>Course Details</Text>
            <Text style={styles.listItem}>• Duration: 6 weeks</Text>
            <Text style={styles.listItem}>• Modules: Plant Care, Soil Preparation, Landscaping Basics, Tool Maintenance</Text>
            <Text style={styles.listItem}>• Schedule: Mondays and Wednesdays</Text>
            <Text style={styles.listItem}>• Requirements: Basic gardening experience preferred but not required</Text>

            <Text style={styles.heading}>What You Will Learn</Text>
            <Text style={styles.listItem}>• How to care for and maintain various types of plants</Text>
            <Text style={styles.listItem}>• Techniques for soil preparation and fertilization</Text>
            <Text style={styles.listItem}>• Basic landscaping and garden design principles</Text>
            <Text style={styles.listItem}>• Proper use and maintenance of gardening tools</Text>
        </View>

        <View style={styles.footer}>
            <Text style={styles.footerText}>© 2024 Empowering the Nation. All rights reserved.</Text>
        </View>
    </ScrollView>
);

// Styles for the components

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f9f9f9',
    },
    header: {
        alignItems: 'center',
        padding: 0.5,
        backgroundColor: '#81D8D0',
    },
    logo: {
        width: 200,
        height: 200,
        borderRadius: 100,
    },
    title: {
        fontSize: 24,
        fontFamily: 'Didot, serif',
        background: 'linear-gradient(to right, #f0286e, #81D8D0)',
        textAlign: 'center',
        color: 'transparent',
        backgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        WebkitBackgroundClip: 'text',
        textShadow: '2px 2px 5px rgba(255, 255, 255, 0.057)',
        margin: 0,
        fontWeight: 'bold',
    },

    // Go Back Button Styles
    goBackButton: {
        position: 'absolute',
        left: 10,
        top: 30,
        zIndex: 1,
    },

    content: {
        padding: 20,
        backgroundColor: 'white',
    },
    heading: {
        fontSize: 22,
        fontFamily: 'Didot, serif',
        color: '#81D8D0',
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
    footer: {
        padding: 20,
        backgroundColor: '#81D8D0',
        alignItems: 'center',
    },
    footerText: {
        color: '#fff',
        fontSize: 14,
    },
});

export default GardenMaintenanceScreen;
