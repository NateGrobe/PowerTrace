import React, { useState } from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'

const App = () => {

  return (
    <View style={styles.container}>
      <Text>Power Trace</Text>
      <Text>Welcome Back!</Text>

      <Button title='Bluetooth' />
      <Button title='Location Services' />
    </View>
  )
}

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#B8E2F2',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
