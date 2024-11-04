//SixWeekCourse.tsx
import React from 'react';
import { ScrollView, View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

// CourseCard Component
const CourseCard = ({ imageSource, title, description, buttonTitle, onPress }) => (
  <View style={styles.card}>
    <Image source={imageSource} style={styles.cardImage} />
    <Text style={styles.cardTitle}>{title}</Text>
    <Text style={styles.cardDescription}>{description}</Text>
    <TouchableOpacity style={styles.learnMoreButton} onPress={onPress}>
      <Text style={styles.learnMoreText}>{buttonTitle}</Text>
    </TouchableOpacity>
  </View>
);

// Combined Courses Screen
const CoursesScreen = ({ navigation }) => (
  <ScrollView style={styles.container}>
    <View style={styles.header}>
      <Image source={require('../assets/logo.png')} style={styles.logo} />
      <Text style={styles.title}>Empowering the Nation</Text>
    </View>

    {/* Six-Week Courses Section */}
    <View style={styles.content}>
      <Text style={styles.heading}>Fast-Track Your Skills with Our 6-Week Courses</Text>
      <Text style={styles.paragraph}>
        Empowering the Nation offers six-week courses designed to provide intensive training for immediate skill application.
      </Text>
      <View style={styles.grid}>
        <CourseCard
          imageSource={{ uri: 'https://plus.unsplash.com/premium_photo-1661727647956-7d7d3e8ed550' }}
          title="Child Minding"
          description="An introduction to fundamental childcare techniques."
          buttonTitle="Go to Child Minding"
          onPress={() => navigation.navigate('ChildMinding')}
        />
        <CourseCard
          imageSource={{ uri: 'https://images.unsplash.com/photo-1466637574441-749b8f19452f' }}
          title="Cooking Skills"
          description="Discover essential kitchen skills and simple recipes."
          buttonTitle="Go to Cooking"
          onPress={() => navigation.navigate('Cooking')}
        />
        <CourseCard
          imageSource={{ uri: 'https://images.unsplash.com/photo-1460533893735-45cea2212645' }}
          title="Garden Maintenance"
          description="Basic knowledge on plant care, soil prep, and seasonal tasks."
          buttonTitle="Go to Garden Maintenance"
          onPress={() => navigation.navigate('GardenMaintenance')}
        />
      </View>
    </View>

    {/* Six-Month Courses Section */}
    <View style={styles.content}>
      <Text style={styles.heading}>Upskill Yourself with Our 6-Month Courses</Text>
      <View style={styles.verticalContainer}>
        <CourseCard
          imageSource={{ uri: 'https://images.unsplash.com/photo-1605022936264-d57a9e20942a' }}
          title="Landscaping Course"
          description="Learn landscape design principles."
          buttonTitle="Learn More"
          onPress={() => navigation.navigate('Landscaping')}
        />
        <CourseCard
          imageSource={{ uri: 'https://images.unsplash.com/photo-1517960413843-0aee8e2b3285' }}
          title="Life Skills Course"
          description="Develop key life skills for success."
          buttonTitle="Learn More"
          onPress={() => navigation.navigate('LifeSkills')}
        />
        <CourseCard
          imageSource={{ uri: 'https://images.unsplash.com/photo-1542044801-30d3e45ae49a' }}
          title="Sewing Course"
          description="Learn the basics of sewing."
          buttonTitle="Learn More"
          onPress={() => navigation.navigate('Sewing')}
        />
        <CourseCard
          imageSource={{ uri: 'https://plus.unsplash.com/premium_photo-1661779439009-469c7abbbe42' }}
          title="First Aid Course"
          description="Learn essential first aid skills."
          buttonTitle="Learn More"
          onPress={() => navigation.navigate('FirstAid')}
        />
      </View>
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
    padding: 10,
    backgroundColor: '#81D8D0',
  },
  logo: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  title: {
    fontSize: 24,
    fontFamily: 'Didot, serif',
    textAlign: 'center',
    color: '#fff',
    fontWeight: 'bold',
  },
  content: {
    padding: 20,
    backgroundColor: 'white',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    marginBottom: 20,
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
  grid: {
    flexDirection: 'row',
    justifyContent: 'center',
    flexWrap: 'wrap',
    gap: 16,
  },
  verticalContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    paddingVertical: 10,
  },
  footer: {
    padding: 20,
    backgroundColor: '#81D8D0',
    alignItems: 'center',
  },
  footerText: {
    color: '#fff',
    fontSize: 14,
    marginBottom: 5,
  },
  card: {
    width: '80%',
    padding: 10,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 10,
    backgroundColor: '#81D8D0',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
  },
  cardImage: {
    width: '100%',
    height: 100,
    borderRadius: 8,
    marginBottom: 10,
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
  },
  learnMoreText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default CoursesScreen;
