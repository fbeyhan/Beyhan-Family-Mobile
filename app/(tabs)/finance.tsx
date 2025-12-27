
import { auth } from '@/utils/firebase';
import { useRouter } from 'expo-router';
import { User } from 'firebase/auth';
import { useEffect } from 'react';
import FinanceScreen from '../finance';

export default function FinanceTabGuard() {
	const router = useRouter();

	useEffect(() => {
		const unsubscribe = auth.onAuthStateChanged((user: User | null) => {
			const adminEmail = 'fbeyhan@gmail.com';
			const userEmail = user?.email?.trim().toLowerCase() ?? null;
			if (userEmail !== adminEmail.toLowerCase()) {
				router.replace('/'); // Redirect to home tab
			}
		});
		return unsubscribe;
	}, [router]);

	return <FinanceScreen />;
}
