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

import React, { useContext, useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { CartContext } from '../screens/CartContext';

interface Course {
  imageSource: { uri: string };
  title: string;
  description: string;
  fees: string;
}

const AddToCartScreen: React.FC = () => {
  const { addToCart, removeFromCart } = useContext(CartContext); // Assuming removeFromCart function exists
  const navigation = useNavigation();

  // State to keep track of added items
  const [addedCourses, setAddedCourses] = useState<string[]>([]);

  const handleAddToCart = (course: Course) => {
    if (addedCourses.includes(course.title)) {
      Alert.alert('Item Already Added', `${course.title} has already been added to your cart!`);
    } else {
      addToCart(course);
      setAddedCourses(prev => [...prev, course.title]); // Add course title to the addedCourses array
      Alert.alert('Added to Cart', `${course.title} has been added to your cart!`);
    }
  };

  const handleRemoveFromCart = (course: Course) => {
    removeFromCart(course);  // Assuming the function is passed from the context
    setAddedCourses(prev => prev.filter(courseTitle => courseTitle !== course.title)); // Remove from state
    Alert.alert('Removed from Cart', `${course.title} has been removed from your cart!`);
  };

  const renderCourseCard = (course: Course) => {
    const isAdded = addedCourses.includes(course.title);

    return (
      <View style={styles.card} key={course.title}>
        <Image source={course.imageSource} style={styles.cardImage} />
        <Text style={styles.cardTitle}>{course.title}</Text>
        <Text style={styles.cardDescription}>{course.description}</Text>
        <TouchableOpacity
          style={styles.learnMoreButton}
          onPress={() => {
            if (isAdded) {
              handleRemoveFromCart(course); // Remove if already added
            } else {
              handleAddToCart(course); // Add if not already added
            }
          }}
        >
          <Text style={styles.learnMoreText}>{isAdded ? 'Add to the cart' : 'Add to Cart'}</Text>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Image source={require('../assets/logo.png')} style={styles.logo} />
        <Text style={styles.title}>Empowering the Nation</Text>
      </View>

      <View style={styles.content}>
        <Text style={styles.heading}>
          <Text style={styles.bold}>Add to Cart!</Text>
        </Text>
        <View style={styles.verticalContainer}>
          {renderCourseCard({
            imageSource: { uri: 'https://images.unsplash.com/photo-1605022936264-d57a9e20942a' },
            title: "Landscaping Course",
            description: "Learn landscape design principles. Fees: R1500",
            fees: "R1500",
          })}
          {renderCourseCard({
            imageSource: { uri: 'https://images.unsplash.com/photo-1517960413843-0aee8e2b3285' },
            title: "Life Skills Course",
            description: "Develop key life skills for success. Fees: R1500",
            fees: "R1500",
          })}
          {renderCourseCard({
            imageSource: { uri: 'https://images.unsplash.com/photo-1542044801-30d3e45ae49a' },
            title: "Sewing Course",
            description: "Learn the basics of sewing. Fees: R1500",
            fees: "R1500",
          })}
          {renderCourseCard({
            imageSource: { uri: 'https://plus.unsplash.com/premium_photo-1661779439009-469c7abbbe42' },
            title: "First Aid Course",
            description: "Learn essential first aid skills. Fees: R1500",
            fees: "R1500",
          })}
        </View>

        <View style={styles.grid}>
          {renderCourseCard({
            imageSource: { uri: 'https://plus.unsplash.com/premium_photo-1661727647956-7d7d3e8ed550' },
            title: "Child Minding",
            description: "An introduction to fundamental childcare techniques. Fees: R750",
            fees: "R750",
          })}
          {renderCourseCard({
            imageSource: { uri: 'https://images.unsplash.com/photo-1466637574441-749b8f19452f' },
            title: "Cooking Skills",
            description: "Discover essential kitchen skills. Fees: R750",
            fees: "R750",
          })}
          {renderCourseCard({
            imageSource: { uri: 'https://images.unsplash.com/photo-1460533893735-45cea2212645' },
            title: "Garden Maintenance",
            description: "Essential gardening knowledge. Fees: R750",
            fees: "R750",
          })}
        </View>
      </View>
    </ScrollView>
  );
};

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
    width: 200,
    height: 200,
    borderRadius: 100,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#fff',
    marginVertical: 10,
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
  bold: {
    fontWeight: 'bold',
  },
  verticalContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    paddingVertical: 10,
  },
  grid: {
    flexDirection: 'row',
    justifyContent: 'center',
    flexWrap: 'wrap',
    gap: 16,
  },
  card: {
    width: '80%',
    padding: 10,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 10,
    backgroundColor: '#fff',
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
    color: '#81D8D0',
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

export default AddToCartScreen;
