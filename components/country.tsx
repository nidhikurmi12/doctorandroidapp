import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Modal,
  FlatList,
  StyleSheet,
  TextInput,
  ActivityIndicator,
} from "react-native";

interface Country {
  name: string;
  emoji: string;
  phonecode: string;
  timezones: string[];
  currency: string;
  iso2: string;
  iso3: string;
}

interface CountrySelectorProps {
  onSelect: (country: Country) => void;
}

const CountrySelector: React.FC<CountrySelectorProps> = ({ onSelect }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [countries, setCountries] = useState<Country[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCountry, setSelectedCountry] = useState<Country>({
    name: "India",
    emoji: "🇮🇳",
    phonecode: "+91",
    timezones: ["Asia/Kolkata"],
    currency: "INR",
    iso2: "IN",
    iso3: "IND",
  });

  useEffect(() => {
    fetchCountries();
  }, []);

  const fetchCountries = async () => {
    try {
      setLoading(true);
      const response = await fetch(
        "https://github.com/dr5hn/countries-states-cities-database"
      );

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      const formattedCountries = data
        .map((country: any) => ({
          name: country.name.common,
          emoji: getCountryFlag(country.cca2),
          phonecode: `+${
            country.idd?.root
              ? country.idd.root.replace("+", "") +
                (country.idd.suffixes?.[0] || "")
              : ""
          }`,
          timezones: country.timezones || [],
          currency: Object.keys(country.currencies || {}).join(", "),
          iso2: country.cca2,
          iso3: country.cca3,
        }))
        .filter((country: any) => country.phonecode)
        .sort((a: any, b: any) => a.name.localeCompare(b.name));

      setCountries(formattedCountries);
      setError(null);
    } catch (err) {
      setError("Failed to load countries");
      console.error("Error fetching countries:", err);
    } finally {
      setLoading(false);
    }
  };

  const getCountryFlag = (countryCode: string): string => {
    const codePoints = countryCode
      .toUpperCase()
      .split("")
      .map((char) => 127397 + char.charCodeAt(0));
    return String.fromCodePoint(...codePoints);
  };

  const filteredCountries = countries.filter(
    (country) =>
      country.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      country.phonecode.includes(searchQuery) ||
      country.iso2.toLowerCase().includes(searchQuery.toLowerCase()) ||
      country.iso3.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSelect = (country: Country) => {
    setSelectedCountry(country);
    onSelect(country);
    setModalVisible(false);
  };

  const renderCountryItem = ({ item }: { item: Country }) => (
    <TouchableOpacity
      style={styles.countryItem}
      onPress={() => handleSelect(item)}
    >
      <Text style={styles.countryFlag}>{item.emoji}</Text>
      <View style={styles.countryDetails}>
        <Text style={styles.countryName}>{item.name}</Text>
        <Text style={styles.countryInfo}>
          {item.iso2} • {item.phonecode}
        </Text>
      </View>
      <Text style={styles.countryCurrency}>{item.currency}</Text>
    </TouchableOpacity>
  );

  return (
    <View>
      <TouchableOpacity
        style={styles.selector}
        onPress={() => setModalVisible(true)}
      >
        <View style={styles.selectedCountry}>
          <Text style={styles.selectedFlag}>{selectedCountry.emoji}</Text>
          <Text style={styles.selectedName}>{selectedCountry.name}</Text>
          <Text style={styles.selectedCode}>{selectedCountry.phonecode}</Text>
        </View>
        <Text style={styles.dropdownArrow}>▼</Text>
      </TouchableOpacity>

      <Modal visible={modalVisible} animationType="slide" transparent={true}>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <View style={styles.modalHeader}>
              <Text style={styles.modalTitle}>Select Country</Text>
              <TouchableOpacity
                style={styles.closeButton}
                onPress={() => setModalVisible(false)}
              >
                <Text style={styles.closeButtonText}>✕</Text>
              </TouchableOpacity>
            </View>

            <TextInput
              style={styles.searchInput}
              placeholder="Search by name, code or phone code..."
              value={searchQuery}
              onChangeText={setSearchQuery}
              autoCorrect={false}
              autoCapitalize="none"
            />

            {loading ? (
              <ActivityIndicator
                size="large"
                color="#6B66F7"
                style={styles.loader}
              />
            ) : error ? (
              <View style={styles.errorContainer}>
                <Text style={styles.errorText}>{error}</Text>
                <TouchableOpacity
                  style={styles.retryButton}
                  onPress={fetchCountries}
                >
                  <Text style={styles.retryButtonText}>Retry</Text>
                </TouchableOpacity>
              </View>
            ) : (
              <FlatList
                data={filteredCountries}
                renderItem={renderCountryItem}
                keyExtractor={(item) => item.iso2}
                style={styles.countryList}
              />
            )}
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  selector: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5F5F5",
    borderRadius: 10,
  },
  selectedCountry: {
    flexDirection: "row",
    alignItems: "center",
    // flex: 1,
  },
  selectedFlag: {
    fontSize: 24,
    marginRight: 10,
  },
  selectedName: {
    fontSize: 16,
    // flex: 1,
  },
  selectedCode: {
    fontSize: 14,
    color: "#666",
    marginLeft: 10,
  },
  dropdownArrow: {
    fontSize: 12,
    color: "#666",
    marginLeft: 10,
  },
  modalContainer: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "flex-end",
  },
  modalContent: {
    backgroundColor: "white",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    maxHeight: "90%",
  },
  modalHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 15,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: "bold",
  },
  closeButton: {
    padding: 5,
  },
  closeButtonText: {
    fontSize: 20,
    color: "#666",
  },
  searchInput: {
    margin: 15,
    padding: 10,
    backgroundColor: "#F5F5F5",
    borderRadius: 8,
    fontSize: 16,
  },
  countryItem: {
    flexDirection: "row",
    alignItems: "center",
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
  countryFlag: {
    fontSize: 24,
    marginRight: 15,
  },
  countryDetails: {
    flex: 1,
  },
  countryName: {
    fontSize: 16,
    marginBottom: 2,
  },
  countryInfo: {
    fontSize: 12,
    color: "#666",
  },
  countryCurrency: {
    fontSize: 14,
    color: "#666",
  },
  loader: {
    padding: 20,
  },
  errorContainer: {
    padding: 20,
    alignItems: "center",
  },
  errorText: {
    color: "red",
    fontSize: 16,
    marginBottom: 10,
  },
  retryButton: {
    backgroundColor: "#6B66F7",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
  },
  retryButtonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  countryList: {
    maxHeight: "80%",
  },
});

export default CountrySelector;
