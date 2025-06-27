import React , { useState } from 'react'
import { StyleSheet, Text, View, Image } from 'react-native';

export function SecondPage() {
    const [count, setCount] = useState(0)

    return (
        <View style={styles.container}>
            <Text style={styles.coloredtext}>Voici la 2eme page</Text>
            <Text>Vous avez clické {count} fois !</Text>

            <Button 
                title="Click"
                onPress={() => {setCount(count + 1)}} 
                />
        </View>
    )
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  customimage: {
    width: 200,
    height: 400,
  }, 
  coloredtext: {
    fontSize: 20,
    color: 'red'
  } 
});