import { Input as NaitiveBaseInput, IInputProps } from "native-base";

export function Input({ ...rest}: IInputProps ){
  return(
    <NaitiveBaseInput
      bg="gray.700"
      h={14}
      size="md"
      fontFamily="body"
      color="white"
      placeholderTextColor="gray.300"
      _focus={{
        borderWidth:1,
        borderColor: 'yellow.500',
        bg: 'gray.700'
      }}
      {...rest}
    >
    </NaitiveBaseInput>
  )
}