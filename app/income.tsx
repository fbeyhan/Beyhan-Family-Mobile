import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function IncomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Income</Text>
      <Text>Income details coming soon...</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#FFF' },
  header: { fontSize: 28, fontWeight: 'bold', marginBottom: 16 },
});
