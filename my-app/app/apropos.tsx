import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ScrollView,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { ChevronLeft } from "lucide-react-native";
import { COLORS, FONTSIZE, SPACING } from "@/constants/Theme";
import { router } from "expo-router";

const apropos = () => {
  return (
    <SafeAreaView style={styles.ScreenContainer}>
      <ScrollView style={styles.container}>
        <View>
          <TouchableOpacity onPress={() => router.back()}>
            <ChevronLeft size={40} color={COLORS.bgcolor} />
          </TouchableOpacity>
        </View>
        <Text style={styles.title}>À propos de Royal Cargo</Text>
        <Text style={styles.description}>
          Royal Cargo simplifie vos expéditions depuis la Chine vers la Côte
          d’Ivoire. Spécialisée dans le transport international, notre mission
          est de vous offrir un service fiable, rapide et économique pour toutes
          vos importations.
        </Text>

        <View style={styles.section}>
          <Text style={styles.subtitle}>Notre Mission</Text>
          <Text style={styles.description}>
            - Vous fournir une solution de transport{" "}
            <Text style={styles.bold}>sécurisée et transparente</Text>.{"\n"}-
            Simplifier l’ensemble du processus, depuis la réception en Chine
            jusqu’à la livraison en Côte d’Ivoire.{"\n"}- Garantir une{" "}
            <Text style={styles.bold}>communication continue</Text> grâce à un
            système de suivi précis et des notifications en temps réel.
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.subtitle}>Nos Services</Text>
          <Text style={styles.description}>
            - <Text style={styles.bold}>Expédition maritime</Text> : Une
            solution économique pour vos colis volumineux, livrés en{" "}
            <Text style={styles.bold}>60 jours</Text>.{"\n"}-{" "}
            <Text style={styles.bold}>Transport aérien normal</Text> : Livraison
            rapide et fiable en{" "}
            <Text style={styles.bold}>10 jours maximum</Text>.{"\n"}-{" "}
            <Text style={styles.bold}>Transport aérien express</Text> : Pour vos
            envois urgents, livrés en{" "}
            <Text style={styles.bold}>7 jours maximum</Text>.
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.subtitle}>Pourquoi nous choisir ?</Text>
          <Text style={styles.description}>
            - <Text style={styles.bold}>Suivi complet</Text> : Grâce à notre
            plateforme, vous pouvez suivre l’évolution de votre colis à chaque
            étape.{"\n"}- <Text style={styles.bold}>Simplicité</Text> : Demandez
            une adresse en Chine directement via notre application et
            transmettez-la à vos fournisseurs.{"\n"}-{" "}
            <Text style={styles.bold}>Fiabilité</Text> : Chaque colis est traité
            avec soin pour garantir sa sécurité et sa livraison dans les délais.
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.subtitle}>
            Adresse en Chine pour vos fournisseurs
          </Text>
          <Text style={styles.description}>
            Nous mettons à votre disposition une{" "}
            <Text style={styles.bold}>adresse de réception en Chine</Text>. Vos
            fournisseurs peuvent y envoyer vos colis, et nous prenons en charge
            le reste :{"\n\n"}
            Adresse : 中国广州市越秀区环市中路205号恒生大厦B座903-2{"\n"}
            Téléphone :{"\n"}- +86 186 2097 5453{"\n"}- +86 188 0207 2454
            {"\n\n"}
            Horaires de réception : 12h00 - 20h30
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default apropos;

const styles = StyleSheet.create({
  ScreenContainer: {
    flex: 1,
    backgroundColor: "white",
  },

  container: {
    flex: 1,
    padding: SPACING.space_15,
    // backgroundColor: COLORS.white,
    // padding: 16,
    flexDirection: "column",
    gap: SPACING.space_12,
    paddingHorizontal: SPACING.space_28,
  },
  title: {
    fontSize: FONTSIZE.size_20,
    fontWeight: "bold",
    color: COLORS.bgcolor,
    marginBottom: SPACING.space_10,
  },
  subtitle: {
    fontSize: FONTSIZE.size_18,
    fontWeight: "bold",
    color: COLORS.bgcolor,
    marginBottom: SPACING.space_8,
  },
  description: {
    fontSize: FONTSIZE.size_14,
    // color: COLORS.bgcolor,
    marginBottom: SPACING.space_15,
  },
  section: {
    marginBottom: SPACING.space_20,
  },
  bold: {
    fontWeight: "bold",
    color: COLORS.bgcolor,
  },
});
