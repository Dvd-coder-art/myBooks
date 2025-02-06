import { Heading, NativeBaseProvider, StatusBar, VStack } from 'native-base';
import { useFonts,Roboto_400Regular,Roboto_700Bold } from '@expo-google-fonts/roboto';

import { THEME } from './src/styles/theme';
import { Loading } from './src/components/Loading';

export default function App(){
  const[fontsLoaded] = useFonts({Roboto_400Regular, Roboto_700Bold})

  return(
    <NativeBaseProvider theme={THEME}>
      <StatusBar barStyle="light-content" backgroundColor="transparent" translucent/>
      {fontsLoaded ? (
        <VStack flex={1} bg="gray.600" alignItems="center" px={8} py={24}>
          <Heading color="gray.100" fontSize="xl" mt={20} mb={6}>
            Bem-vindo ao Native Base
          </Heading>
        </VStack>
      ) : (
        <Loading/>
      )}
      
      
    </NativeBaseProvider>
  )
}