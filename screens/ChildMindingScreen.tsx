// screens/ChildMinding.tsx
import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons'; // Importing Ionicons

const ChildMindingScreen = ({ navigation }) => (
    <ScrollView style={styles.container}>
        <View style={styles.header}>
            <TouchableOpacity
                style={styles.backButton}
                onPress={() => navigation.goBack()} // Navigate back to the previous screen
                accessibilityLabel="Go Back"
                accessible={true} // Enhances accessibility
            >
                <Ionicons name="arrow-back" size={30} color="#fff" />
            </TouchableOpacity>
            <Image source={require('../assets/logo.png')} style={styles.logo} />
            <Text style={styles.title}>Child Minding Course</Text>
        </View>

        <View style={styles.content}>
            <Text style={styles.heading}>Child Minding Course Overview</Text>
            <Text style={styles.paragraph}>
                This Child Minding Course equips learners with essential skills for providing high-quality care for young children. The course focuses on child safety, nutrition, and early childhood development.
            </Text>

            <Text style={styles.heading}>Course Details</Text>
            <Text style={styles.listItem}>• Duration: 6 weeks</Text>
            <Text style={styles.listItem}>• Modules: Child Safety, First Aid, Early Childhood Development, Nutrition</Text>
            <Text style={styles.listItem}>• Schedule: Mondays and Wednesdays</Text>
            <Text style={styles.listItem}>• Requirements: None, open to all skill levels</Text>

            <Text style={styles.heading}>What You Will Learn</Text>
            <Text style={styles.listItem}>• Basic first aid for children</Text>
            <Text style={styles.listItem}>• Nutrition and meal preparation for young children</Text>
            <Text style={styles.listItem}>• Child safety practices</Text>
            <Text style={styles.listItem}>• Developmental milestones in early childhood</Text>
        </View>
    </ScrollView>
);

// Styles for the components
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f9f9f9', // Match website background color
    },
    header: {
        alignItems: 'center',
        padding: 10,
        backgroundColor: '#81D8D0', // Match website's theme
        position: 'relative', // Allow positioning of the back button
    },
    backButton: {
        position: 'absolute', // Positioning the button at the top-left
        left: 10,
        top: 10,
        zIndex: 1, // Ensure the button stays on top of other elements
        padding: 10, // Increase hit area for better usability
    },
    logo: {
        width: 200,
        height: 200,
        borderRadius: 100, // Rounded logo similar to website
    },
    title: {
        fontSize: 24,
        fontFamily: 'Didot, serif', // Use website's font
        color: '#fff',
        textAlign: 'center',
        fontWeight: 'bold',
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
        backgroundColor: '#81D8D0', // Match footer background
        alignItems: 'center',
    },
    footerText: {
        color: '#fff',
        fontSize: 14,
        marginBottom: 5,
    },
});

export default ChildMindingScreen;
