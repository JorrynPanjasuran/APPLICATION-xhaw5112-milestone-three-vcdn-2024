import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, Alert, ScrollView, StyleSheet } from 'react-native';

// Define the ContactUsScreen component with navigation as a prop
const ContactUsScreen = ({ navigation }: any) => {
  // State variables for input fields
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  // Handle form submission
  const handleSubmit = () => {
    // Basic validation
    if (!name || !email || !message) {
      Alert.alert('Error', 'Please fill in all fields.');
      return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      Alert.alert('Error', 'Please enter a valid email address.');
      return;
    }

    // Simulate sending the message
    Alert.alert('Message Sent!', 'Thank you for reaching out. We will get back to you soon.');

    // Clear input fields after submission
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Image source={require('../assets/logo.png')} style={styles.logo} />
        <Text style={styles.title}>Contact Us | Empowering the Nation</Text>
      </View>

      <View style={styles.content}>
        <Text style={styles.heading}>Get in Touch with Us!</Text>
        <Text style={styles.paragraph}>
          Whether you’re looking to upskill your employees or yourself, we're here to help! Reach out to learn more about our courses and services at Empowering the Nation.
        </Text>

        {/* Image with specific size */}
        <Image
          source={{ uri: 'https://i.pinimg.com/736x/94/e7/be/94e7beb337afaa329484be3345367e06.jpg' }}
          style={styles.contactImage}
        />

        {/* Contact Form */}
        <View style={styles.formContainer}>
          <TextInput
            style={styles.input}
            placeholder="Your Name"
            placeholderTextColor="#999"
            value={name}
            onChangeText={setName}
          />
          <TextInput
            style={styles.input}
            placeholder="Your Email"
            placeholderTextColor="#999"
            keyboardType="email-address"
            value={email}
            onChangeText={setEmail}
          />
          <TextInput
            style={[styles.input, styles.messageInput]}
            placeholder="Your Message"
            placeholderTextColor="#999"
            multiline
            numberOfLines={5}
            value={message}
            onChangeText={setMessage}
          />
          <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
            <Text style={styles.submitButtonText}>Submit</Text>
          </TouchableOpacity>
        </View>

        {/* Contact Info and Image side by side */}
        <View style={styles.contactRow}>
          <View style={styles.contactInfo}>
            <Text style={styles.heading}>Contact Information</Text>
            <Text style={styles.paragraph}>Phone: +27 72 345 6789</Text>
            <Text style={styles.paragraph}>Email: info@empoweringthenation.co.za</Text>
            <Text style={styles.paragraph}>Address: 1234 Empowerment Street, Johannesburg, South Africa</Text>
          </View>

          <Image
            source={{ uri: 'https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExa3YybmF6MnRsZmdjb2c4b2Q2c240b2d0ZDVwNDdhdm56NjV3M2I3NSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/pjFRyoPh1B7fyBMmox/giphy.gif' }}
            style={styles.contactImage2}
          />
        </View>
      </View>

      <View style={styles.footer}>
        <Text style={styles.footerText}>© 2024 Empowering the Nation. All rights reserved.</Text>
      </View>
    </ScrollView>
  );
};

// Styling
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
    color: '#333',
    marginVertical: 10,
  },
  content: {
    padding: 20,
    backgroundColor: '#fff',
  },
  heading: {
    fontSize: 22,
    fontWeight: 'bold',
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
  formContainer: {
    padding: 20,
    backgroundColor: '#f8f8f8',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
  },
  input: {
    backgroundColor: '#fff',
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 30,
    marginBottom: 15,
    fontSize: 16,
  },
  messageInput: {
    height: 100,
    textAlignVertical: 'top',
  },
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
    width: 200,
    height: 150,
    marginBottom: 16,
    alignSelf: 'center',
  },
  contactRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 20,
  },
  contactInfo: {
    flex: 1,
    marginRight: 10,
  },
  contactImage2: {
    width: 150,
    height: 150,
  },
  footer: {
    padding: 20,
    backgroundColor: '#81D8D0',
    alignItems: 'center',
  },
  footerText: {
    color: '#fff',
    fontSize: 14,
  },
});

export default ContactUsScreen;
