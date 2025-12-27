import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function ExpensesScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Expenses</Text>
      <Text>Expenses details coming soon...</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#FFF' },
  header: { fontSize: 28, fontWeight: 'bold', marginBottom: 16 },
});
