import React, { useState } from "react";
import { StyleSheet, Text, TextInput, View, Button } from "react-native";

export default function App() {
  const [lkr, setLkr] = useState<string>("");
  const [usd, setUsd] = useState<string>("");

  const convertToUsd = () => {
    const lkrValue = parseFloat(lkr);
    if (!isNaN(lkrValue)) {
      const conversionRate = 0.003; 
      setUsd((lkrValue * conversionRate).toFixed(2));
    } else {
      setUsd("Invalid input");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Currency Converter</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter amount in LKR"
        keyboardType="numeric"
        value={lkr}
        onChangeText={setLkr}
      />
      <Button title="Convert to USD" onPress={convertToUsd} />
      {usd !== "" && <Text style={styles.result}>USD: {usd}</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f5f5f5",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  input: {
    width: "80%",
    height: 40,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  result: {
    marginTop: 20,
    fontSize: 18,
    color: "#333",
  },
});
