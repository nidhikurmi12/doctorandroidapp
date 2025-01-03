import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ActivityIndicator,
  Alert,
} from 'react-native';

interface OtpVerificationProps {
  phoneNumber: string;
  onVerificationSuccess: () => void;
}

const OtpVerification: React.FC<OtpVerificationProps> = ({
  phoneNumber,
  onVerificationSuccess,
}) => {
  const [otp, setOtp] = useState('');
  const [generatedOtp, setGeneratedOtp] = useState('');
  const [loading, setLoading] = useState(false);
  const [verifying, setVerifying] = useState(false);

  // Generate a random 6-digit OTP
  const generateOTP = () => {
    const newOtp = Math.floor(100000 + Math.random() * 900000).toString();
    setGeneratedOtp(newOtp);
    // In a real app, you would send this OTP to the user's phone
    console.log('Generated OTP:', newOtp);
    return newOtp;
  };

  // Simulate sending OTP to phone number
  const sendOTP = async () => {
    setLoading(true);
    try {
      const newOtp = generateOTP();
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 1500));
      Alert.alert('OTP Sent', `OTP has been sent to ${phoneNumber}`);
    } catch (error) {
      Alert.alert('Error', 'Failed to send OTP. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  // Verify entered OTP
  const verifyOTP = async () => {
    if (!otp) {
      Alert.alert('Error', 'Please enter OTP');
      return;
    }

    setVerifying(true);
    try {
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      if (otp === generatedOtp) {
        Alert.alert('Success', 'OTP verified successfully');
        onVerificationSuccess();
      } else {
        Alert.alert('Error', 'Invalid OTP. Please try again.');
      }
    } catch (error) {
      Alert.alert('Error', 'Verification failed. Please try again.');
    } finally {
      setVerifying(false);
    }
  };

  // Generate OTP when component mounts
  useEffect(() => {
    sendOTP();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Phone Verification</Text>
      
      <Text style={styles.subtitle}>
        We've sent OTP verification code{'\n'}on your given number.
      </Text>

      <TextInput
        style={styles.input}
        value={otp}
        onChangeText={setOtp}
        placeholder="Enter OTP"
        keyboardType="numeric"
        maxLength={6}
        placeholderTextColor="#666"
      />

      <TouchableOpacity
        style={styles.submitButton}
        onPress={verifyOTP}
        disabled={verifying}
      >
        {verifying ? (
          <ActivityIndicator color="#FFF" />
        ) : (
          <Text style={styles.submitButtonText}>Submit</Text>
        )}
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.resendButton}
        onPress={sendOTP}
        disabled={loading}
      >
        <Text style={styles.resendButtonText}>
          {loading ? 'Sending...' : 'Resend OTP'}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#000000',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 10,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    color: '#999999',
    marginBottom: 30,
    textAlign: 'center',
    lineHeight: 24,
  },
  input: {
    backgroundColor: '#222222',
    borderRadius: 8,
    padding: 15,
    fontSize: 18,
    color: '#FFFFFF',
    marginBottom: 20,
    textAlign: 'center',
    letterSpacing: 8,
  },
  submitButton: {
    backgroundColor: '#6B66F7',
    borderRadius: 8,
    padding: 15,
    alignItems: 'center',
    marginBottom: 15,
  },
  submitButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  resendButton: {
    padding: 10,
    alignItems: 'center',
  },
  resendButtonText: {
    color: '#6B66F7',
    fontSize: 14,
  },
});

export default OtpVerification;