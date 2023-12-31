import { Header } from "@/components/Header";
import { Pagination } from "@/components/Pagination";
import { Sidebar } from "@/components/Sidebar";
import { useUsers } from "@/services/hooks/useUsers";
import {
  Box,
  Button,
  Checkbox,
  Flex,
  Heading,
  Icon,
  Spinner,
  Table,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  useBreakpointValue,
} from "@chakra-ui/react";
import Link from "next/link";
import { RiAddLine, RiPencilLine } from "react-icons/ri";

export default function UserList() {
  const { data, isLoading, error, isFetching, refetch } = useUsers();

  // console.log({ query });

  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });

  if (!data) {
    return <Spinner size="sm" color="gray.500" ml="4" />;
  }

  return (
    <Box>
      <Header />

      <Flex m="100%" my={6} maxWidth={1480} mx="auto" px="6">
        <Sidebar />

        <Box flex={1} borderRadius={8} bg={"gray.800"} p={8}>
          <Flex mb={8} justify={"space-between"} align={"center"}>
            <Heading size={"lg"} fontWeight={"normal"}>
              Users
              {!isLoading && isFetching && (
                <Spinner size="sm" color="gray.500" ml="4" />
              )}
            </Heading>

            <Flex>
              <Button
                onClick={() => refetch()}
                size={"sm"}
                fontSize={"small"}
                colorScheme="purple"
                mr={4}
                // leftIcon={<Icon as={RiAddLine} fontSize={20} />}
              >
                Update data
              </Button>
              <Link href={"/users/create"} passHref>
                <Button
                  size={"sm"}
                  fontSize={"small"}
                  colorScheme="pink"
                  leftIcon={<Icon as={RiAddLine} fontSize={20} />}
                  // suppressHydrationWarning
                >
                  Create new
                </Button>
              </Link>
            </Flex>
          </Flex>

          {isLoading ? (
            <Flex justify={"center"}>
              <Spinner />
            </Flex>
          ) : error ? (
            <Flex justify={"center"}>
              <Text>Falha ao obter dados dos usuários</Text>
            </Flex>
          ) : (
            <>
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
                  {data.map((user, index) => {
                    return (
                      <Tr key={user.id} px={["4", "4", "6"]}>
                        <Td px={["4", "4", "6"]}>
                          <Checkbox colorScheme="pink" />
                        </Td>
                        <Td>
                          <Box>
                            <Text fontWeight="bold">{user.name}</Text>
                            <Text fontSize="small" color={"gray.300"}>
                              {user.email}
                            </Text>
                          </Box>
                        </Td>
                        {isWideVersion && <Td>{user.createdAt}</Td>}
                        <Td>
                          {" "}
                          {isWideVersion && (
                            <Button
                              as="a"
                              size={"sm"}
                              fontSize={"small"}
                              colorScheme="purple"
                              leftIcon={
                                <Icon as={RiPencilLine} fontSize={16} />
                              }
                            >
                              Edit
                            </Button>
                          )}
                        </Td>
                      </Tr>
                    );
                  })}
                </Tbody>
              </Table>

              <Pagination />
            </>
          )}
        </Box>
      </Flex>
    </Box>
  );
}
