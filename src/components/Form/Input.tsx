import {
  Input as ChakraInput,
  InputProps as ChakraInputProps,
  FormControl,
  FormErrorMessage,
  FormLabel,
} from "@chakra-ui/react";
import { ForwardRefRenderFunction, forwardRef } from "react";
import { FieldError, FieldErrorsImpl, Merge } from "react-hook-form";

interface InputProps extends ChakraInputProps {
  name: string;
  label?: string;
  error?: FieldError | Merge<FieldError, FieldErrorsImpl<any>>;
}

const InputBase: ForwardRefRenderFunction<HTMLInputElement, InputProps> = (
  { name, label, error = undefined, ...rest }: InputProps,
  ref
) => {
  return (
    <FormControl isInvalid={!!error}>
      {!!label && <FormLabel htmlFor={name}>{label}</FormLabel>}

      <ChakraInput
        id={name}
        name={name}
        type={name}
        focusBorderColor="pink.500"
        bgColor="gray.900"
        variant={"filled"}
        _hover={{
          bgColor: "gray.900",
        }}
        size={"lg"}
        ref={ref}
        {...rest}
      />

      {!!error && (
        <FormErrorMessage>{error.message?.toString()}</FormErrorMessage>
      )}
    </FormControl>
  );
};

export const Input = forwardRef(InputBase);
