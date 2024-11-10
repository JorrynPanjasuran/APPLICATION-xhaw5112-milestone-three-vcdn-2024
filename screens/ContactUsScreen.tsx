import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, Alert, ScrollView, StyleSheet, Modal } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons'; // Import Ionicons for the icon

const ContactUsScreen = ({ navigation }: any) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');

  // Handle form submission
  const handleSubmit = () => {
    if (!name || !email || !message) {
      setAlertMessage('Please fill in all fields.');
      setModalVisible(true);
      return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      setAlertMessage('Please enter a valid email address.');
      setModalVisible(true);
      return;
    }

    setAlertMessage('Thank you for reaching out. We will get back to you soon.');
    setModalVisible(true);

    // Clear input fields after submission
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        {/* Go Back Button as Icon */}
        <TouchableOpacity style={styles.goBackButton} onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={30} color="black" />
        </TouchableOpacity>

        <Image source={require('../assets/logo.png')} style={styles.logo} />
        <Text style={styles.title}>Contact Us | Empowering the Nation</Text>
      </View>

      <View style={styles.content}>
        <Text style={styles.heading}>Get in Touch with Us!</Text>
        <Text style={styles.paragraph}>
          Whether you’re looking to upskill your employees or yourself, we're here to help! Reach out to learn more about our courses and services at Empowering the Nation.
        </Text>

        <Image
          source={{ uri: 'https://i.pinimg.com/736x/94/e7/be/94e7beb337afaa329484be3345367e06.jpg' }}
          style={styles.contactImage}
        />

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

      {/* Custom Alert Modal */}
      <Modal
        transparent
        animationType="slide"
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContainer}>
            <Text style={styles.modalText}>{alertMessage}</Text>
            <TouchableOpacity style={styles.modalButton} onPress={() => setModalVisible(false)}>
              <Text style={styles.modalButtonText}>OK</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
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
    width: '100%',
  },
  goBackButton: {
    position: 'absolute',
    left: 20,
    top: 40,
    zIndex: 1,
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
  // New styles for the custom alert modal
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    width: 300,
    padding: 20,
    backgroundColor: '#fff',
    borderRadius: 10,
    alignItems: 'center',
  },
  modalText: {
    fontSize: 18,
    marginBottom: 20,
    textAlign: 'center',
  },
  modalButton: {
    backgroundColor: '#f0286e',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
  },
  modalButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default ContactUsScreen;
