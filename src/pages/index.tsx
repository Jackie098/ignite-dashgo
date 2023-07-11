import { Input } from "@/components/Form/Input";
import { Button, Flex, FormControl, FormLabel, Stack } from "@chakra-ui/react";
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

type SignInFormData = {
  email: string;
  password: string;
};

const signInFormSchema = yup.object().shape({
  email: yup
    .string()
    .required("E-mail must be provided")
    .email("Invalid e-mail"),
  password: yup.string().required("Password must be provided"),
});

export default function SignIn() {
  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(signInFormSchema),
  });

  const errors = formState.errors;

  // console.log(errors);

  const handleSignIn: SubmitHandler<SignInFormData> = async (values) => {
    await new Promise((resolve) => setTimeout(resolve, 2000));

    console.log(values);
  };

  return (
    <Flex w={"100vw"} h={"100vh"} align={"center"} justify={"center"}>
      <Flex
        as="form"
        width={"100%"}
        maxWidth={360}
        bg={"gray.800"}
        p={8}
        borderRadius={8}
        flexDir={"column"}
        // @ts-ignore
        onSubmit={handleSubmit(handleSignIn)}
      >
        <Stack spacing={4}>
          <Input
            // name="email"
            type="email"
            label="E-mail"
            error={errors?.email}
            {...register("email")}
          />

          <Input
            // name="password"
            type="password"
            label="Password"
            error={errors?.password}
            {...register("password")}
          />
        </Stack>
        <Button
          type="submit"
          mt={10}
          colorScheme="pink"
          size={"lg"}
          isLoading={formState.isSubmitting}
        >
          Entrar
        </Button>
      </Flex>
    </Flex>
  );
}
