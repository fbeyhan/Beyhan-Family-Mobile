import { auth } from '@/utils/firebase';
import { Tabs } from 'expo-router';
import { User } from 'firebase/auth';
import { useEffect, useState } from 'react';

export default function TabLayout() {
  const [isAdmin, setIsAdmin] = useState<boolean | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user: User | null) => {
      const adminEmail = 'fbeyhan@gmail.com';
      const userEmail = user?.email?.trim().toLowerCase() ?? null;
      setIsAdmin(userEmail === adminEmail.toLowerCase());
      setLoading(false);
    });
    return unsubscribe;
  }, []);

  if (loading) return null;

  return (
    <Tabs>
      <Tabs.Screen name="index" options={{ title: 'Home' }} />
      <Tabs.Screen name="explore" options={{ title: 'Explore' }} />
      <Tabs.Screen name="family-pictures" options={{ title: 'Family Pictures' }} />
      <Tabs.Screen name="family-tree" options={{ title: 'Family Tree' }} />
      <Tabs.Screen name="trips" options={{ title: 'Trips' }} />
      {isAdmin && <Tabs.Screen name="finance-home" options={{ title: 'Finance Home' }} />}
      {isAdmin && <Tabs.Screen name="expenses" options={{ title: 'Expenses' }} />}
      {isAdmin && <Tabs.Screen name="income" options={{ title: 'Income' }} />}
      {isAdmin && <Tabs.Screen name="reports" options={{ title: 'Reports' }} />}
    </Tabs>
  );
}
