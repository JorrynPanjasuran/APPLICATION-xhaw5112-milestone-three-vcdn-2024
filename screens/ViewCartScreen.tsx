// screens/ViewCartScreen.js
import React, { useContext, useState } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Modal, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { CartContext } from '../screens/CartContext';

const VAT_RATE = 0.15; // 15% VAT

const ViewCartScreen = () => {
  const navigation = useNavigation();
  const { cartItems, removeFromCart } = useContext(CartContext);
  const [isModalVisible, setModalVisible] = useState(false);
  const [totalWithDiscount, setTotalWithDiscount] = useState(0);
  const [contactDetails, setContactDetails] = useState({ name: '', phone: '', email: '' });

  const calculateTotal = () => {
    const totalWithoutDiscount = cartItems.reduce(
      (total, item) => total + parseFloat(item.fees.replace('R', '')),
      0
    );

    // Apply discount based on the number of items
    let discount = 0;
    if (cartItems.length === 2) discount = 0.05;
    else if (cartItems.length === 3) discount = 0.10;
    else if (cartItems.length > 3) discount = 0.15;

    const discountAmount = totalWithoutDiscount * discount;
    const totalAfterDiscount = totalWithoutDiscount - discountAmount;
    const vatAmount = totalAfterDiscount * VAT_RATE;

    return { totalWithoutDiscount, discountAmount, totalAfterDiscount, vatAmount };
  };

  const handleRemoveItem = (index) => {
    removeFromCart(index);
  };

  const handleCheckout = () => {
    if (!contactDetails.name || !contactDetails.phone || !contactDetails.email) {
      alert('Please fill out all contact details before proceeding.');
      return;
    }
    const { totalAfterDiscount } = calculateTotal();
    setTotalWithDiscount(totalAfterDiscount);
    setModalVisible(true);
  };

  const { totalWithoutDiscount, discountAmount, totalAfterDiscount, vatAmount } = calculateTotal();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Your Cart</Text>

      {cartItems && cartItems.length > 0 ? (
        <>
          <FlatList
            data={cartItems}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item, index }) => (
              <View style={styles.itemContainer}>
                <Text style={styles.itemText}>{item.title} - {item.fees}</Text>
                <TouchableOpacity onPress={() => handleRemoveItem(index)} style={styles.removeButton}>
                  <Text style={styles.removeButtonText}>Remove</Text>
                </TouchableOpacity>
              </View>
            )}
          />

          <View style={styles.summaryContainer}>
            <Text style={styles.summaryText}>Total (before discount): R{totalWithoutDiscount.toFixed(2)}</Text>
            {discountAmount > 0 && (
              <>
                <Text style={styles.summaryText}>Discount: -R{discountAmount.toFixed(2)}</Text>
                <Text style={styles.summaryText}>Total (after discount): R{totalAfterDiscount.toFixed(2)}</Text>
              </>
            )}
            <Text style={styles.summaryText}>VAT (15%): R{vatAmount.toFixed(2)}</Text>
          </View>

          <View style={styles.contactForm}>
            <Text style={styles.formTitle}>Contact Details</Text>
            <TextInput
              style={styles.input}
              placeholder="Name"
              value={contactDetails.name}
              onChangeText={(text) => setContactDetails({ ...contactDetails, name: text })}
            />
            <TextInput
              style={styles.input}
              placeholder="Phone"
              value={contactDetails.phone}
              keyboardType="phone-pad"
              onChangeText={(text) => setContactDetails({ ...contactDetails, phone: text })}
            />
            <TextInput
              style={styles.input}
              placeholder="Email"
              value={contactDetails.email}
              keyboardType="email-address"
              onChangeText={(text) => setContactDetails({ ...contactDetails, email: text })}
            />
          </View>

          <TouchableOpacity style={styles.checkoutButton} onPress={handleCheckout}>
            <Text style={styles.buttonText}>Proceed to Checkout</Text>
          </TouchableOpacity>
        </>
      ) : (
        <Text style={styles.message}>Your cart is currently empty.</Text>
      )}

      <TouchableOpacity style={styles.goBackButton} onPress={() => navigation.goBack()}>
        <Text style={styles.buttonText}>Go Back to Cart</Text>
      </TouchableOpacity>

      <Modal
        transparent={true}
        visible={isModalVisible}
        animationType="slide"
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContainer}>
            <Text style={styles.modalTitle}>Order Confirmation</Text>
            <Text style={styles.modalMessage}>
              Thank you for your purchase, {contactDetails.name}! Your total order of R{(totalAfterDiscount).toFixed(2)} will be processed shortly.
              You'll receive a confirmation email at {contactDetails.email}.
            </Text>
            <TouchableOpacity
              style={styles.modalButton}
              onPress={() => {
                setModalVisible(false);
                navigation.navigate('OrderSuccess');
              }}
            >
              <Text style={styles.modalButtonText}>OK</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#f0286e',
    marginBottom: 16,
  },
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 16,
    backgroundColor: '#81d8d0',
    marginBottom: 8,
    borderRadius: 8,
  },
  itemText: {
    fontSize: 18,
    color: '#fff',
  },
  removeButton: {
    backgroundColor: '#f0286e',
    padding: 8,
    borderRadius: 5,
  },
  removeButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  summaryContainer: {
    marginTop: 16,
    padding: 16,
    backgroundColor: '#fff',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#81d8d0',
  },
  summaryText: {
    fontSize: 16,
    color: '#f0286e',
    marginBottom: 4,
  },
  checkoutButton: {
    marginTop: 16,
    padding: 16,
    backgroundColor: '#f0286e',
    borderRadius: 8,
    alignItems: 'center',
  },
  goBackButton: {
    marginTop: 16,
    padding: 16,
    backgroundColor: '#81d8d0',
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  message: {
    textAlign: 'center',
    marginTop: 16,
    fontSize: 18,
    color: '#f0286e',
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    width: '80%',
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#f0286e',
    marginBottom: 10,
  },
  modalMessage: {
    fontSize: 16,
    color: '#81d8d0',
    textAlign: 'center',
    marginBottom: 20,
  },
  modalButton: {
    backgroundColor: '#f0286e',
    padding: 10,
    borderRadius: 5,
    width: '50%',
    alignItems: 'center',
  },
  modalButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  // New styles for contact form
  contactForm: {
    marginTop: 16,
    padding: 16,
    backgroundColor: '#fff',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#81d8d0',
  },
  formTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#f0286e',
    marginBottom: 10,
  },
  input: {
    height: 40,
    borderColor: '#81d8d0',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 12,
    fontSize: 16,
  },
});

export default ViewCartScreen;
