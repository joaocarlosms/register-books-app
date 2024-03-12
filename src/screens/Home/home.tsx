import { Center, Heading, NativeBaseProvider, VStack } from "native-base";

export default function App() {
  return(
    <VStack bgColor={'#ffb66c'} flex={1} >
        <Center>
            <Heading my={24} color={'#f9fad2'}>
                HOME
            </Heading>
        </Center>
    </VStack>
  );
}