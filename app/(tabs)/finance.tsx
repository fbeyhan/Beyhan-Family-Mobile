import { useRouter } from 'expo-router';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';


export default function FinancePortalScreen() {
  const router = useRouter();

  return (
	  <View style={styles.container}>
		<Text style={styles.header}>Finance Portal</Text>
		<Text style={styles.subheader}>Choose where you'd like to explore</Text>
		<View style={styles.cardRow}>
		  <TouchableOpacity style={styles.card} onPress={() => router.push('/expenses')}>
			<Text style={styles.cardTitle}>Expenses</Text>
			<Text style={styles.cardDesc}>View Expenses</Text>
		  </TouchableOpacity>
		  <TouchableOpacity style={styles.card} onPress={() => router.push('/income')}>
			<Text style={styles.cardTitle}>Income</Text>
			<Text style={styles.cardDesc}>Explore Income</Text>
		  </TouchableOpacity>
		  <TouchableOpacity style={styles.card} onPress={() => router.push('/reports')}>
			<Text style={styles.cardTitle}>Reports</Text>
			<Text style={styles.cardDesc}>Discover Reports</Text>
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
