import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, FlatList } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../Navigation/AppNavigation';
import { MenuItem, Course } from '../types/MenuItem';

type FilterScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Filter'>;

interface Props {
  navigation: FilterScreenNavigationProp;
  route: { params: { menuItems: MenuItem[] } };
}

const FilterScreen: React.FC<Props> = ({ navigation, route }) => {
  const { menuItems } = route.params;
  const courses: Course[] = ['Starter', 'Main', 'Dessert'];

  const getItemsByCourse = (course: Course) => menuItems.filter(item => item.course === course);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Filter by Course</Text>
      <FlatList
        data={courses}
        keyExtractor={(item) => item}
        renderItem={({ item: course }) => (
          <View style={styles.courseSection}>
            <Text style={styles.courseTitle}>{course}</Text>
            <FlatList
              data={getItemsByCourse(course)}
              keyExtractor={(item) => item.id}
              renderItem={({ item }) => (
                <View style={styles.menuItem}>
                  <Text style={styles.itemName}>{item.name}</Text>
                  <Text style={styles.itemDescription}>{item.description}</Text>
                  <Text style={styles.itemPrice}>R{item.price}</Text>
                </View>
              )}
            />
          </View>
        )}
      />
      <View style={styles.navigationButtons}>
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
          <Text style={styles.backButtonText}>BACK</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.nextButton} onPress={() => navigation.navigate('MenuSelection', { menuItems })}>
          <Text style={styles.nextButtonText}>NEXT</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f8f8f8', padding: 20 },
  title: { fontSize: 24, fontWeight: 'bold', textAlign: 'center', marginBottom: 20, color: '#333' },
  courseSection: { marginBottom: 25 },
  courseTitle: { fontSize: 20, fontWeight: 'bold', color: '#e74c3c', marginBottom: 10, borderBottomWidth: 2, borderBottomColor: '#e74c3c', paddingBottom: 5 },
  menuItem: { backgroundColor: 'white', padding: 15, borderRadius: 8, marginBottom: 10, shadowColor: '#000', shadowOffset: { width: 0, height: 1 }, shadowOpacity: 0.1, shadowRadius: 3, elevation: 2 },
  itemName: { fontSize: 16, fontWeight: 'bold', color: '#333' },
  itemDescription: { fontSize: 14, color: '#666', marginTop: 4, marginBottom: 6 },
  itemPrice: { fontSize: 16, fontWeight: 'bold', color: '#2ecc71' },
  navigationButtons: { flexDirection: 'row', justifyContent: 'space-between', marginTop: 20 },
  backButton: { backgroundColor: '#95a5a6', padding: 15, borderRadius: 8, flex: 1, marginRight: 10, alignItems: 'center' },
  backButtonText: { color: 'white', fontWeight: 'bold' },
  nextButton: { backgroundColor: '#e74c3c', padding: 15, borderRadius: 8, flex: 1, marginLeft: 10, alignItems: 'center' },
  nextButtonText: { color: 'white', fontWeight: 'bold' },
});

export default FilterScreen;
