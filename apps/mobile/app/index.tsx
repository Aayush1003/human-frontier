import { useState } from "react";
import { SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const ideas = [
  { title: "Notice a nearby nature spot", tag: "NATURE · 20 MIN", detail: "Take a short walk and notice one thing you have not seen before." },
  { title: "Follow one question", tag: "LEARNING · 25 MIN", detail: "Choose a question you are curious about and explore it at a library." },
  { title: "Swap a small skill", tag: "COMMUNITY · 30 MIN", detail: "Teach one small thing you know and ask to learn something in return." }
];

export default function HomeScreen() {
  const [selected, setSelected] = useState(0);
  const idea = ideas[selected];
  return (
    <SafeAreaView style={styles.page}>
      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.eyebrow}>HUMAN FRONTIER</Text>
        <Text style={styles.heading}>A little more{“\n”}curious. A little more{“\n”}connected.</Text>
        <Text style={styles.intro}>Small invitations to learn, explore, and take part in the world around you.</Text>
        <View style={styles.card}>
          <Text style={styles.label}>A SMALL THING TO TRY</Text>
          <Text style={styles.tag}>{idea.tag}</Text>
          <Text style={styles.title}>{idea.title}</Text>
          <Text style={styles.detail}>{idea.detail}</Text>
          <TouchableOpacity style={styles.button} onPress={() => setSelected((selected + 1) % ideas.length)} accessibilityRole="button">
            <Text style={styles.buttonText}>Show me another idea</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.footer}>No score to chase. No personal data needed. You decide what feels right.</Text>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  page: { flex: 1, backgroundColor: "#f5f4ed" },
  content: { padding: 24, paddingTop: 56, flexGrow: 1, justifyContent: "center" },
  eyebrow: { color: "#3d6652", fontSize: 12, fontWeight: "700", letterSpacing: 2, marginBottom: 24 },
  heading: { color: "#173a2c", fontSize: 38, fontWeight: "700", lineHeight: 44 },
  intro: { color: "#53645a", fontSize: 17, lineHeight: 25, marginTop: 16, marginBottom: 28 },
  card: { backgroundColor: "#fff", borderRadius: 20, padding: 22, borderWidth: 1, borderColor: "#e4e6dc" },
  label: { color: "#62766b", fontSize: 11, fontWeight: "700", letterSpacing: 1.4 },
  tag: { color: "#66816e", fontSize: 11, fontWeight: "700", letterSpacing: 1.2, marginTop: 22 },
  title: { color: "#173a2c", fontSize: 23, fontWeight: "700", marginTop: 8 },
  detail: { color: "#53645a", fontSize: 15, lineHeight: 23, marginTop: 10 },
  button: { backgroundColor: "#245b42", borderRadius: 12, padding: 15, alignItems: "center", marginTop: 22 },
  buttonText: { color: "#fff", fontSize: 15, fontWeight: "700" },
  footer: { color: "#68786e", fontSize: 13, lineHeight: 20, marginTop: 22, textAlign: "center" }
});
