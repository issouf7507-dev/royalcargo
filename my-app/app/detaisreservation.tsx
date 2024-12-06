import {
  Alert,
  Image,
  Linking,
  Modal,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { ChevronLeft, Phone } from "lucide-react-native";
import { BORDERRADIUS, COLORS, FONTSIZE, SPACING } from "@/constants/Theme";
import { router } from "expo-router";
import { useLocalSearchParams } from "expo-router";

const detaisreservation = () => {
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);
  const [uriImg, setUriImg] = useState<string>("");

  const openModal = () => setIsModalVisible(true);
  const closeModal = () => setIsModalVisible(false);

  const images = [
    {
      src: "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_b.jpg",
    },
    {
      src: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg",
    },
    {
      src: "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_b.jpg",
    },
    {
      src: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg",
    },
  ]; // Exemple avec 3 images

  // const {data} = useLocalSearchParams();
  const { data } = useLocalSearchParams<{ data?: string }>(); // Typage explicite
  const parsedData = data ? JSON.parse(data) : null; // Désérialise les données

  console.log(parsedData); // Vous aurez l'objet original ici

  const handleCall = async () => {
    const phoneNumber = "tel:0709901432";

    const supported = await Linking.canOpenURL(phoneNumber);

    if (supported) {
      await Linking.openURL(phoneNumber);
    } else {
      Alert.alert("Erreur", "Votre appareil ne peut pas ");
    }
  };

  return (
    <SafeAreaView style={styles.ScreenContainer}>
      <View style={styles.container}>
        <View>
          <TouchableOpacity onPress={() => router.back()}>
            <ChevronLeft size={40} color={COLORS.bgcolor} />
          </TouchableOpacity>
        </View>
        <View style={styles.dynamicGrid}>
          {images.map((el: any, id: number) => (
            <TouchableOpacity
              key={id}
              onPress={() => {
                openModal();
                setUriImg(el.src);
              }}
              style={[
                styles.dynamicGridItem,
                images.length === 1 && styles.fullWidth,
                images.length === 2 && styles.fullWidth, // Si une seule image
                images.length === 3 && id === 0 && styles.fullWidth, // La première image avec 3
              ]}
            >
              <Image
                source={{
                  uri: el.src,
                }}
                style={styles.thumbnail}
              />
            </TouchableOpacity>
          ))}

          {/* Modal pour afficher l'image en grand */}
          <Modal
            visible={isModalVisible}
            transparent={true}
            animationType="fade"
            onRequestClose={closeModal}
          >
            <View style={styles.modalContainer}>
              <TouchableOpacity style={styles.closeButton} onPress={closeModal}>
                <Text style={styles.closeButtonText}>Fermer</Text>
              </TouchableOpacity>

              <Image
                source={{
                  uri: uriImg,
                }}
                style={styles.fullImage}
                resizeMode="contain"
              />
            </View>
          </Modal>
        </View>

        <View style={styles.DetailContainer}>
          <View
            style={{
              marginBottom: SPACING.space_16,
            }}
          >
            <Text style={styles.DetailTitle}>Details</Text>
          </View>

          <View>
            <Text style={styles.ContentCardText}>
              Nom : {parsedData && parsedData.nom}
            </Text>
            <Text style={styles.ContentCardText}>
              Téléphone : {parsedData && parsedData.numero}
            </Text>
            <Text style={styles.ContentCardText}>
              Date de reservation : {parsedData && parsedData.daten}
            </Text>

            <Text style={styles.ContentCardText}>
              Status : {parsedData && parsedData.etat}
            </Text>

            <Text style={styles.ContentCardText}>
              Information du Service : {parsedData && parsedData.service}
            </Text>

            <Text style={styles.ContentCardText}>
              Poids : {parsedData && parsedData.poids} KG
            </Text>

            <Text style={styles.ContentCardText}>
              Quantité : {parsedData && parsedData.quantite}
            </Text>

            <Text style={styles.ContentCardText}>
              Tailes : {parsedData && parsedData.tailes}
            </Text>
            <Text style={styles.ContentCardText}>
              Prix : {parsedData && parsedData.prix} FCFA
            </Text>
          </View>
        </View>

        <TouchableOpacity
          onPress={handleCall}
          style={{
            flexDirection: "row",
            gap: SPACING.space_10,
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: COLORS.bgcolor,
            borderRadius: BORDERRADIUS.radius_15,
            marginTop: SPACING.space_20,
            paddingVertical: SPACING.space_10,
          }}
        >
          <Phone size={30} color="#FFF" />
          <Text
            style={{
              fontSize: FONTSIZE.size_18,
              color: "#fff",
            }}
          >
            Appelez-nous
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default detaisreservation;

const styles = StyleSheet.create({
  ScreenContainer: {
    flex: 1,
    backgroundColor: "white",
  },
  container: {
    padding: 16,
    flexDirection: "column",
    gap: SPACING.space_12,
    paddingHorizontal: SPACING.space_28,
  },
  dynamicGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  dynamicGridItem: {
    width: "48%", // Deux colonnes par défaut
    marginBottom: SPACING.space_12,
  },
  fullWidth: {
    width: "100%", // Pleine largeur pour certaines images
  },
  thumbnail: {
    width: "100%",
    height: 150, // Ajustez la hauteur selon vos besoins
    borderRadius: 10,
  },
  modalContainer: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.8)",
    justifyContent: "center",
    alignItems: "center",
  },
  fullImage: {
    width: "90%",
    height: "70%",
  },
  closeButton: {
    position: "absolute",
    top: 40,
    right: 20,
    backgroundColor: "white",
    borderRadius: 20,
    paddingVertical: 5,
    paddingHorizontal: 15,
    zIndex: 1,
  },
  closeButtonText: {
    fontSize: 16,
    color: "black",
  },

  DetailContainer: {},

  DetailTitle: {
    fontWeight: "bold",
    fontSize: FONTSIZE.size_24,
  },

  ContentCardText: {
    fontWeight: "semibold",
    fontSize: FONTSIZE.size_20,
  },
});
