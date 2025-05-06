import React, { useState } from "react";
import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  View,
  FlatList, 
} from "react-native";
import { Triangle } from "./model/Triangle";

const HomeScreen = () => {
  const [height, setHeight] = useState<string>("");
  const [width, setWidth] = useState<string>("");
  const [area, setArea] = useState<number>(0);
  const [history, setHistory] = useState<Triangle[]>([]);

  const calculateArea = () => {
    const heightNum = parseFloat(height.trim());
    const widthNum = parseFloat(width.trim()); 

    if (!isNaN(heightNum) && !isNaN(widthNum)) {
      const areaCalculated = (1 / 2) * heightNum * widthNum;
      const triangle = new Triangle(heightNum, widthNum, areaCalculated);

      setArea(areaCalculated);

      setHistory((prevHistory) => {
        const updatedHistory = [...prevHistory, triangle];
        if (updatedHistory.length > 5) {
          updatedHistory.shift();
        }
        return updatedHistory;
      });
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>▲</Text>
      <TextInput
        style={styles.input}
        placeholder="Height"
        keyboardType="numeric"
        value={height}
        onChangeText={setHeight}
      />
      <TextInput
        style={styles.input}
        placeholder="Width"
        keyboardType="numeric"
        value={width}
        onChangeText={setWidth}
      />

      <Button title="Calculate Area" onPress={calculateArea} />

      <Text style={styles.areaText}>Area of Triangle: {area.toFixed(2)}</Text>

      <Text style={styles.historyTitle}>History:</Text>
      <FlatList
        data={history}
        renderItem={({ item }) => (
          <Text style={styles.historyItem}>
            Height: {item.height}, Width: {item.width}, Area:{" "}
            {item.area.toFixed(2)}
          </Text>
        )}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 24,
    flex: 1,
    justifyContent: "flex-start",
  },
  title: {
    fontSize: 132,
    textAlign: "center",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 8,
    marginVertical: 8,
    borderRadius: 8,
    fontSize: 16,
  },
  areaText: {
    fontSize: 18,
    marginVertical: 16,
    fontWeight: "bold",
  },
  historyTitle: {
    fontSize: 18,
    marginVertical: 8,
    fontWeight: "bold",
  },
  historyItem: {
    fontSize: 16,
    paddingVertical: 4,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
});

export default HomeScreen;
