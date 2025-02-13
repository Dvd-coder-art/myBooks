import {HStack, Heading, VStack, useTheme} from 'native-base';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Header } from '../components/Header';
import { BookProps } from '../components/Book';
import { BookDetails } from '../components/BookDetails';
import { UserCircleCheck } from 'phosphor-react-native';

type RouteParams = {
  bookId: string;
}

type BookDetails = BookProps & {
  title: string;
  description: string;
  closed: string;
}

export function Details() {
  const navigation = useNavigation();
  const route = useRoute();
  const {bookId} = route.params as RouteParams;
  const { colors } = useTheme();

  return(
    <VStack flex={1} bg="gray.600">
      <Header title={"Livro " + bookId} />
      <BookDetails 
        title='Nome do livro' 
        description='Abc'
        icon={UserCircleCheck}/>
    </VStack>
  )
}