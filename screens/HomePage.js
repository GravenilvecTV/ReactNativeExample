import { StyleSheet, Text, View, Image, Button, ScrollView } from 'react-native';
import CustomVideo from '../components/CustomVideo';

export function HomePage({ navigation }) {
    return (
        <ScrollView>
            <View style={styles.container}>
                <Text style={styles.coloredtext}>Je serais présent dans la saison 3 de squid game, en tant que développeur qui perdu tout son argent en crédit aws</Text>
                <CustomVideo title={"Ma premiere video"} id={"iO45p8rUaIQ"}/>
                <CustomVideo title={"Ma seconde video"} id={"fdIy__owMVQ"}/>
                <CustomVideo title={"Ma troisieme video"} id={"cm_J0Aqomso"}/>

                <Image
                    style={styles.customimage}
                    source={{
                        uri: 'https://pbs.twimg.com/media/GgOoPjPXIAAKaka?format=jpg&name=large',
                    }}
                />
                <Button
                    title="Go to Second page"
                    onPress={() =>
                        navigation.navigate('Second')
                    }
                />
            </View>
        </ScrollView>
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