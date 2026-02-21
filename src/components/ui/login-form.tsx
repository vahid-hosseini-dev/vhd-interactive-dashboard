"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema, LoginFormInputs } from "@/src/schemas/login-schema";
import {
  Button,
  Card,
  Field,
  Input,
  InputGroup,
  Stack,
  Text,
} from "@chakra-ui/react";
import { LuKeyRound, LuUserRound } from "react-icons/lu";
import { toast } from "react-hot-toast";
import { useRouter } from "next/navigation";

export const LoginForm = () => {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormInputs>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = async (data: LoginFormInputs) => {
    try {
      const res = await fetch("/api/login", {
        method: "POST",
        credentials: "include",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await res.json();

      if (!res.ok) {
        toast.error(result.message || "Login failed");
        return;
      }

      toast.success("Login successful!");

      router.replace("/dashboard");

      router.refresh();
    } catch (err: unknown) {
      if (err instanceof Error) toast.error(err.message);
      else toast.error("Login failed. Please try again.");
    }
  };

  return (
    <Card.Root maxW="sm" colorPalette="blue" size="md" h="sm" minW="md">
      <Card.Header>
        <Card.Title>Login</Card.Title>
        <Card.Description>Fill in the form below to login</Card.Description>
      </Card.Header>
      <Card.Body>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Stack gap="4" w="full">
            <Field.Root>
              <Field.Label>User Name</Field.Label>
              <InputGroup startElement={<LuUserRound />}>
                <Input
                  placeholder="Enter your username"
                  {...register("username")}
                />
              </InputGroup>
              {errors.username && (
                <Text color="red.500">{errors.username.message}</Text>
              )}
            </Field.Root>

            <Field.Root>
              <Field.Label>
                Password <Field.RequiredIndicator />
              </Field.Label>
              <InputGroup startElement={<LuKeyRound />}>
                <Input
                  placeholder="Enter your password"
                  type="password"
                  {...register("password")}
                />
              </InputGroup>
              {errors.password && (
                <Text color="red.500">{errors.password.message}</Text>
              )}
            </Field.Root>

            <Button type="submit" variant="solid" loading={isSubmitting}>
              Login
            </Button>
          </Stack>
        </form>
      </Card.Body>
    </Card.Root>
  );
};
