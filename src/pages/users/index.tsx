import { Header } from "@/components/Header";
import { Pagination } from "@/components/Pagination";
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
  useBreakpointValue,
} from "@chakra-ui/react";
import Link from "next/link";
import { useEffect } from "react";
import { RiAddLine, RiPencilLine } from "react-icons/ri";

export default function UserList() {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });

  useEffect(() => {
    fetch("http://localhost:3000/api/users")
      .then((response) => response.json())
      .then((data) => console.log(data));
  }, []);

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

            <Link href={"/users/create"} passHref>
              <Button
                size={"sm"}
                fontSize={"small"}
                colorScheme="pink"
                leftIcon={<Icon as={RiAddLine} fontSize={20} />}
                suppressHydrationWarning
              >
                Create new
              </Button>
            </Link>
          </Flex>

          <Table colorScheme="whiteAlpha">
            <Thead>
              <Tr>
                <Th px={["4", "4", "6"]} color={"gray.300"} width={8}>
                  <Checkbox colorScheme="pink" />
                </Th>

                <Th>User</Th>
                {isWideVersion && <Th>Register Date</Th>}
                <Th w={8}></Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr px={["4", "4", "6"]}>
                <Td px={["4", "4", "6"]}>
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
                {isWideVersion && <Td>04 de Abril, 2023</Td>}
                <Td>
                  {" "}
                  {isWideVersion && (
                    <Button
                      as="a"
                      size={"sm"}
                      fontSize={"small"}
                      colorScheme="purple"
                      leftIcon={<Icon as={RiPencilLine} fontSize={16} />}
                    >
                      Edit
                    </Button>
                  )}
                </Td>
              </Tr>
            </Tbody>
          </Table>

          <Pagination />
        </Box>
      </Flex>
    </Box>
  );
}
