//FirstAidScreen
import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';

const FirstAidScreen = ({ navigation }: any) => (
    <ScrollView style={styles.container}>
        <View style={styles.header}>
            <Text style={styles.title}>First Aid Course</Text>
        </View>

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

// Styles for the components

const styles = StyleSheet.create({
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
        backgroundColor: '#f9f9f9', // Match website background color
    },
    header: {
        alignItems: 'center',
        padding: 0.5,
        backgroundColor: '#81D8D0', // Match website's theme
    },
    logo: {
        width: 200,
        height: 200,
        borderRadius: 100, // Rounded logo similar to website
    },
    title: {
        fontSize: 24,
        fontFamily: 'Didot, serif', // Use website's font
        background: 'linear-gradient(to right, #f0286e, #81D8D0)',
        textAlign: 'center',
        color: 'transparent',
        backgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        WebkitBackgroundClip: 'text',
        textShadow: '2px 2px 5px rgba(255, 255, 255, 0.057)', // Text shadow for effect
        margin: 0,
        fontWeight: 'bold',
    },

    navbar: {
        flexDirection: 'row',
        flexWrap: 'wrap', // Allow wrapping of buttons
        justifyContent: 'space-between', // Space buttons evenly
        paddingVertical: 10, // Reduced padding for a more compact navbar
        backgroundColor: '#81D8D0', // Navbar background color
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.1,
        shadowRadius: 8,
        borderBottomWidth: 1, // Added border for better separation
        borderBottomColor: '#ddd', // Subtle border color
    },

    continueButton: {
        backgroundColor: '#f0286e',  // Background color for buttons
        padding: 10,                  // Increased padding for a better touch area
        borderRadius: 20,             // Rounded corners
        elevation: 3,                  // Slight elevation for shadow effect
        flex: 1,                       // Allow button to grow
        marginHorizontal: 5,           // Space between buttons
        minWidth: 100,                 // Set a minimum width for buttons
        alignItems: 'center',          // Center text within button
        marginVertical: 5,            // Margin between buttons vertically
    },
    welcomeButton: {
        backgroundColor: '#f0286e', // Pink color
        paddingVertical: 20,        // Normal size padding
        paddingHorizontal: 40,      // Normal size padding
        borderRadius: 30,
        alignItems: 'center',
    },

    Button: {
        backgroundColor: '#f0286e',  // Background color for buttons
        padding: 10,                  // Increased padding for a better touch area
        borderRadius: 20,             // Rounded corners
        elevation: 3,                  // Slight elevation for shadow effect
        flex: 1,                       // Allow button to grow
        marginHorizontal: 5,           // Space between buttons
        minWidth: 100,                 // Set a minimum width for buttons
        alignItems: 'center',          // Center text within button
        marginVertical: 5,            // Margin between buttons vertically
    },

    navbarLinks: {
        color: '#ffffff', // Change text color to white for better contrast
        fontSize: 14, // Adjusted font size
        textTransform: 'uppercase',
        textAlign: 'center', // Center the text
        fontWeight: 'bold', // Make the text bold
    },
    navbarActiveLink: {
        color: 'white', // Change color for active link for visibility
    },
    content: {
        padding: 20,
        backgroundColor: 'white',
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)', // Match content box shadow from website
    },
    heading: {
        fontSize: 22,
        fontFamily: 'Didot, serif', // Match heading font from website
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
    bold: {
        fontWeight: 'bold',
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
    grid: {
        flexDirection: 'row',
        justifyContent: 'center', // Centers the grid items
        flexWrap: 'wrap', // Allows the grid items to wrap on smaller screens
        gap: 16, // Adds space between the course cards
    },
    verticalContainer: {
        flexDirection: 'column', // Stack vertically
        alignItems: 'center',    // Center the cards horizontally
        paddingVertical: 10,     // Add some vertical padding
    },
    card: {
        width: '80%',
        height: "auto",
        padding: 10,
        marginBottom: 20,
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 10, // Slightly rounded corners to match product card style
        backgroundColor: '#81D8D0',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 5,
        transition: 'box-shadow 0.3s ease', // Add hover shadow effect
    },
    cardImage: {
        width: '100%',
        height: 100,
        borderRadius: 8,
        marginBottom: 10,
        transform: [{ scale: 1 }],
        transition: 'transform 5s ease',
    },
    cardImageHover: {
        transform: [{ scale: 2.5 }], // Slight zoom on hover
    },
    cardTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 5,
    },
    cardDescription: {
        fontSize: 14,
        color: '#666',
        marginBottom: 10,
    },
    learnMoreButton: {
        backgroundColor: '#f0286e',
        padding: 10,
        alignItems: 'center',
        borderRadius: 20,
        transition: 'background-color 0.3s ease',
    },
    learnMoreButtonHover: {
        backgroundColor: '#81D8D0', // Hover effect color change
    },
    learnMoreText: {
        color: '#fff',
        fontWeight: 'bold',
    },
    sectionImage: {
        width: '100%',
        height: 200,
        borderRadius: 8,
        marginBottom: 20,
        boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)', // Shadow around images
    },
    // Custom cursor effect for the mobile environment or web-based app:
    cursor: {
        position: 'absolute',
        width: 30,
        height: 30,
        backgroundColor: 'rgba(129, 216, 208, 0.8)', // Circle effect color
        borderRadius: '50%',
        pointerEvents: 'none',
        Index: 999,
    },

    // Updated homeImage1 style
    homeImage1: {
        width: 400,       // Increased the size of the image
        height: 400,      // Set height to match width for a square image
        borderRadius: 0, // Rounded corners
        alignSelf: 'center', // Centers the image within the parent View
        marginVertical: 20, // Adds space above and below the image
    },

    // Form container styling
    formContainer: {
        marginVertical: 20,
        paddingHorizontal: 20,
        paddingVertical: 15,
        backgroundColor: '#f8f8f8',
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 5,
        elevation: 5,
    },

    // Input field styling
    input: {
        backgroundColor: '#fff',
        padding: 10,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 30,
        marginBottom: 15,
        fontSize: 16,
    },

    // Special styling for message input
    messageInput: {
        height: 100,
        textAlignVertical: 'top',  // Keeps text at the top for multiline input
    },

    // Submit button styling
    submitButton: {
        backgroundColor: '#f0286e',
        paddingVertical: 12,
        paddingHorizontal: 25,
        borderRadius: 20,
        alignItems: 'center',
    },

    submitButtonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },

    contactImage: {
        width: 200,   // Adjust the width
        height: 150,  // Adjust the height
        marginBottom: 16,
        alignSelf: 'center', // Aligns the image to the center
    },

    // New row for Contact Info and Image
    contactRow: {
        flexDirection: 'row',    // Aligns elements horizontally
        justifyContent: 'space-between', // Spreads the content
        alignItems: 'center',    // Aligns items vertically in the center
        marginVertical: 20,
    },
    contactInfo: {
        flex: 1,
        marginRight: 10,   // Adds space between text and image
    },
    // New specific image style
    contactImage2: {
        width: 150,        // Adjust the size of the image
        height: 150,       // Adjust the height of the image
    },

    viewCartButton: {
        paddingVertical: 12,          // Increase vertical padding for better spacing
        paddingHorizontal: 24,        // Horizontal padding for a more substantial feel
        borderRadius: 20,             // Rounded corners for a modern look
        borderWidth: 1,               // Add a border
        borderColor: '#81D8D0',       // Use a color that fits the app's theme
        shadowColor: '#000',          // Slight shadow for elevation
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        alignItems: 'center',         // Center the text
        backgroundColor: 'transparent', // No background color
    },
    cartItem: {
        fontSize: 18,
        marginVertical: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
        paddingBottom: 10,
    },
    summary: {
        marginTop: 20,
        padding: 20,
        backgroundColor: '#f0f0f0',
        borderRadius: 10,
    },
    summaryText: {
        fontSize: 18,
        marginVertical: 5,
    },
    checkoutButton: {
        backgroundColor: '#f0286e',
        paddingVertical: 15,
        paddingHorizontal: 20,
        borderRadius: 30,
        alignItems: 'center',
        marginTop: 20,
    },
    goBackButton: {
        backgroundColor: '#81D8D0',
        paddingVertical: 15,
        paddingHorizontal: 20,
        borderRadius: 30,
        alignItems: 'center',
        marginTop: 10,
    },
    buttonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
    message: {
        fontSize: 18,
        textAlign: 'center',
        marginVertical: 20,
    },

    cartContainer: {
        backgroundColor: '#ffffff',
        padding: 20,
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 5,
    },
    cartItemContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
    },

    removeButton: {
        backgroundColor: '#f0286e',
        paddingVertical: 15,
        paddingHorizontal: 20,
        borderRadius: 20,
    },
    removeButtonText: {
        color: '#fff',
        fontWeight: 'bold',
    },
    summaryContainer: {
        marginTop: 20,
        paddingTop: 10,
        borderTopWidth: 1,
        borderTopColor: '#ddd',
    },
});

export default FirstAidScreen;
