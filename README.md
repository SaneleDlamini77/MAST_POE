A React Native mobile application for managing and browsing restaurant menus with course-based filtering and dish management capabilities.

📱 App Overview
This application provides a complete solution for restaurant menu management, allowing users to:

View menu items organized by courses (Starters, Mains, Desserts)

Add new dishes to the menu

Filter menu items by course type

Browse the complete menu selection

🏗️ Project Structure
text
src/
├── Navigation/
│   └── AppNavigation.tsx        # Main navigation setup
├── types/
│   └── MenuItem.ts              # TypeScript type definitions
└── screens/
    ├── HomeScreen.tsx           # Main dashboard
    ├── AddMenuItemScreen.tsx    # Add new dishes
    ├── FilterScreen.tsx         # Filter by course
    ├── MenuSelectionScreen.tsx  # Full menu view
    └── FinalMenuScreen.tsx      # Final menu display
🎯 Features
Home Screen
Restaurant branding and establishment info

Total menu items counter

Quick access to add new dishes

Course-based navigation buttons with item counts

Menu preview showing first 3 items

Full menu access button

Add Menu Item Screen
Form for adding new dishes with validation

Fields for name, description, course selection, and price

Course selection using Picker component

Input validation and error handling

Success confirmation with automatic navigation back

Filter Screen
Course-based filtering (Starters, Mains, Desserts)

Displays items grouped by course type

Navigation buttons to go back or proceed to full menu

Menu Selection Screen
Complete menu display organized by courses

Clean, card-based layout for menu items

Price and description for each dish

Final Menu Screen
Simple list view of all menu items

Comprehensive dish information display

🛠️ Technical Details
Dependencies
React Native

React Navigation Stack

@react-native-picker/picker

TypeScript

Type Definitions
typescript
type Course = 'Starter' | 'Main' | 'Dessert';

interface MenuItem {
  id: string;
  name: string;
  description: string;
  course: Course;
  price: number;
}
Navigation Stack
Home → Main dashboard

AddMenuItem → Add new dishes

Filter → Course-based filtering

MenuSelection → Full menu view

FinalMenu → Complete menu display

🎨 UI/UX Features
Clean Design: Modern, card-based interface with subtle shadows

Color Scheme:

Primary: Red (#e74c3c) for action buttons

Success: Green (#2ecc71) for positive actions and prices

Neutral: Gray palette for text and backgrounds

Responsive Layout: Adapts to different screen sizes

Intuitive Navigation: Clear button hierarchy and flow

📊 Sample Data
The app comes pre-loaded with sample menu items including:

Starters

Garlic Bread, Caprese Salad, Bruschetta

Main Courses

Grilled Ribeye Steak, Herb Crusted Salmon, Chicken Alfredo Pasta

Desserts

Chocolate Lava Cake, Tiramisu, Cheesecake

🚀 Getting Started
Prerequisites

Node.js and npm/yarn

React Native development environment

iOS/Android simulator or physical device

Installation

bash
npm install
# or
yarn install
Run the Application

bash
npx react-native run-ios
# or
npx react-native run-android
🔧 Customization
Adding New Courses
Update the Course type in MenuItem.ts

Add new course to the courses array in relevant screens

Update navigation and filtering logic as needed

Styling Modifications
Colors are defined in individual StyleSheet objects

Layout uses Flexbox for responsive design

Consistent spacing and padding throughout

Menu Management
State management using React useState

Simple array operations for adding new items

Filtering based on course types

📱 Screens
Home: Dashboard with overview and quick actions

Add Menu Item: Form for creating new dishes

Filter: Course-based menu filtering

Menu Selection: Organized full menu view

Final Menu: Simple list of all menu items

🔄 Data Flow
Menu items are managed in HomeScreen state

Passed between screens via React Navigation params

AddMenuItemScreen uses callback to update parent state

Filtering happens locally in each screen

🎯 Potential Enhancements
Persistent storage integration

Edit/delete menu item functionality

Search functionality

Image support for dishes

Menu categories expansion

User authentication

Backend API integration

References

React Native
Facebook (2023) React Native: Build native mobile apps using JavaScript and React. [Online] Available at: https://reactnative.dev/ (Accessed: 15 January 2025)

React Navigation
React Navigation (2023) Routing and navigation for Expo and React Native apps. [Online] Available at: https://reactnavigation.org/ (Accessed: 15 January 2025)

TypeScript
Microsoft Corporation (2023) TypeScript: JavaScript with syntax for types. [Online] Available at: https://www.typescriptlang.org/ (Accessed: 15 January 2025)

React Native Picker
React Native Community (2023) @react-native-picker/picker: React Native Picker component. [Online] Available at: https://github.com/react-native-picker/picker (Accessed: 15 January 2025)
