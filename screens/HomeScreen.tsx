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

      <View style={styles.footer}>
        <Text style={styles.footerText}>© 2024 Empowering the Nation. All rights reserved.</Text>
        <Text style={styles.footerText}>Email: info@empoweringthenation.co.za | Phone: +27-123-456-7890</Text>
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
