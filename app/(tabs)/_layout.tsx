import { HapticTab } from '@/components/haptic-tab';
import { IconSymbol } from '@/components/ui/icon-symbol';
import { useColorScheme } from '@/hooks/use-color-scheme';
import { auth } from '@/utils/firebase';
import { Tabs } from 'expo-router';
import type { User } from 'firebase/auth';
import React, { useEffect, useState } from 'react';

const colorScheme = useColorScheme();
function TabNavigator({ isAdmin, currentUserEmail }: { isAdmin: boolean | null, currentUserEmail: string | null }) {
  const colorScheme = useColorScheme();
  if (isAdmin === null) return null;
  return (
    <React.Fragment>
      {/* Debug info removed */}
      <Tabs
        screenOptions={({ route }) => ({
          tabBarActiveTintColor: '#ff9800', // Strong accent color for active tab
          tabBarInactiveTintColor: '#bbb',
          tabBarLabelStyle: {
            fontWeight: 'bold',
            fontSize: 14,
            marginBottom: 2,
          },
          tabBarIconStyle: {
            marginTop: 2,
          },
          tabBarStyle: {
            backgroundColor: '#fff',
            borderTopLeftRadius: 18,
            borderTopRightRadius: 18,
            height: 64,
            shadowColor: '#000',
            shadowOffset: { width: 0, height: -2 },
            shadowOpacity: 0.08,
            shadowRadius: 8,
            elevation: 10,
            borderTopWidth: 0,
            position: 'absolute',
            left: 0,
            right: 0,
            bottom: 0,
          },
          headerShown: false,
          tabBarButton: HapticTab,
        })}
      >
        <Tabs.Screen
          name="index"
          options={{
            title: 'Home',
            tabBarIcon: ({ color }) => <IconSymbol size={28} name="house.fill" color={color} />, 
          }}
        />
        <Tabs.Screen
          name="explore"
          options={{
            title: 'Explore',
            tabBarIcon: ({ color }) => <IconSymbol size={28} name="paperplane.fill" color={color} />, 
          }}
        />
        <Tabs.Screen
          name="family-portal"
          options={{
            title: 'Family Portal',
            tabBarIcon: ({ color }) => <IconSymbol size={28} name="person.3.fill" color={color} />, 
          }}
        />
        <Tabs.Screen
          name="finance"
          options={{
            title: 'Finance',
            tabBarIcon: ({ color }) => <IconSymbol size={28} name="dollarsign.circle.fill" color={color} />, 
            // Hide the tab button for non-admins
            tabBarButton: isAdmin === true ? HapticTab : () => null,
          }}
        />
      </Tabs>
    </React.Fragment>
  );
}

export default function TabLayout() {
  const [isAdmin, setIsAdmin] = useState<boolean | null>(null);
  const [currentUserEmail, setCurrentUserEmail] = useState<string | null>(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user: User | null) => {
      const adminEmail = 'fbeyhan@gmail.com';
      const userEmail = user?.email?.trim().toLowerCase() ?? null;
      setCurrentUserEmail(userEmail);
      setIsAdmin(userEmail === adminEmail.toLowerCase());
    });
    return unsubscribe;
  }, []);

  // Return TabNavigator directly to avoid remounting issues
  return <TabNavigator isAdmin={isAdmin} currentUserEmail={currentUserEmail} />;
}
