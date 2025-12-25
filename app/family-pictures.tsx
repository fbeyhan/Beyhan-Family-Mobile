import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function FamilyPicturesScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Family Pictures</Text>
      <Text>Photo gallery coming soon...</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#FFF' },
  header: { fontSize: 28, fontWeight: 'bold', marginBottom: 16 },
});
