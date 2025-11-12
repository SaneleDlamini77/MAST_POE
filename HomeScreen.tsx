import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, FlatList } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../Navigation/AppNavigation';
import { MenuItem, Course } from '../types/MenuItem';

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;

interface Props {
  navigation: HomeScreenNavigationProp;
}

const HomeScreen: React.FC<Props> = ({ navigation }) => {
  const [menuItems, setMenuItems] = useState<MenuItem[]>([
    { id: '1', name: 'Garlic Bread', description: 'Freshly baked bread with garlic butter and herbs', course: 'Starter', price: 45 },
    { id: '2', name: 'Caprese Salad', description: 'Fresh mozzarella, tomatoes, and basil with balsamic glaze', course: 'Starter', price: 65 },
    { id: '3', name: 'Bruschetta', description: 'Grilled bread with tomato, basil, and olive oil', course: 'Starter', price: 55 },
    { id: '4', name: 'Grilled Ribeye Steak', description: '300g prime ribeye with roasted vegetables and pepper sauce', course: 'Main', price: 185 },
    { id: '5', name: 'Herb Crusted Salmon', description: 'Atlantic salmon with lemon butter sauce and seasonal greens', course: 'Main', price: 155 },
    { id: '6', name: 'Chicken Alfredo Pasta', description: 'Creamy fettuccine with grilled chicken and parmesan', course: 'Main', price: 140 },
    { id: '7', name: 'Chocolate Lava Cake', description: 'Warm chocolate cake with molten center and vanilla ice cream', course: 'Dessert', price: 75 },
    { id: '8', name: 'Tiramisu', description: 'Classic Italian dessert with coffee-soaked ladyfingers', course: 'Dessert', price: 65 },
    { id: '9', name: 'Cheesecake', description: 'Rich and creamy cheesecake with berry compote', course: 'Dessert', price: 70 },
  ]);

  const addDish = (dish: MenuItem) => {
    setMenuItems(prev => [...prev, dish]);
  };

  const courses: Course[] = ['Starter', 'Main', 'Dessert'];

  const getCourseItemCount = (course: Course) =>
    menuItems.filter(item => item.course === course).length;

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.restaurantName}>Christo's GRILL</Text>
        <Text style={styles.established}>EST 2025</Text>
        <Text style={styles.totalItems}>Total Menu Items: {menuItems.length}</Text>
      </View>

      <TouchableOpacity style={styles.addButton} onPress={() => navigation.navigate('AddMenuItem', { addDish })}>
        <Text style={styles.addButtonText}>+ Add New Dish</Text>
      </TouchableOpacity>

      <View style={styles.coursesContainer}>
        {courses.map(course => (
          <TouchableOpacity
            key={course}
            style={styles.courseButton}
            onPress={() => navigation.navigate('Filter', { menuItems })}
          >
            <Text style={styles.courseText}>{course}</Text>
            <Text style={styles.courseCount}>({getCourseItemCount(course)} items)</Text>
          </TouchableOpacity>
        ))}
      </View>

      <View style={styles.menuPreview}>
        <Text style={styles.previewTitle}>Menu Preview</Text>
        <FlatList
          data={menuItems.slice(0, 3)}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <View style={styles.menuItem}>
              <Text style={styles.itemName}>{item.name}</Text>
              <Text style={styles.itemDescription}>{item.description}</Text>
              <Text style={styles.itemPrice}>R{item.price}</Text>
            </View>
          )}
        />
        {menuItems.length > 3 && <Text style={styles.moreItems}>+{menuItems.length - 3} more items...</Text>}
      </View>

      <TouchableOpacity style={styles.viewMenuButton} onPress={() => navigation.navigate('MenuSelection', { menuItems })}>
        <Text style={styles.viewMenuText}>VIEW FULL MENU</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f8f8f8', padding: 20 },
  header: { alignItems: 'center', marginBottom: 30, marginTop: 20 },
  restaurantName: { fontSize: 28, fontWeight: 'bold', color: '#333' },
  established: { fontSize: 16, color: '#666', marginTop: 5 },
  totalItems: { fontSize: 16, color: '#888', marginTop: 10, fontWeight: '500' },
  addButton: { backgroundColor: '#2ecc71', padding: 15, borderRadius: 8, alignItems: 'center', marginBottom: 20 },
  addButtonText: { color: 'white', fontSize: 16, fontWeight: 'bold' },
  coursesContainer: { marginBottom: 30 },
  courseButton: { backgroundColor: 'white', padding: 20, borderRadius: 10, marginBottom: 15, shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.1, shadowRadius: 4, elevation: 3 },
  courseText: { fontSize: 18, fontWeight: 'bold', color: '#333' },
  courseCount: { fontSize: 14, color: '#666', marginTop: 5 },
  menuPreview: { backgroundColor: 'white', padding: 15, borderRadius: 10, marginBottom: 20 },
  previewTitle: { fontSize: 18, fontWeight: 'bold', marginBottom: 10, color: '#333' },
  menuItem: { paddingVertical: 10, borderBottomWidth: 1, borderBottomColor: '#f0f0f0' },
  itemName: { fontSize: 16, fontWeight: 'bold', color: '#333' },
  itemDescription: { fontSize: 14, color: '#666', marginTop: 2 },
  itemPrice: { fontSize: 14, fontWeight: 'bold', color: '#2ecc71', marginTop: 2 },
  moreItems: { textAlign: 'center', color: '#666', marginTop: 10, fontStyle: 'italic' },
  viewMenuButton: { backgroundColor: '#e74c3c', padding: 15, borderRadius: 8, alignItems: 'center' },
  viewMenuText: { color: 'white', fontSize: 16, fontWeight: 'bold' },
});

export default HomeScreen;
