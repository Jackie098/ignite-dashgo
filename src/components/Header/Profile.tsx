import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

export function Profile() {
  return (
    <Flex align={"center"}>
      <Box mr="4" textAlign={"right"}>
        <Text>Carlos Augusto</Text>
        <Text color={"gray.300"} fontSize={"small"}>
          carlos.aug.developer@gmail.com
        </Text>
      </Box>

      <Avatar
        size="md"
        name="Carlos Augusto"
        src="https://github.com/Jackie098.png"
      />
    </Flex>
  );
}
