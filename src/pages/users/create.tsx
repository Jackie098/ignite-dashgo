import { Input } from "@/components/Form/Input";
import { Header } from "@/components/Header";
import { Sidebar } from "@/components/Sidebar";
import {
  Box,
  Button,
  Divider,
  Flex,
  HStack,
  Heading,
  SimpleGrid,
  VStack,
} from "@chakra-ui/react";

export default function CreateUser() {
  return (
    <Box>
      <Header />

      <Flex m="100%" my={6} maxWidth={1480} mx="auto" px="6">
        <Sidebar />

        <Box flex={1} borderRadius={8} bg={"gray.800"} p={["6", "8"]}>
          <Heading size={"lg"} fontWeight={"normal"}>
            Criar usuário
          </Heading>

          <Divider my={6} borderColor="gray.700" />

          <VStack spacing={8}>
            <SimpleGrid minChildWidth={"240px"} spacing={["6", "8"]} w="100%">
              <Input name="name" label="Full name" />
              <Input name="email" type="email" label="Email" />
            </SimpleGrid>

            <SimpleGrid minChildWidth={"240px"} spacing={["6", "8"]} w="100%">
              <Input name="password" type="password" label="password" />
              <Input
                name="password_confirmation"
                type="password"
                label="Password Confirmation"
              />
            </SimpleGrid>
          </VStack>

          <Flex mt={8} justify={"flex-end"}>
            <HStack spacing={4}>
              <Button colorScheme="whiteAlpha">Cancel</Button>
              <Button colorScheme="pink">Save</Button>
            </HStack>
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
}
