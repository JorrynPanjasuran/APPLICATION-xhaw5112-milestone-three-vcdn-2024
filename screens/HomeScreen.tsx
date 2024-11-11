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

// screens/HomeScreen.tsx
import React from 'react';
import { View, Text, ScrollView, StyleSheet, Image } from 'react-native';

const HomeScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Image source={require('../assets/logo.png')} style={styles.logo} />
        <Text style={styles.title}>Empowering the Nation</Text>
      </View>

      <View style={styles.content}>
        <Text style={styles.heading}>
          <Text style={styles.bold}>Welcome to Empowering the Nation!</Text>
        </Text>
        <Text style={styles.paragraph}>
          Empowering the Nation is a skills training initiative founded by <Text style={styles.bold}>Precious Radebe</Text>.
          We provide training for domestic workers and gardeners, helping them gain valuable skills to enhance their
          employment opportunities or start their own businesses.
        </Text>

        <Image
          source={{ uri: 'https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExajg2YzB2aHF0cHhsZng1aTJ6bms3bzhnc29xNWtkcm94NTM3Z2g0ZyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/ely4rBm8A59syxBS5o/giphy.gif' }}
          style={styles.homeImage1}
        />

        <Text style={styles.paragraph}>
          Whether you're an employer looking to upskill your employees or an individual eager to enhance your skills,
          Empowering the Nation offers a variety of programs that meet your needs.
        </Text>

        <Image
          source={{ uri: 'https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExdmgxMzFpNWJ6NzM3MWhwNmhzOG1vanptaGphc3RjaHhobDJrZ3R1eCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/WRtDZQd0OsIQpqHueY/giphy.gif' }}
          style={styles.homeImage1}
        />

        <Text style={styles.heading}><Text style={styles.bold}>Available Courses</Text></Text>
        <Text style={styles.paragraph}>We offer both six-month long Learnerships and six-week Short Skills Training Programmes!</Text>

        <Text style={styles.paragraph}><Text style={styles.bold}>6 Month Learnerships:</Text></Text>
        <Text style={styles.listItem}>• First Aid</Text>
        <Text style={styles.listItem}>• Sewing</Text>
        <Text style={styles.listItem}>• Landscaping</Text>
        <Text style={styles.listItem}>• Life Skills</Text>

        <Text style={styles.paragraph}><Text style={styles.bold}>6 Week Short Skills Programs:</Text></Text>
        <Text style={styles.listItem}>• Child Minding</Text>
        <Text style={styles.listItem}>• Cooking</Text>
        <Text style={styles.listItem}>• Garden Maintenance</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f9f9f9' },
  header: { alignItems: 'center', padding: 10, backgroundColor: '#81D8D0' },
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

export default HomeScreen;
