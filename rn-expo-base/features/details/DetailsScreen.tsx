import { Stack, useLocalSearchParams } from "expo-router";
import { Container } from "~/shared/components/Container";
import { ScreenContent } from "~/shared/components/ScreenContent";

interface DetailsScreenProps {
    name: string | string[];
}

export function DetailsScreen({name}: DetailsScreenProps) {
    return (
        <Container>
            <ScreenContent path="features/details/DetailsScreen.tsx" title={`Showing details for user ${name}`} />
        </Container>
    );
}