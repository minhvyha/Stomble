import { Stack, useRouter, useSearchParams } from "expo-router";
import { useCallback, useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  ActivityIndicator,
  RefreshControl,
} from "react-native";

const ContactDetail = () => {
  const params = useSearchParams()
  const router = useRouter()

  return (
    <SafeAreaView>
      
    </SafeAreaView>
  )
}

export default ContactDetail