import { VStack } from "native-base";
import { Alert } from "react-native";
import { Header } from "../components/Header";
import { Input } from "../components/Input";
import { useState } from "react";
import { Button } from "../components/Button";

export function Register(){
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [ isLoading, setIsLoading] = useState(false);


  function handleNewBook(){
    if(!title || !description){
      return Alert.alert('Cadastro' , 'Preencha todos os campos.' );
    }

    //setIsLoading(true);
  }

  return(
    <VStack flex={1} px={6} bg="gray.600">
      <Header title="Novo livro"/>

      <Input
        placeholder="Titulo"
        mt={4}
        onChangeText={setTitle}
      />
      <Input
        placeholder="Resumo"
        flex={1}
        multiline
        mt={5}
        textAlignVertical="top"
        onChangeText={setDescription}
      />

      <Button
        title="Cadastrar"
        isLoading={isLoading}
        onPress={handleNewBook}
        mt={6}
        mb={3}
      />
    </VStack>
  );
}