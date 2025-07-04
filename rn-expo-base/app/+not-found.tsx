import { Stack, useRouter } from 'expo-router';
import { useCallback } from 'react';
import { NotFoundScreen } from '~/features/not-found/NotFoundScreen';

export default function NotFound() {
    const router = useRouter();

    const handleGoHome = useCallback(() => {
        router.replace('/');
    }, []);

    return (
        <>
            <Stack.Screen options={{title: 'Not Found'}} />
            <NotFoundScreen goHome={handleGoHome} />
        </>
    );
}
