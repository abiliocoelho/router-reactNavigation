import { useRoute } from '@react-navigation/native'
import { Image, StyleSheet, Text, View } from 'react-native'
export function Detail() {
  const { params } = useRoute()
  console.log(params)
  return (
    <View style={styles.container}>
      <Image source={{uri: params.imageUrl}} style={styles.image} />
      <Text style={styles.title}>{params.name}</Text>
      <Text style={styles.title}>{params.email}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  title:{
    fontSize: 24
  },
  image: {
    marginVertical: 20,
    height: 300,
    width: 300,
    borderRadius: 150
  }
})