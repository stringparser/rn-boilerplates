import { Text, TouchableOpacity } from "react-native";
import { Container } from "~/shared/components/Container";

interface NotFoundScreenProps {
    goHome: () => void;
}

export function NotFoundScreen({goHome}: NotFoundScreenProps) {
    return (
        <Container>
            <Text className={styles.title}>{"This screen doesn't exist."}</Text>
            <TouchableOpacity className={styles.link} onPress={goHome}>
                <Text className={styles.linkText}>Go to home screen!</Text>
            </TouchableOpacity>
        </Container>
    )
}

const styles = {
    title: `text-xl font-bold`,
    link: `mt-4 pt-4`,
    linkText: `text-base text-[#2e78b7]`,
  };