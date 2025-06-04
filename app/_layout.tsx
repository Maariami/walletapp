import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="login" options={{ headerShown: false }} />
      <Stack.Screen name="signup" options={{ headerShown: false }} />
      <Stack.Screen name="verification" options={{ headerShown: false }} />
      <Stack.Screen name="otp" options={{ headerShown: false }} />
    </Stack>
  );
}
