import React,{useState} from "react";
import { useNavigation } from "@react-navigation/native";
import { Heading, VStack, Icon, Image, useTheme } from "native-base";
import { Input } from "../components/Input";
import { Button } from "../components/Button";
import { Envelope, Key } from "phosphor-react-native";
import DVD from '../assets/DVD.png';

export function SignIn(){
  const {colors} = useTheme();
  const [isLoading, setIsLoading] = useState(false);
  const navigation = useNavigation();

  function handLeSignIn(){
    setIsLoading(true);
    navigation.navigate('home');
  }

  return(
    <VStack flex={1} bg="gray.600" alignItems="center" px={8} py={24}>
      <Image source={DVD} resizeMode="contain" size="xl" alt="logo"/>
      <Heading color="gray.100" fontSize="xl" mt={20} mb={6}>
        Acesse sua conta
      </Heading>

      <Input
        placeholder="E-mail"
        InputLeftElement={<Icon as={<Envelope color={colors.gray[300]}/>} ml={4}/>}
        keyboardType="email-address"
        autoCapitalize="none"
        autoCorrect={false}
        mb={4}
      />
      <Input
        placeholder="Password"
        InputLeftElement={<Icon as={<Key color={colors.gray[300]}/>} ml={4}/>}
        secureTextEntry
        autoCapitalize="none"
        autoCorrect={false}
        mb={4}
      />

      <Button 
        title="Entrar"
        w="full"
        onPress={handLeSignIn}
        isLoading={isLoading}
      />

    </VStack>
  )
}