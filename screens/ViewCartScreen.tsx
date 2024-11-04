// screens/ViewCartScreen.js
import React, { useContext, useState } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Modal } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { CartContext } from '../screens/CartContext';

const ViewCartScreen = () => {
  const navigation = useNavigation();
  const { cartItems, removeFromCart } = useContext(CartContext);
  const [isModalVisible, setModalVisible] = useState(false);
  const [totalWithDiscount, setTotalWithDiscount] = useState(0);

  const calculateTotal = () => {
    const totalWithoutDiscount = cartItems.reduce(
      (total, item) => total + parseFloat(item.fees.replace('R', '')),
      0
    );

    let discount = 0;
    if (cartItems.length === 2) discount = 0.05;
    else if (cartItems.length === 3) discount = 0.10;
    else if (cartItems.length > 3) discount = 0.15;

    const discountAmount = totalWithoutDiscount * discount;
    const totalWithDiscount = totalWithoutDiscount - discountAmount;

    return { totalWithoutDiscount, discountAmount, totalWithDiscount };
  };

  const handleRemoveItem = (index) => {
    removeFromCart(index);
  };

  const handleCheckout = () => {
    const { totalWithDiscount } = calculateTotal();
    setTotalWithDiscount(totalWithDiscount);
    setModalVisible(true);
  };

  const { totalWithoutDiscount, discountAmount } = calculateTotal();

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
                <Text style={styles.summaryText}>Total (after discount): R{totalWithDiscount.toFixed(2)}</Text>
              </>
            )}
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

      {/* Custom Modal for Alert */}
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
              Thank you for your purchase! Your total order of R{totalWithDiscount.toFixed(2)} will be processed shortly.
              You'll receive a confirmation email soon.
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

// Styles for ViewCartScreen
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f9f9f9',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 16,
    backgroundColor: '#fff',
    marginBottom: 8,
    borderRadius: 8,
  },
  itemText: {
    fontSize: 18,
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
    backgroundColor: '#e0e0e0',
    borderRadius: 8,
  },
  summaryText: {
    fontSize: 16,
    marginBottom: 4,
  },
  checkoutButton: {
    marginTop: 16,
    padding: 16,
    backgroundColor: '#4CAF50',
    borderRadius: 8,
    alignItems: 'center',
  },
  goBackButton: {
    marginTop: 16,
    padding: 16,
    backgroundColor: '#2196F3',
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
    color: '#555',
  },
  // Modal styles
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
    marginBottom: 10,
  },
  modalMessage: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
  },
  modalButton: {
    backgroundColor: '#4CAF50',
    padding: 10,
    borderRadius: 5,
    width: '50%',
    alignItems: 'center',
  },
  modalButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default ViewCartScreen;
