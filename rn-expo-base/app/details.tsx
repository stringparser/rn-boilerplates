import { useLocalSearchParams } from "expo-router";
import { DetailsScreen } from "~/features/details/DetailsScreen";

export default function Details() {
  const { name } = useLocalSearchParams();
  return <DetailsScreen name={name} />;
}
