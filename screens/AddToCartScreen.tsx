// screens/AddToCartScreen.tsx
import React, { useContext } from 'react'; // Corrected import syntax
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { CartContext } from '../screens/CartContext'; // Import CartContext


const AddToCartScreen = () => {
  const { addToCart } = useContext(CartContext); // Use addToCart from context
  const navigation = useNavigation();

  const renderCourseCard = (course) => (
    <View style={styles.card} key={course.title}>
      <Image source={course.imageSource} style={styles.image} />
      <Text style={styles.title}>{course.title}</Text>
      <Text style={styles.description}>{course.description}</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          addToCart(course); // Use addToCart from context
          alert(`${course.title} has been added to your cart!`);
        }}>
        <Text style={styles.buttonText}>Add to Cart</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Your Cart</Text>
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.viewCartButton}
          onPress={() => navigation.navigate('ViewCart')}>
          <Text style={styles.buttonText}>View Cart</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.content}>
        <Text style={styles.heading}>
          <Text style={styles.bold}>Add to Cart!</Text>
        </Text>
        <View style={styles.verticalContainer}>
          {renderCourseCard({
            imageSource: { uri: 'https://images.unsplash.com/photo-1605022936264-d57a9e20942a' },
            title: "Landscaping Course",
            description: `Learn landscape design principles. Fees: R1500`,
            fees: "R1500",
          })}
          {renderCourseCard({
            imageSource: { uri: 'https://images.unsplash.com/photo-1517960413843-0aee8e2b3285' },
            title: "Life Skills Course",
            description: `Develop key life skills for success. Fees: R1500`,
            fees: "R1500",
          })}
          {renderCourseCard({
            imageSource: { uri: 'https://images.unsplash.com/photo-1542044801-30d3e45ae49a' },
            title: "Sewing Course",
            description: `Learn the basics of sewing. Fees: R1500`,
            fees: "R1500",
          })}
          {renderCourseCard({
            imageSource: { uri: 'https://plus.unsplash.com/premium_photo-1661779439009-469c7abbbe42' },
            title: "First Aid Course",
            description: `Learn essential first aid skills. Fees: R1500`,
            fees: "R1500",
          })}
        </View>

        <View style={styles.grid}>
          {renderCourseCard({
            imageSource: { uri: 'https://plus.unsplash.com/premium_photo-1661727647956-7d7d3e8ed550?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
            title: "Child Minding",
            description: `An introduction to fundamental childcare techniques. Fees: R750`,
            fees: "R750",
          })}
          {renderCourseCard({
            imageSource: { uri: 'https://images.unsplash.com/photo-1466637574441-749b8f19452f?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
            title: "Cooking Skills",
            description: `Discover essential kitchen skills. Fees: R750`,
            fees: "R750",
          })}
          {renderCourseCard({
            imageSource: { uri: 'https://images.unsplash.com/photo-1460533893735-45cea2212645?q=80&w=1856&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
            title: "Garden Maintenance",
            description: `Essential gardening knowledge. Fees: R750`,
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
    padding: 0.5,
    backgroundColor: '#81D8D0',
  },
  title: {
    fontSize: 24,
    fontFamily: 'Didot, serif',
    color: '#81D8D0',
    textAlign: 'center',
    fontWeight: 'bold',
    marginVertical: 10,
  },
  content: {
    padding: 20,
    backgroundColor: 'white',
  },
  heading: {
    fontSize: 22,
    fontFamily: 'Didot, serif',
    color: '#81D8D0',
    textAlign: "center",
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
  },
  card: {
    width: '80%',
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 10,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 5,
    padding: 10,
  },
  description: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#555',
    marginBottom: 10,
    textAlign: 'center',
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 10,
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#f0286e',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default AddToCartScreen;
