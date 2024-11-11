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
import { Ionicons } from '@expo/vector-icons'; // Import the Ionicons library for icons
import { useNavigation } from '@react-navigation/native'; // To handle navigation

// About Us Screen
const AboutUsScreen = () => {
  const navigation = useNavigation(); // Hook to get the navigation prop

  return (
    <ScrollView style={styles.container}>
      {/* Header with Go Back Button */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.goBackButton} onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={30} color="black" />
        </TouchableOpacity>
        <Image source={require('../assets/logo.png')} style={styles.logo} />
        <Text style={styles.title}>About Us Page | Empowering the Nation</Text>
      </View>

      {/* Content Section */}
      <View style={styles.content}>
        <Text style={styles.heading}>Our Story</Text>
        <Image
          source={{
            uri: 'https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExeXF3OHdhNTQ5N3o0cm9mMGVnaDEycnU2emx0cGxudmtkdnEyYzdwciZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/hugf7zvy8sahVmRyXi/giphy.gif',
          }}
          style={styles.homeImage1}
        />
        <Text style={styles.paragraph}>
          Empowering the Nation is a local initiative founded in 2018 by Precious Radebe with the mission to provide essential skills
          training to domestic workers and gardeners in Johannesburg. Born out of a desire to uplift members of her community, Precious
          created this initiative to help individuals improve their job prospects or start their own businesses.
        </Text>

        <Text style={styles.heading}>Our Mission</Text>
        <Image
          source={{
            uri: 'https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExajk5dXI2bTZiamhuMmtiMm1xMjJvNGlhaDVod3ByZTZsN3BjNTllNCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/feRZ2w1qgMIEHrZ3Br/giphy.gif',
          }}
          style={styles.homeImage1}
        />
        <Text style={styles.paragraph}>
          Our mission is to provide high-quality, professional training that empowers domestic workers and gardeners with marketable
          skills, allowing them to secure better employment or start their own small businesses.
        </Text>

        <Text style={styles.heading}>Our Courses</Text>
        <Text style={styles.paragraph}>We offer the following six-month courses:</Text>

        <Image
          source={{
            uri: 'https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExdzlodGZ5Y2pqZWswY3hqMW5yb2QwZ3NnNmRwcnowNmtqenRuZWI2dSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/wFKUR4FSXpu58yvOyp/giphy.gif',
          }}
          style={styles.homeImage1}
        />

        <Text style={styles.listItem}>• First Aid</Text>
        <Text style={styles.listItem}>• Sewing</Text>
        <Text style={styles.listItem}>• Landscaping</Text>
        <Text style={styles.listItem}>• Life Skills</Text>

        <Text style={styles.paragraph}>Our six-week short courses include:</Text>

        <Text style={styles.listItem}>• Child Minding</Text>
        <Text style={styles.listItem}>• Cooking</Text>
        <Text style={styles.listItem}>• Garden Maintenance</Text>
      </View>

      {/* Footer Section */}
      <View style={styles.footer}>
        <Text style={styles.footerText}>© 2024 Empowering the Nation. All rights reserved.</Text>
      </View>
    </ScrollView>
  );
};

// Styles
const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f9f9f9' },
  header: { alignItems: 'center', padding: 10, backgroundColor: '#81D8D0' },
  goBackButton: {
    position: 'absolute',
    left: 20,
    top: 40,
    zIndex: 1,
  },
  logo: { width: 200, height: 200, borderRadius: 100 },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#fff',
    marginVertical: 10,
  },
  content: { padding: 20, backgroundColor: 'white' },
  heading: { fontSize: 22, color: '#81D8D0', textAlign: 'center', marginBottom: 10 },
  paragraph: { fontSize: 16, lineHeight: 24, color: '#333', marginBottom: 10 },
  bold: { fontWeight: 'bold' },
  listItem: { fontSize: 16, marginBottom: 5, color: '#666' },
  footer: { padding: 20, backgroundColor: '#81D8D0', alignItems: 'center' },
  footerText: { color: '#fff', fontSize: 14 },
  homeImage1: { width: 400, height: 400, alignSelf: 'center', marginVertical: 20 },
});

export default AboutUsScreen;
