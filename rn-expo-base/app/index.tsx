import { useRouter } from 'expo-router';
import { useCallback } from 'react';
import { HomeScreen } from '~/features/home/HomeScreen';

export default function Home() {
    const router = useRouter()

    const handleShowDetails = useCallback(() => {
        router.push({ pathname: '/details', params: { name: 'Dan' } });
    }, [])

    return <HomeScreen showDetails={handleShowDetails} />
}
