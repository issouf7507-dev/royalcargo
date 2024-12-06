import Header from "@/components/_comp/Header";
import React from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  ActivityIndicator,
  Platform,
  Dimensions,
} from "react-native";
import { useQuery } from "@tanstack/react-query";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { FlatGrid } from "react-native-super-grid";
import { useBottomTabBarHeight } from "@react-navigation/bottom-tabs";
import { COLORS, FONTSIZE, SPACING } from "@/constants/Theme";
import { router, Stack, useFocusEffect } from "expo-router";
import { ChevronLeft, PlaneTakeoff, Ship } from "lucide-react-native";
import { useStore } from "@/stores/store";
import ModalAdress from "@/components/_comp/ModalAdress";
// import ModalAdressActive from "@/components/_comp/ModalAdressActive";
import { SafeAreaView } from "react-native-safe-area-context";
import { routeApi } from "../app/api";

const queryClient = new QueryClient();

export const ModaldetailRef = () => {
  // const tabBarHeight = useBottomTabBarHeight();
  const user = useStore((state) => state.user);
  const [modalVisible, setModalVisible] = React.useState<boolean>(false);
  const [modalData, setModalData] = React.useState<any>(null);

  const fetchData = async () => {
    const response = await fetch(
      `${routeApi}/api/v01/reservation/${user?.id}`,
      {
        method: "GET",
        headers: {
          // "Content-type": "app"
          "Content-Type": "application/json",
        },
      }
    );

    if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    }

    const data = await response.json();
    return data;
  };

  const queryData = useQuery({
    queryKey: ["cmmd2"],
    queryFn: () => fetchData(),
  });

  useFocusEffect(
    React.useCallback(() => {
      queryData.refetch();
    }, [])
  );

  if (queryData.isLoading)
    return (
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <ActivityIndicator size="large" color="#0000ff" />

        {/* <Text>Loading...</Text> */}
      </View>
    );
  return (
    <SafeAreaView style={styles.ScreenConntaier}>
      <Stack.Screen
        options={{
          headerShown: false,
        }}
      />
      <View style={styles.ScreenContent}>
        <View>
          <TouchableOpacity onPress={() => router.back()}>
            <ChevronLeft size={40} color={COLORS.bgcolor} />
          </TouchableOpacity>
        </View>

        <View style={styles.Welcome}>
          <Text style={styles.WelcomeTitle}>Historiques</Text>
        </View>

        <ModalAdress
          modalVisible={modalVisible}
          setModalVisible={setModalVisible}
          modalData={modalData}
        />

        <FlatGrid
          itemDimension={220}
          showsVerticalScrollIndicator={false}
          data={queryData && queryData.data}
          // data={[]}
          style={[styles.gridView]}
          // staticDimension={300}
          // fixed

          spacing={10}
          renderItem={({ item }: any) => (
            <TouchableOpacity
              onPress={() => {
                setModalVisible(true);
                setModalData(item);
              }}
            >
              <View
                style={[
                  styles.itemContainer,
                  // { backgroundColor: item.code }
                ]}
              >
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <View>
                    <Text style={styles.itemName}>{item.service}</Text>
                    <Text style={styles.itemDesc}>
                      {item.typec.length > 16
                        ? item.typec.toString().slice(0, 16) + "..."
                        : item.typec}
                    </Text>
                    <Text style={styles.itemStatus}>{item.etat}</Text>
                  </View>
                  <View>
                    {item.service == "Envoie express" ? (
                      <PlaneTakeoff size={80} color="#fff" />
                    ) : item.service == "Envoie Normal" ? (
                      <PlaneTakeoff size={80} color="#fff" />
                    ) : (
                      <Ship size={80} color="#fff" />
                    )}
                  </View>
                </View>
              </View>
            </TouchableOpacity>
          )}
          ListEmptyComponent={() => (
            <View style={styles.emptyContainer}>
              <Text style={styles.emptyText}>Aucune donnée disponible</Text>
            </View>
          )}
        />
      </View>
    </SafeAreaView>
  );
};

export default function Modaldetail() {
  return (
    <QueryClientProvider client={queryClient}>
      <ModaldetailRef />
    </QueryClientProvider>
  );
}

const styles = StyleSheet.create({
  Welcome: {
    // marginTop: SPACING.space_20,
    paddingHorizontal: SPACING.space_15,
  },

  WelcomeTitle: {
    fontSize: FONTSIZE.size_40,
    color: COLORS.bgcolor,
  },
  WelcomeDesc: {
    fontSize: FONTSIZE.size_24,

    color: "#a4b0be",
  },
  ScreenConntaier: {
    flex: 1,
    backgroundColor: "#f5f6fa",
    paddingVertical: Platform.OS == "android" ? SPACING.space_24 : 0,
  },

  ScreenContent: {
    flexGrow: 1,
    paddingHorizontal: SPACING.space_8,
  },

  gridView: {
    marginTop: 10,
    flex: 1,
  },
  itemContainer: {
    justifyContent: "flex-end",
    borderRadius: 5,
    padding: 10,
    height: 120,
    backgroundColor: COLORS.bgcolor,
  },
  itemName: {
    fontSize: FONTSIZE.size_24,
    color: "#fff",
    fontWeight: "600",
  },
  itemDesc: {
    // fontWeight: "600",
    fontSize: FONTSIZE.size_18,
    color: "#fff",
  },

  itemStatus: {
    // fontWeight: "600",
    fontSize: FONTSIZE.size_14,
    color: "#fff",
  },

  emptyContainer: {
    // flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    height: Dimensions.get("screen").height * 0.5,

    // backgroundColor: "#f01", // Couleur de fond douce
  },
  emptyText: {
    fontSize: 16,
    color: "#a0a0a0", // Gris clair
    textAlign: "center",
  },
});
