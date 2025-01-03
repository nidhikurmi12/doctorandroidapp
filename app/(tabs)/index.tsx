import React from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  SafeAreaView,
} from "react-native";
import CountrySelector from "../../components/country";
export default function HomeScreen() {
  const handleCountrySelect = (country) => {
    console.log("Selected country:", country);
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.logoContainer}>
        <Text style={styles.skipText}>Skip</Text>
        <Image
          source={require("../../assets/images/doctor.png")}
          style={styles.logo}
        />
        <Text style={styles.appName}>HealthApp</Text>
      </View>
      <View style={styles.formContainer}>
        <TouchableOpacity style={styles.countrySelector}>
          <CountrySelector onSelect={handleCountrySelect} />
        </TouchableOpacity>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Phone Number"
            keyboardType="phone-pad"
            value="9109943899"
          />
        </View>
        <TouchableOpacity style={styles.continueButton}>
          <Text style={styles.continueText}>Continue</Text>
        </TouchableOpacity>
        <View style={styles.socialLogin}>
          <Text style={styles.socialText}>Or quick continue with</Text>
          <TouchableOpacity style={styles.googleButton}>
            <Image
              source={require("../../assets/images/google.png")}
              style={styles.googleIcon}
            />
            <Text>Google</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#6B66F7",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
  },
  time: {
    color: "white",
  },
  statusIcons: {
    flexDirection: "row",
  },
  logoContainer: {
    alignItems: "center",
    marginTop: 20,
  },
  skipText: {
    color: "white",
    position: "absolute",
    right: 20,
    top: 0,
  },
  logo: {
    width: 300,
    height: 300,
  },
  appName: {
    color: "white",
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 10,
    marginBottom: 15,
  },
  illustrationContainer: {
    alignItems: "center",
    marginVertical: 30,
    height: 0,
  },
  formContainer: {
    backgroundColor: "white",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    padding: 20,
    flex: 1,
  },
  countrySelector: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#F5F5F5",
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
  },
  inputContainer: {
    marginBottom: 20,
  },
  input: {
    backgroundColor: "#F5F5F5",
    padding: 15,
    borderRadius: 10,
    fontSize: 16,
  },
  continueButton: {
    backgroundColor: "#6B66F7",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
  },
  continueText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  socialLogin: {
    marginTop: 20,
    alignItems: "center",
  },
  socialText: {
    color: "#666",
    marginBottom: 15,
  },
  googleButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F5F5F5",
    padding: 15,
    borderRadius: 10,
    width: "100%",
    justifyContent: "center",
  },
  googleIcon: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
});
