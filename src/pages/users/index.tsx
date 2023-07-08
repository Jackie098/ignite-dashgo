import { Header } from "@/components/Header";
import { Sidebar } from "@/components/Sidebar";
import {
  Box,
  Button,
  Checkbox,
  Flex,
  Heading,
  Icon,
  Table,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  Text,
} from "@chakra-ui/react";
import { RiAddLine, RiPencilLine } from "react-icons/ri";

export default function UserList() {
  return (
    <Box>
      <Header />

      <Flex m="100%" my={6} maxWidth={1480} mx="auto" px="6">
        <Sidebar />

        <Box flex={1} borderRadius={8} bg={"gray.800"} p={8}>
          <Flex mb={8} justify={"space-between"} align={"center"}>
            <Heading size={"lg"} fontWeight={"normal"}>
              Users
            </Heading>

            <Button
              as="a"
              size={"sm"}
              fontSize={"small"}
              colorScheme="pink"
              leftIcon={<Icon as={RiAddLine} fontSize={20} />}
            >
              Create new
            </Button>
          </Flex>

          <Table colorScheme="whiteAlpha">
            <Thead>
              <Tr>
                <Th px={6} color={"gray.300"} width={8}>
                  <Checkbox colorScheme="pink" />
                </Th>

                <Th>User</Th>
                <Th>Register Date</Th>
                <Th w={8}></Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr px={6}>
                <Td>
                  <Checkbox colorScheme="pink" />
                </Td>
                <Td>
                  <Box>
                    <Text fontWeight="bold">Carlos Augusto</Text>
                    <Text fontSize="small" color={"gray.300"}>
                      carlos.aug.developer@gmail.com
                    </Text>
                  </Box>
                </Td>
                <Td>04 de Abril, 2023</Td>
                <Td>
                  {" "}
                  <Button
                    as="a"
                    size={"sm"}
                    fontSize={"small"}
                    colorScheme="purple"
                    leftIcon={<Icon as={RiPencilLine} fontSize={16} />}
                  >
                    Edit
                  </Button>
                </Td>
              </Tr>
            </Tbody>
          </Table>
        </Box>
      </Flex>
    </Box>
  );
}
