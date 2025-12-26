import { HapticTab } from '@/components/haptic-tab';
import { IconSymbol } from '@/components/ui/icon-symbol';
import { Colors } from '@/constants/theme';
import { useColorScheme } from '@/hooks/use-color-scheme';
import { auth } from '@/utils/firebase';
import { Tabs } from 'expo-router';
import type { User } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { Text, View } from 'react-native';

  const colorScheme = useColorScheme();
function TabNavigator({ isAdmin, currentUserEmail }: { isAdmin: boolean | null, currentUserEmail: string | null }) {
  const colorScheme = useColorScheme();
  if (isAdmin === null) return null;
  return (
    <React.Fragment>
      {/* Debug info for troubleshooting */}
      <View style={{ backgroundColor: '#ffe0b2', padding: 8 }}>
        <Text style={{ color: '#bf360c', fontSize: 12 }}>
          Debug: user={currentUserEmail} | isAdmin={String(isAdmin)}
        </Text>
      </View>
      <Tabs
        screenOptions={{
          tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
          headerShown: false,
          tabBarButton: HapticTab,
        }}>
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
          name="portal"
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

  // Use a wrapper div with a key to force remount on user/admin change
  return (
    <View key={`${currentUserEmail}-${isAdmin}`} style={{ flex: 1 }}>
      <TabNavigator isAdmin={isAdmin} currentUserEmail={currentUserEmail} />
    </View>
  );
}
