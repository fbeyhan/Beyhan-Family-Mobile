import { auth } from '@/utils/firebase';
import { useRouter } from 'expo-router';
import { User } from 'firebase/auth';
import { useEffect } from 'react';
import { Text, View } from 'react-native';

function ReportsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 24 }}>Reports</Text>
    </View>
  );
}

export default function ReportsTabGuard() {
  const router = useRouter();
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user: User | null) => {
      const adminEmail = 'fbeyhan@gmail.com';
      const userEmail = user?.email?.trim().toLowerCase() ?? null;
      if (userEmail !== adminEmail.toLowerCase()) {
        router.replace('/');
      }
    });
    return unsubscribe;
  }, [router]);
  return <ReportsScreen />;
}
