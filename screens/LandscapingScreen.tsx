// CODE ATTRIBUTION
// TITLE: React Native. (2024) Navigating Between Screens
// AVAILABLE: https://reactnative.dev/docs/navigation (Accessed: 1 November 2024)

// CODE ATTRIBUTION
// TITLE: React Navigation. (2024) Drawer Navigation
// AVAILABLE: https://reactnavigation.org/docs/drawer-based-navigation/ (Accessed: 1 November 2024)

// CODE ATTRIBUTION
// TITLE: React Native. (2024) Navigating Between Screens
// AVAILABLE: https://reactnative.dev/docs/navigation (Accessed: 11 November 2024)

// CODE ATTRIBUTION
// TITLE: React Navigation. (2024) Drawer Navigation
// AVAILABLE: https://reactnavigation.org/docs/drawer-based-navigation/ (Accessed: 11 November 2024)


// CODE ATTRIBUTION
// TITLE: IIE Module Manual 2024
// AUTHOR: The Independent Institute of Education (Pty) Ltd
// DATE: 09/02/2023
// VERSION: First Edition: 2012
// AVAILABLE: https://advtechonline.sharepoint.com/sites/TertiaryStudents/IIE%20Student%20Materials/Forms/Default%20View.aspx?id=%2Fsites%2FTertiaryStudents%2FIIE%20Student%20Materials%2FNew%20Student%20Materials%20CAT%2FWEDE5020%2F2024%2FWEDE5020MM%20%2D%20REVISED%209%20Feb%202023%2Epdf&viewid=db15e059%2D4f93%2D487f%2Dabda%2De538b821c7b8&parent=%2Fsites%2FTertiaryStudents%2FIIE%20Student%20Materials%2FNew%20Student%20Materials%20CAT%2FWEDE5020%2F2024

// CODE ATTRIBUTION
// TITLE: XHAW5112/d/p/w WORK INTEGRATED LEARNING 1 MODULE MANUAL
// AUTHOR: The Independent Institute of Education (Pty) Ltd
// DATE: 09/02/2023
// VERSION: 2024 Edition
// AVAILABLE: https://advtechonline.sharepoint.com/sites/TertiaryStudents/IIE%20Student%20Materials/Forms/Default%20View.aspx?id=%2Fsites%2FTertiaryStudents%2FIIE%20Student%20Materials%2FNew%20Student%20Materials%20CAT%2FWEDE5020%2F2024%2FWEDE5020MM%20%2D%20REVISED%209%20Feb%202023%2Epdf&viewid=db15e059%2D4f93%2D487f%2Dabda%2De538b821c7b8&parent=%2Fsites%2FTertiaryStudents%2FIIE%20Student%20Materials%2FNew%20Student%20Materials%20CAT%2FWEDE5020%2F2024

// CODE ATTRIBUTION
// TITLE: Principles of UI and UX Design - PIXD5112d/p/w MODULE OUTLINE
// AUTHOR: The Independent Institute of Education (Pty) Ltd
// DATE: 09/02/2023
// VERSION: 2024 Edition (First published in 2022)
// AVAILABLE:https://advtechonline.sharepoint.com/sites/TertiaryStudents/IIE%20Student%20Materials/Forms/Default%20View.aspx?id=%2Fsites%2FTertiaryStudents%2FIIE%20Student%20Materials%2FNew%20Student%20Materials%20CAT%2FWEDE5020%2F2024%2FWEDE5020MM%20%2D%20REVISED%209%20Feb%202023%2Epdf&viewid=db15e059%2D4f93%2D487f%2Dabda%2De538b821c7b8&parent=%2Fsites%2FTertiaryStudents%2FIIE%20Student%20Materials%2FNew%20Student%20Materials%20CAT%2FWEDE5020%2F2024

// CODE ATTRIBUTION
// TITLE: WEB DEVELOPMENT - WEDE5020/d/p/w MODULE MANUAL/GUIDE
// AUTHOR: The Independent Institute of Education (Pty) Ltd
// DATE: 09/02/2023
// VERSION: 2024 Edition (First published in 2012)
// AVAILABLE: https://advtechonline.sharepoint.com/sites/TertiaryStudents/IIE%20Student%20Materials/Forms/Default%20View.aspx?id=%2Fsites%2FTertiaryStudents%2FIIE%20Student%20Materials%2FNew%20Student%20Materials%20CAT%2FWEDE5020%2F2024%2FWEDE5020MM%20%2D%20REVISED%209%20Feb%202023%2Epdf&viewid=db15e059%2D4f93%2D487f%2Dabda%2De538b821c7b8&parent=%2Fsites%2FTertiaryStudents%2FIIE%20Student%20Materials%2FNew%20Student%20Materials%20CAT%2FWEDE5020%2F2024

// CODE ATTRIBUTION
// TITLE: HTML Tutorial
// AUTHOR: W3Schools
// DATE: 09/02/2023
// VERSION: N/A
// AVAILABLE: https://www.w3schools.com/html/ [Accessed 8 Nov. 2024]

import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons'; // Import the icon library

const LandscapingScreen = ({ navigation }) => (
    <ScrollView style={styles.container}>
        <View style={styles.header}>
            <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
                <Icon name="arrow-back" size={30} color="white" />
            </TouchableOpacity>
            <Image source={require('../assets/logo.png')} style={styles.logo} />
            <Text style={styles.title}>Child Minding Course</Text>
        </View>
        <View style={styles.header}>
            <Text style={styles.title}>Landscaping Course</Text>
        </View>

        <View style={styles.content}>
            <Text style={styles.heading}>Course Overview</Text>
            <Text style={styles.paragraph}>
                Our Landscaping Course equips learners with practical knowledge on landscape design, plant care, and garden maintenance.
            </Text>

            <Text style={styles.heading}>Course Details</Text>
            <Text style={styles.listItem}>• Duration: 6 months</Text>
            <Text style={styles.listItem}>• Modules: Garden Design, Plant Care, Hardscaping</Text>
            <Text style={styles.listItem}>• Schedule: Mondays and Wednesdays</Text>

            <Text style={styles.heading}>What You Will Learn</Text>
            <Text style={styles.listItem}>• Landscape design principles</Text>
            <Text style={styles.listItem}>• Plant selection and care</Text>
            <Text style={styles.listItem}>• Hardscaping techniques</Text>
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
        padding: 0.5,
        backgroundColor: '#81D8D0', // Match website's theme
        flexDirection: 'row', // Align the logo and back button horizontally
        justifyContent: 'space-between', // Space out the items in the header
        paddingHorizontal: 20, // Add some horizontal padding
    },
    backButton: {
        padding: 10, // Padding for better tap area
        justifyContent: 'center',
        alignItems: 'center',
    },
    logo: {
        width: 200,
        height: 200,
        borderRadius: 100, // Rounded logo similar to website
    },
    title: {
        fontSize: 24,
        fontFamily: 'Didot, serif', // Use website's font
        textAlign: 'center',
        color: 'transparent',
        backgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        WebkitBackgroundClip: 'text',
        textShadow: '2px 2px 5px rgba(255, 255, 255, 0.057)', // Text shadow for effect
        margin: 0,
        fontWeight: 'bold',
    },
    content: {
        padding: 20,
        backgroundColor: 'white',
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
    listItem: {
        fontSize: 16,
        marginBottom: 5,
        color: '#666',
    },
});

export default LandscapingScreen;
