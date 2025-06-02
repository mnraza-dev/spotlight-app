import { COLORS } from '@/constants/theme'
import { Ionicons } from '@expo/vector-icons'
import { Tabs } from 'expo-router'
import React from 'react'

export default function TabsLayout() {
    return (
        <Tabs screenOptions={{
            tabBarShowLabel: false,
        }}>
            <Tabs.Screen name="index" options={{
                tabBarIcon: ({ size, color }) => <Ionicons name="home" size={size} color={color} />,
            }} />

            <Tabs.Screen name="bookmarks" options={{
                tabBarIcon: ({ size, color }) => <Ionicons name="bookmark" size={size} color={color} />,
            }} />
            <Tabs.Screen name="create" options={{
                tabBarIcon: ({ size, color }) => <Ionicons name="add-circle" size={size} color={COLORS.primary} />,
            }} />
            <Tabs.Screen name="notifications" options={{
                tabBarIcon: ({ size, color }) => <Ionicons name="heart" size={size} color={color} />,
            }} />
            <Tabs.Screen name="profile" options={{
                tabBarIcon: ({ size, color }) => <Ionicons name="person-circle" size={size} color={color} />,
            }} />


        </Tabs>
    )
}