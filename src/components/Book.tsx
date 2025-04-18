import { Box, HStack, IPressableProps, Pressable, useTheme, VStack, Text, Circle } from "native-base";
import { ClockAfternoon, Hourglass, UserCircleCheck } from "phosphor-react-native";

export type BookProps = {
  id: string;
  title: string;
  description: string;
  when: string;
  status: 'reading' | 'finished';
}


type Props = IPressableProps & {
  data: BookProps;
}

export function Book({data, ...rest}: Props){
const {colors} = useTheme();

  const statusColor = data.status === 'reading' ? colors.green[500] : colors.secondary[700];
  return(
    <Pressable {...rest}>
      <HStack
        bg="gray.600"
        mb={4}
        alignItems="center"
        justifyContent="space-between"
        rounded="sm"
        overflow="hidden"
      >
        <Box h="full" w={2} bgColor={statusColor}></Box>
        <VStack flex={1} my={5} ml={5}>
          <Text color="white" fontSize="md">{data.title}</Text>
          <HStack mt={1}>
            <ClockAfternoon size={15} color={colors.gray[300]}/>
            <Text color="gray.200" fontSize="xs" ml={1}>{data.when}</Text>
          </HStack>
        </VStack>
        <Circle bg="gray.500" h={12} w={12} mr={5}>
          {
            data.status ==='finished'?
            <UserCircleCheck size={24} color={statusColor}/> :
            <Hourglass size={24} color={statusColor}/>
          }
        </Circle>
      </HStack>
    </Pressable>
  )
} 