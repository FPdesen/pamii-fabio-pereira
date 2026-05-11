import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import { router, useLocalSearchParams } from 'expo-router';

const PURPLE = '#7C5CFC';
const BG = '#EFF0FF';

export default function MatchResultScreen() {
  const { nome, match, avatar, tags } = useLocalSearchParams<{
    nome: string;
    match: string;
    avatar: string;
    tags: string;
  }>();

  const matchNum = Number(match) || 0;
  const tagsList = tags ? tags.split(',') : [];

  const getMessage = () => {
    if (matchNum >= 75) return 'Vocês têm muito em comum ✨';
    if (matchNum >= 50) return 'Vocês têm bastante em comum ✨';
    if (matchNum >= 25) return 'Vocês têm algumas coisas em comum ✨';
    return 'Vocês ainda podem se descobrir ✨';
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scroll}>

        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity
            style={styles.backBtn}
            onPress={() => router.back()}
          >
            <Text style={styles.backIcon}>←</Text>
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Resultado do Match</Text>
          <View style={{ width: 44 }} />
        </View>

        {/* Avatares */}
        <View style={styles.avatarsRow}>
          <View style={styles.avatarBox}>
            <Image
              source={{ uri: 'https://api.dicebear.com/7.x/adventurer/png?seed=Voce' }}
              style={styles.avatar}
            />
            <Text style={styles.avatarLabel}>Você</Text>
          </View>

          <View style={styles.heartBox}>
            <Text style={styles.heartIcon}>♥</Text>
          </View>

          <View style={styles.avatarBox}>
            <Image
              source={{ uri: avatar }}
              style={[styles.avatar, styles.avatarRight]}
            />
            <Text style={styles.avatarLabel}>{nome?.split(' ')[0]}</Text>
          </View>
        </View>

        {/* Card Compatibilidade */}
        <View style={styles.card}>
          <Text style={styles.compatLabel}>COMPATIBILIDADE</Text>
          <Text style={styles.compatPercent}>{matchNum}%</Text>
          <Text style={styles.compatMsg}>{getMessage()}</Text>

          {/* Barra de progresso */}
          <View style={styles.barBg}>
            <View style={[styles.barFill, { width: `${matchNum}%` }]} />
          </View>
        </View>

        {/* Card Interesses em comum */}
        <View style={styles.card}>
          <Text style={styles.interestTitle}>
            Interesses em comum ({tagsList.length})
          </Text>
          <View style={styles.tagsRow}>
            {tagsList.map((tag) => (
              <View key={tag} style={styles.tag}>
                <Text style={styles.tagText}>{tag}</Text>
              </View>
            ))}
          </View>
        </View>

        {/* Botão Enviar mensagem */}
        <TouchableOpacity style={styles.msgBtn} activeOpacity={0.85}>
          <Text style={styles.msgBtnText}>💬  Enviar mensagem</Text>
        </TouchableOpacity>

      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: BG,
  },
  scroll: {
    paddingBottom: 40,
  },

  // Header
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingTop: 16,
    paddingBottom: 8,
  },
  backBtn: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 6,
    elevation: 3,
  },
  backIcon: {
    fontSize: 20,
    color: '#1a1a2e',
  },
  headerTitle: {
    fontSize: 17,
    fontWeight: '700',
    color: '#1a1a2e',
  },

  // Avatares
  avatarsRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 32,
    gap: 16,
  },
  avatarBox: {
    alignItems: 'center',
    gap: 8,
  },
  avatar: {
    width: 90,
    height: 90,
    borderRadius: 20,
    borderWidth: 3,
    borderColor: PURPLE,
    backgroundColor: '#ddd',
  },
  avatarRight: {
    borderColor: '#C084FC',
  },
  avatarLabel: {
    fontSize: 14,
    fontWeight: '600',
    color: '#1a1a2e',
  },
  heartBox: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: PURPLE,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: PURPLE,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.4,
    shadowRadius: 8,
    elevation: 6,
  },
  heartIcon: {
    fontSize: 22,
    color: '#fff',
  },

  // Cards
  card: {
    backgroundColor: '#fff',
    borderRadius: 24,
    padding: 24,
    marginHorizontal: 24,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.07,
    shadowRadius: 8,
    elevation: 3,
    alignItems: 'center',
  },

  // Compatibilidade
  compatLabel: {
    fontSize: 12,
    fontWeight: '700',
    color: '#aaa',
    letterSpacing: 1.5,
    marginBottom: 8,
  },
  compatPercent: {
    fontSize: 64,
    fontWeight: '800',
    color: PURPLE,
    lineHeight: 72,
  },
  compatMsg: {
    fontSize: 15,
    fontWeight: '600',
    color: '#1a1a2e',
    marginTop: 8,
    marginBottom: 16,
  },
  barBg: {
    width: '100%',
    height: 8,
    backgroundColor: '#EEE8FF',
    borderRadius: 8,
    overflow: 'hidden',
  },
  barFill: {
    height: '100%',
    backgroundColor: PURPLE,
    borderRadius: 8,
  },

  // Interesses
  interestTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: '#1a1a2e',
    alignSelf: 'flex-start',
    marginBottom: 14,
  },
  tagsRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
    alignSelf: 'flex-start',
  },
  tag: {
    backgroundColor: PURPLE,
    borderRadius: 20,
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  tagText: {
    color: '#fff',
    fontSize: 13,
    fontWeight: '600',
  },

  // Botão
  msgBtn: {
    marginHorizontal: 24,
    marginTop: 8,
    paddingVertical: 16,
    borderRadius: 16,
    backgroundColor: PURPLE,
    alignItems: 'center',
    shadowColor: PURPLE,
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.4,
    shadowRadius: 12,
    elevation: 6,
  },
  msgBtnText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '700',
  },
});
