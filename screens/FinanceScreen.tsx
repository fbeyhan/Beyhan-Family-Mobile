
import { StyleSheet, Text, View } from 'react-native';

function FinanceScreen() {
  // FORCE VISIBLE TEST UI
  return (
    <View style={{ flex: 1, backgroundColor: 'orange', justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ color: 'blue', fontSize: 28 }}>FinanceScreen always visible</Text>
    </View>
  );
}

export default FinanceScreen;

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  header: { fontSize: 20, fontWeight: 'bold', marginVertical: 12 },
  row: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 8 },
  delete: { color: 'red', marginLeft: 12 },
  center: { flex: 1, justifyContent: 'center', alignItems: 'center' },
});

