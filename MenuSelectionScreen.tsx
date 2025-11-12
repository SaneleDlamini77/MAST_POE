import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../Navigation/AppNavigation';
import { MenuItem, Course } from '../types/MenuItem';

type MenuSelectionScreenNavigationProp = StackNavigationProp<RootStackParamList, 'MenuSelection'>;

interface Props {
  navigation: MenuSelectionScreenNavigationProp;
  route: { params: { menuItems: MenuItem[] } };
}

const MenuSelectionScreen: React.FC<Props> = ({ navigation, route }) => {
  const { menuItems } = route.params;
  const courses: Course[] = ['Starter', 'Main', 'Dessert'];

  const getItemsByCourse = (course: Course) =>
    menuItems.filter(item => item.course === course);

  return (
    <View style={styles.container}>
      <FlatList
        data={courses}
        keyExtractor={item => item}
        renderItem={({ item: course }) => (
          <View style={styles.courseSection}>
            <Text style={styles.courseTitle}>{course}</Text>
            {getItemsByCourse(course).map(item => (
              <View key={item.id} style={styles.menuItem}>
                <Text style={styles.itemName}>{item.name}</Text>
                <Text style={styles.itemDescription}>{item.description}</Text>
                <Text style={styles.itemPrice}>R{item.price}</Text>
              </View>
            ))}
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f8f8f8', padding: 20 },
  courseSection: { marginBottom: 25 },
  courseTitle: { fontSize: 22, fontWeight: 'bold', color: '#e74c3c', marginBottom: 10 },
  menuItem: { backgroundColor: 'white', padding: 15, borderRadius: 8, marginBottom: 10, shadowColor: '#000', shadowOffset: { width: 0, height: 1 }, shadowOpacity: 0.1, shadowRadius: 3, elevation: 2 },
  itemName: { fontSize: 16, fontWeight: 'bold', color: '#333' },
  itemDescription: { fontSize: 14, color: '#666', marginTop: 4, marginBottom: 6 },
  itemPrice: { fontSize: 16, fontWeight: 'bold', color: '#2ecc71' },
});

export default MenuSelectionScreen;
