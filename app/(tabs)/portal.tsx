
import React from 'react';
import { StyleSheet, Text } from 'react-native';

export default function FamilyPortalScreen() {
  return (
    <>
      <Text style={{ fontSize: 32, marginTop: 100, textAlign: 'center' }}>Family Portal Tab Placeholder</Text>
    </>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 24, backgroundColor: '#FFF' },
  header: { fontSize: 28, fontWeight: 'bold', marginBottom: 8 },
  subheader: { fontSize: 16, marginBottom: 24 },
  cardRow: { flexDirection: 'column', gap: 16 },
  card: { backgroundColor: '#FAFAFA', borderRadius: 12, padding: 20, marginBottom: 12, elevation: 2 },
  cardTitle: { fontSize: 20, fontWeight: 'bold', marginBottom: 4 },
  cardDesc: { fontSize: 14, color: '#555' },
});
