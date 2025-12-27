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
  // ...existing code...
});
