import { auth } from '@/utils/firebase';
import { Slot } from 'expo-router';
import { User } from 'firebase/auth';
import { useEffect, useState } from 'react';
import LoginScreen from './login';

export default function RootLayout() {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((u) => {
      setUser(u);
      setLoading(false);
    });
    return unsubscribe;
  }, []);

  if (loading) return null;
    if (!user) return <LoginScreen />;
    return <Slot />;
}