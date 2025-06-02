import { Tabs } from 'expo-router'
import React from 'react'

export default function TabsLayout() {
    return (
        <Tabs>
            <Tabs.Screen name="index" options={{ title: "Home" }} />
            <Tabs.Screen name="profile" options={{ title: "Profile" }} />
            <Tabs.Screen name="notifications" options={{ title: "Notifications" }} />
        </Tabs>
    )
}