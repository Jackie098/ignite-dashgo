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
import Link from "next/link";
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

type CreateUserFormData = {
  name: string;
  email: string;
  password: string;
  password_confirmation?: string;
};

const CreateUserFormSchema = yup.object().shape({
  name: yup.string().required("Name must be provided"),
  email: yup
    .string()
    .required("E-mail must be provided")
    .email("Invalid e-mail"),
  password: yup
    .string()
    .required("Password must be provided")
    .min(6, "At least 6 characters"),
  password_confirmation: yup
    .string()
    .oneOf([undefined, yup.ref("password")], "The password must be match"),
});

export default function CreateUser() {
  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(CreateUserFormSchema),
  });

  const errors = formState.errors;

  const handleCreateUser: SubmitHandler<CreateUserFormData> = async (
    values
  ) => {
    await new Promise((resolve) => setTimeout(resolve, 2000));

    console.log(values);
  };

  return (
    <Box>
      <Header />

      <Flex m="100%" my={6} maxWidth={1480} mx="auto" px="6">
        <Sidebar />

        <Box
          as="form"
          flex={1}
          borderRadius={8}
          bg={"gray.800"}
          p={["6", "8"]}
          onSubmit={handleSubmit(handleCreateUser)}
        >
          <Heading size={"lg"} fontWeight={"normal"}>
            Criar usuário
          </Heading>

          <Divider my={6} borderColor="gray.700" />

          <VStack spacing={8}>
            <SimpleGrid minChildWidth={"240px"} spacing={["6", "8"]} w="100%">
              <Input
                label="Full name"
                error={errors.name}
                {...register("name")}
              />
              <Input
                type="email"
                label="Email"
                error={errors.email}
                {...register("email")}
              />
            </SimpleGrid>

            <SimpleGrid minChildWidth={"240px"} spacing={["6", "8"]} w="100%">
              <Input
                type="password"
                label="password"
                error={errors.password}
                {...register("password")}
              />
              <Input
                type="password"
                label="Password Confirmation"
                error={errors.password_confirmation}
                {...register("password_confirmation")}
              />
            </SimpleGrid>
          </VStack>

          <Flex mt={8} justify={"flex-end"}>
            <HStack spacing={4}>
              <Link href={"/users"} passHref>
                <Button as="a" colorScheme="whiteAlpha">
                  Cancel
                </Button>
              </Link>

              <Button
                type="submit"
                colorScheme="pink"
                isLoading={formState.isSubmitting}
              >
                Save
              </Button>
            </HStack>
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
}
