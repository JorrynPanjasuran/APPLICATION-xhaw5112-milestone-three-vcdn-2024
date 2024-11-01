// screens/WelcomeScreen.tsx
import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

const WelcomeScreen = ({ navigation }: { navigation: any }) => {
  return (
    <View style={styles.welcomeContainer}>
      {/* Welcome message displayed to the user */}
      <Text style={styles.welcomeTitle}>Welcome!</Text>

      {/* Display a welcome image */}
      <Image
        source={{ uri: 'https://i.pinimg.com/736x/9a/b9/e6/9ab9e6f29de33fb5f97700afdb939589.jpg' }}
        style={styles.welcomeLogo}
      />

      {/* Button to navigate to the HomeScreen */}
      <TouchableOpacity style={styles.welcomeButton} onPress={() => navigation.navigate('Home')}>
        <Text style={styles.continueButtonText}>Continue</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  welcomeContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#81D8D0',
  },
  welcomeTitle: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 20,
  },
  welcomeLogo: {
    width: 500,
    height: 500,
    alignSelf: 'center',
    marginBottom: 20,
  },
  welcomeButton: {
    backgroundColor: '#f0286e',
    paddingVertical: 20,
    paddingHorizontal: 40,
    borderRadius: 30,
    alignItems: 'center',
  },
  continueButtonText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
  },
  // Additional styles for other components if needed
});

export default WelcomeScreen;
