import { Button } from "~/shared/components/Button";
import { Container } from "~/shared/components/Container";
import { ScreenContent } from "~/shared/components/ScreenContent";

interface HomeScreenProps {
    showDetails: () => void;
}

export function HomeScreen({showDetails}: HomeScreenProps) {
    return (
        <Container>
            <ScreenContent path="app/index.tsx" title="Home"></ScreenContent>
            <Button title="Show Details" onPress={showDetails} />
        </Container>
    )
}