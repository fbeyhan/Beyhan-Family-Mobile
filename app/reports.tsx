import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function ReportsScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Reports</Text>
      <Text>Reports details coming soon...</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#FFF' },
  header: { fontSize: 28, fontWeight: 'bold', marginBottom: 16 },
});
