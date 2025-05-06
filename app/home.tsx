import { Stack } from "expo-router";
import HomeScreen from "./homescreen";

export default function Home() {
  return (
    <>
      <Stack.Screen
        options={{
          title: "Triangle Area Calculator",
        }}
      />
      <HomeScreen />
    </>
  );
}
