import { StyleSheet, Text, View, Image } from 'react-native';

export function HomePage() {
    return (
        <View style={styles.container}>
            <Text style={styles.coloredtext}>Je serais présent dans la saison 3 de squid game, en tant que développeur qui perdu tout son argent en crédit aws</Text>
            <Image 
                style={styles.customimage}
                source={{
                  uri: 'https://pbs.twimg.com/media/GgOoPjPXIAAKaka?format=jpg&name=large',
                }}
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