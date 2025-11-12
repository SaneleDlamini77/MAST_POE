import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../Navigation/AppNavigation';
import { MenuItem } from '../types/MenuItem';

type FinalMenuScreenNavigationProp = StackNavigationProp<RootStackParamList, 'FinalMenu'>;

interface Props {
  navigation: FinalMenuScreenNavigationProp;
  route: { params: { menuItems: MenuItem[] } };
}

const FinalMenuScreen: React.FC<Props> = ({ route }) => {
  const { menuItems } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Final Menu</Text>
      <FlatList
        data={menuItems}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View style={styles.menuItem}>
            <Text style={styles.itemName}>{item.name}</Text>
            <Text style={styles.itemDescription}>{item.description}</Text>
            <Text style={styles.itemCourse}>{item.course}</Text>
            <Text style={styles.itemPrice}>R{item.price}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f8f8f8', padding: 20 },
  title: { fontSize: 24, fontWeight: 'bold', color: '#333', marginBottom: 20, textAlign: 'center' },
  menuItem: { backgroundColor: 'white', padding: 15, borderRadius: 10, marginBottom: 15, shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.1, shadowRadius: 4, elevation: 3 },
  itemName: { fontSize: 16, fontWeight: 'bold', color: '#333' },
  itemDescription: { fontSize: 14, color: '#666', marginVertical: 4 },
  itemCourse: { fontSize: 14, fontWeight: '600', color: '#e74c3c' },
  itemPrice: { fontSize: 16, fontWeight: 'bold', color: '#2ecc71', marginTop: 2 },
});

export default FinalMenuScreen;
