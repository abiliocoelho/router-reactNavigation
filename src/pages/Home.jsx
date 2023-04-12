import { useEffect, useState } from 'react'
import { FlatList, SafeAreaView, StyleSheet } from 'react-native'

import { User } from '../componentes/User'
import { api } from '../services/api'

export function Home() {
  const [users, setUsers] = useState([])
  
  async function getUsers() { 
    const response = await api.get('?results=10&nat=BR')
    setUsers(response.data.results)
  }

  useEffect(() => {
    getUsers()
  }, [])

  return (
    <SafeAreaView style={styles.container}>

      <FlatList
        data={users}
        keyExtractor={item => item.login.uuid}
        renderItem={({ item }) => (
          <User
            name={item.name.first}
            email={item.email}
            imageUrl={item.picture.large}
          />
        )}
      />
      
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title:{
    fontSize: 24
  }
})