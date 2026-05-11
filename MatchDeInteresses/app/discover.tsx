import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  FlatList,
  Image,
} from 'react-native';

const PESSOAS = [
  {
    id: '1',
    nome: 'Ana Beatriz',
    idade: 24,
    bio: 'Apaixonada por arte e caf...',
    tags: ['Música', 'Viagens'],
    match: 44,
    avatar: 'https://api.dicebear.com/7.x/adventurer/png?seed=AnaBeatriz',
  },
  {
    id: '2',
    nome: 'Carlos Mendes',
    idade: 28,
    bio: 'Dev, gamer e cinéfilo 🎮',
    tags: ['Tecnologia', 'Cinema'],
    match: 50,
    avatar: 'https://api.dicebear.com/7.x/adventurer/png?seed=CarlosMendes',
  },
  {
    id: '3',
    nome: 'Juliana Reis',
    idade: 26,
    bio: 'Aventureira e leitora com...',
    tags: ['Viagens', 'Leitura'],
    match: 75,
    avatar: 'https://api.dicebear.com/7.x/adventurer/png?seed=JulianaReis',
  },
  {
    id: '4',
    nome: 'Rafael Souza',
    idade: 30,
    bio: 'Música é vida 🎧',
    tags: ['Música', 'Festivais'],
    match: 10,
    avatar: 'https://api.dicebear.com/7.x/adventurer/png?seed=RafaelSouza',
  },
];

function PessoaCard({ item }: { item: typeof PESSOAS[0] }) {
  return (
    <View style={styles.card}>
      <View style={styles.avatarWrapper}>
        <Image source={{ uri: item.avatar }} style={styles.avatar} />
        <View style={styles.badge}>
          <Text style={styles.badgeText}>{item.match}%</Text>
        </View>
      </View>

      <View style={styles.cardInfo}>
        <Text style={styles.cardNome}>
          {item.nome},{' '}
          <Text style={styles.cardIdade}>{item.idade}</Text>
        </Text>
        <Text style={styles.cardBio} numberOfLines={1}>
          {item.bio}
        </Text>
        <View style={styles.tagsRow}>
          {item.tags.map((tag) => (
            <View key={tag} style={styles.tag}>
              <Text style={styles.tagText}>{tag}</Text>
            </View>
          ))}
        </View>
      </View>

      <TouchableOpacity style={styles.matchBtn} activeOpacity={0.85}>
        <Text style={styles.matchIcon}>✦</Text>
        <Text style={styles.matchText}>Match</Text>
      </TouchableOpacity>
    </View>
  );
}

export default function DiscoverScreen() {
  const [busca, setBusca] = useState('');

  const filtradas = PESSOAS.filter(
    (p) =>
      p.nome.toLowerCase().includes(busca.toLowerCase()) ||
      p.tags.some((t) => t.toLowerCase().includes(busca.toLowerCase()))
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <View>
          <Text style={styles.ola}>Olá 👋</Text>
          <Text style={styles.titulo}>Descobrir pessoas</Text>
        </View>
        <TouchableOpacity style={styles.bellBtn}>
          <Text style={styles.bellIcon}>🔔</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.searchWrapper}>
        <Text style={styles.searchIcon}>🔍</Text>
        <TextInput
          style={styles.searchInput}
          placeholder="Buscar por interesses..."
          placeholderTextColor="#aaa"
          value={busca}
          onChangeText={setBusca}
        />
      </View>

      <FlatList
        data={filtradas}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <PessoaCard item={item} />}
        contentContainerStyle={styles.listContent}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
}

const PURPLE = '#7C5CFC';
const BG = '#EFF0FF';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: BG,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 24,
    paddingTop: 16,
    paddingBottom: 8,
  },
  ola: {
    fontSize: 14,
    color: '#6b6b8d',
  },
  titulo: {
    fontSize: 24,
    fontWeight: '800',
    color: '#1a1a2e',
  },
  bellBtn: {
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
  bellIcon: {
    fontSize: 20,
  },
  searchWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 16,
    marginHorizontal: 24,
    marginVertical: 12,
    paddingHorizontal: 16,
    paddingVertical: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.06,
    shadowRadius: 6,
    elevation: 2,
  },
  searchIcon: {
    fontSize: 18,
    marginRight: 8,
    color: '#aaa',
  },
  searchInput: {
    flex: 1,
    fontSize: 15,
    color: '#1a1a2e',
  },
  listContent: {
    paddingHorizontal: 24,
    paddingBottom: 24,
    gap: 12,
  },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 14,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.07,
    shadowRadius: 8,
    elevation: 3,
  },
  avatarWrapper: {
    position: 'relative',
    marginRight: 12,
  },
  avatar: {
    width: 72,
    height: 72,
    borderRadius: 16,
    backgroundColor: '#ddd',
  },
  badge: {
    position: 'absolute',
    bottom: -4,
    left: -4,
    backgroundColor: PURPLE,
    borderRadius: 10,
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderWidth: 2,
    borderColor: '#fff',
  },
  badgeText: {
    color: '#fff',
    fontSize: 10,
    fontWeight: '700',
  },
  cardInfo: {
    flex: 1,
  },
  cardNome: {
    fontSize: 15,
    fontWeight: '700',
    color: '#1a1a2e',
  },
  cardIdade: {
    fontWeight: '400',
    color: '#6b6b8d',
  },
  cardBio: {
    fontSize: 12,
    color: '#6b6b8d',
    marginVertical: 4,
  },
  tagsRow: {
    flexDirection: 'row',
    gap: 6,
    flexWrap: 'wrap',
  },
  tag: {
    backgroundColor: '#EEE8FF',
    borderRadius: 20,
    paddingHorizontal: 10,
    paddingVertical: 3,
  },
  tagText: {
    fontSize: 11,
    color: PURPLE,
    fontWeight: '600',
  },
  matchBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: PURPLE,
    borderRadius: 14,
    paddingHorizontal: 14,
    paddingVertical: 10,
    marginLeft: 10,
    gap: 4,
    shadowColor: PURPLE,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.35,
    shadowRadius: 8,
    elevation: 5,
  },
  matchIcon: {
    color: '#fff',
    fontSize: 13,
  },
  matchText: {
    color: '#fff',
    fontWeight: '700',
    fontSize: 14,
  },
});
