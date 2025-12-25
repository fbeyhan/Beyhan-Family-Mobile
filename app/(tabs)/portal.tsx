import { useRouter } from 'expo-router';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function FamilyPortalScreen() {
  const router = useRouter();
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Family Portal</Text>
      <Text style={styles.subheader}>Choose where you'd like to explore</Text>
      <View style={styles.cardRow}>
        <TouchableOpacity style={styles.card} onPress={() => router.push('/family-pictures')}>
          <Text style={styles.cardTitle}>Family Pictures</Text>
          <Text style={styles.cardDesc}>View and browse our family photo collection</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.card} onPress={() => router.push('/trips')}>
          <Text style={styles.cardTitle}>Trips</Text>
          <Text style={styles.cardDesc}>Explore memorable family trips and vacations</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.card} onPress={() => router.push('/family-tree')}>
          <Text style={styles.cardTitle}>Family Tree</Text>
          <Text style={styles.cardDesc}>Discover our family genealogy and connections</Text>
        </TouchableOpacity>
      </View>
    </View>
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
