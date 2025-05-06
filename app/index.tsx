import { Redirect } from "expo-router";

export default function Index() {
  // Redirect to the HomeScreen
  return <Redirect href="/home" />;
}
