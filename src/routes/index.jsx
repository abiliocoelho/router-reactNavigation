import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { Detail } from '../pages/Detail'
import { Home } from '../pages/Home'

const { Navigator, Screen } = createNativeStackNavigator()

export function Routes() {
  return (
    <NavigationContainer>
      <Navigator>
        <Screen name="home" component={Home} options={{
          headerShown: false
        }}/>
        <Screen name="detail" component={Detail} />
      </Navigator>
    </NavigationContainer>
  )
}