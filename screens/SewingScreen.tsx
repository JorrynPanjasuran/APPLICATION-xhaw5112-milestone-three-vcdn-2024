// SewingScreen.tsx
import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';  // Import the useNavigation hook

const SewingScreen = () => {
    const navigation = useNavigation();  // Initialize navigation with the hook

    return (
        <ScrollView style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
                    <Icon name="arrow-back" size={30} color="white" />
                </TouchableOpacity>
                <Image source={require('../assets/logo.png')} style={styles.logo} />
                <Text style={styles.title}>Child Minding Course</Text>
            </View>

            <View style={styles.header}>
                <Text style={styles.title}>Sewing Course</Text>
            </View>

            <View style={styles.content}>
                <Text style={styles.heading}>Course Overview</Text>
                <Text style={styles.paragraph}>
                    Learn the fundamental sewing techniques, including machine operation, fabric selection, and basic stitching. Our Sewing Course covers beginner to advanced techniques.
                </Text>

                <Text style={styles.heading}>Course Details</Text>
                <Text style={styles.listItem}>• Duration: 6 weeks</Text>
                <Text style={styles.listItem}>• Modules: Basic Sewing, Intermediate Techniques, Advanced Projects</Text>
                <Text style={styles.listItem}>• Schedule: Mondays and Wednesdays</Text>

                <Text style={styles.heading}>What You Will Learn</Text>
                <Text style={styles.listItem}>• How to operate a sewing machine</Text>
                <Text style={styles.listItem}>• Sewing and stitching techniques</Text>
                <Text style={styles.listItem}>• Advanced garment construction</Text>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    // Styles remain unchanged
    welcomeContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#81D8D0",
    },
    welcomeTitle: {
        fontSize: 30,
        fontWeight: "bold",
        color: "#fff",
        marginBottom: 20,
    },
    image: {
        width: 300,
        height: 200,
        marginBottom: 20,
    },
    backButton: {
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    welcomeLogo: {
        width: 500,
        height: 500,
        justifyContent: "center",
        alignSelf: 'center',
        marginBottom: 20,
    },
    continueButtonText: {
        fontSize: 18,
        color: "#fff",
        fontWeight: "bold",
    },
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
    content: {
        padding: 20,
        backgroundColor: 'white',
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    },
    heading: {
        fontSize: 22,
        fontFamily: 'Didot, serif',
        color: '#81D8D0',
        justifyContent: "center",
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
});

export default SewingScreen;
