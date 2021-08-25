import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import MapView from 'react-native-maps';

export default function App() {
  const [ count, setCount ] = useState(0);

  return (
    <View style={styles.container}>
      <Text>You've clicked { count } times.</Text>
      <Button
        onPress={() => setCount(count + 1)}
        title="Increment"
      > {count} </Button>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    color: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
