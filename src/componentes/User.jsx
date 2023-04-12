import { Entypo } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
export function User({ name, email, imageUrl }) {
  const { navigate } = useNavigation()
  
  return (
    <View style={styles.container}>
      <Image source={{ uri: imageUrl }}
      style={styles.image}
      />
      <View style={styles.infoContainer}>
        <Text style={styles.textName}>{name}</Text>
        <Text style={styles.textEmail}>{email}</Text>
      </View>
      <TouchableOpacity onPress={() => navigate('detail', {
        name,
        email,
        imageUrl
      })}>
        <Entypo name="chevron-right" color="#000" size={40}/>
    </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding:10,
    marginBottom: 5
  },
  image: {
    height: 100,
    width: 100,
    borderRadius: 50
  },
  infoContainer: {
    flex: 1,
    justifyContent: 'center',
    marginLeft:10
  },
  textName: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  textEmail: {
    fontSize: 18,
    color: 'gray'
  }
  
})