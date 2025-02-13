import { HStack, VStack,StatusBar, Image, IconButton, useTheme, FlatList, Center, Text, Heading } from "native-base";
import Logo from '../assets/DVD.png';
import { ChatTeardropText, SignOut } from "phosphor-react-native";
import { Book, BookProps } from "../components/Book";
import { Filter } from "../components/Filter";
import { useState } from "react";
import { Button } from "../components/Button";
import { Loading } from "../components/Loading";
import { useNavigation } from "@react-navigation/native";

export function Home(){
  const navigation = useNavigation();
  const {colors} = useTheme();
  const [isLoading, setIsLoading] = useState(false);
  const [statusSelected, setStatusSelected] = useState<'reading' | 'finished' >('reading');

  const [books,setBooks] = useState<BookProps[]>([
    {
      id: "1",
      title: "Harry Potter",
      description: 'Livro de nerd que não tem nada pra fazer.',
      when: "11/02/2025",
      status: 'finished' 
    },
    {
      id: "2",
      title: "Baleia Azul",
      description: 'Livro baseado em uma baleia azul.',
      when: "10/02/2025",
      status: 'reading' 
    }
  ])

  function handleNewBook(){
    navigation.navigate('new');
  }

  function handleOpenDetails(bookId: string){
    navigation.navigate('details', {bookId});
  }

  return(
    <VStack flex={1} pb={6} bg="gray.600" py={10} >
      <StatusBar barStyle="light-content" backgroundColor="transparent" translucent />


      <HStack
        w="full"
        h="24"
        justifyContent="space-between"
        alignItems="center"
        bg="gray.600"
        pt={10}
        pb={6}
        px={6}

      >
        <Image source={Logo} resizeMode="contain" size="sm" alt="logo"/>
        <IconButton
          icon={<SignOut size={26} color={colors.gray[300]}/>}
        />
      </HStack>

      <VStack flex={1} px={7}>
        <HStack w="full" justifyContent="space-between" alignItems="center" mt={8} mb={4} pb={6}>
          <Heading color="gray.200">
            Meus livros
          </Heading>
          <Text color="gray.200">
            {books.length}
          </Text>
        </HStack>


      <HStack space={3} mt={4} mb={8}>
        <Filter 
          title="lendo"
          type="reading"
          onPress={() => setStatusSelected('reading')}
          isActive={statusSelected ==='reading'}
          />

        <Filter
          title="finalizados"
          type="finished"
          onPress={() => setStatusSelected('finished')}
          isActive={statusSelected ==='finished'}
          />
      </HStack>

      {isLoading ? (
        <Loading />
      ) : (
        
        <FlatList
        data={books}
        keyExtractor={item => item.id}
        renderItem={({ item }) => <Book data={item} onPress={()=> handleOpenDetails(item.id)}/>}
        contentContainerStyle={{ paddingBottom: 100 }}
        ListEmptyComponent={() => (
          <Center pt={20}>
              <ChatTeardropText color={colors.gray[300]} size={24} />
              <Text color={colors.gray[300]} fontSize="lg" mt={6} textAlign="center">
                {statusSelected === 'reading' ? 'Você não está lendo' :
                  'Você ainda não leu um livro'}
              </Text>
            </Center>
          )}
          />
        )}
        <Button title="Novo livro" mt={6} onPress={handleNewBook}/>
      </VStack>
    </VStack>
  )
}