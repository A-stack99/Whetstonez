import React, {useState, useEffect} from 'react';
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  Modal,
  View,
  Button as RNButton,
  ActivityIndicator,
} from 'react-native';
import TickMark from '../../assests/Svg/TickMark';
import { useNavigation } from '@react-navigation/native';

const Button = ({title = 'Pay Now' }) => {
  const navigation = useNavigation()
  const [isVisible, setIsVisible] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsProcessing(false);
      setIsVisible(true);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  const handleConfirmPayment = () => {
    setIsProcessing(true);
  };

  return (
    <>
      <TouchableOpacity
        style={[styles.button]}
        onPress={handleConfirmPayment}
        activeOpacity={0.8}>
        <Text style={[styles.buttonText ]}>{title}</Text>
      </TouchableOpacity>
      <Modal transparent visible={isProcessing} animationType="fade">
        <View style={styles.modalBackground}>
          <View style={styles.modalContainer}>
            <View style={styles.icon}>
              <ActivityIndicator size="large" color="#ffffff" />
            </View>
            <Text style={styles.modalText}>Processing Your Payment...</Text>
            <Text style={styles.modalSubText}>
              Please wait while we complete your transaction.
            </Text>
          </View>
        </View>
      </Modal>

      <Modal transparent visible={isVisible} animationType="fade">
        <View style={styles.modalBackground}>
          <View style={styles.modalContainer}>
            <View style={styles.icon}>
              <TickMark width={60} height={60} left={12} top={15} />
            </View>

            <Text style={styles.modalText}>
              Your salon appointment is confirmed!
            </Text>
            <Text style={styles.modalSubText}>
              Thank you for your payment. We look forward to seeing you soon.
            </Text>

            <TouchableOpacity style={styles.viewReceiptButton}>
              <Text style={styles.viewReceiptText}>View Receipt</Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => navigation.navigate('Home')}
              style={styles.backButton}>
              <Text style={styles.backText}>Back to Home</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#235AFF',
    borderRadius: 10,
    height: 48,
    width:'92%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
    fontFamily: 'Inter',
    textAlign: 'center',
  },
  modalBackground: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
  },
  modalContainer: {
    width: '80%',
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  icon: {
    width: 60,
    height: 60,
    backgroundColor: '#007BFF',
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    flexDirection: 'row',
  },
  modalText: {
    fontSize: 18,
    fontWeight: '800',
    textAlign: 'center',
    marginBottom: 8,
    colot: '#0B0C15',
  },
  modalSubText: {
    fontSize: 14,
    textAlign: 'center',
    marginBottom: 20,
    color: '#939393',
  },
  iconContainer: {
    backgroundColor: '#007BFF',
    borderRadius: 50,
    padding: 10,
    marginBottom: 10,
  },

  viewReceiptButton: {
    backgroundColor: '#007BFF',
    padding: 12,
    width: '100%',
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 10,
  },
  viewReceiptText: {color: '#FFF', fontWeight: 'bold'},
  backButton: {
    borderWidth: 1,
    borderColor: '#007BFF',
    padding: 12,
    width: '100%',
    borderRadius: 8,
    alignItems: 'center',
  },
  backText: {color: '#007BFF', fontWeight: 'bold'},
});

export default Button;
