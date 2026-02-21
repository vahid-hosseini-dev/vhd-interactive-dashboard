"use client";
import { Container, Grid, Spinner, Center, Text } from "@chakra-ui/react";
import { UsersCard } from "@/src/components/ui";
import { useUsers } from "@/src/hooks/useUsers";

export function UsersFeature() {
  const { users, loading, error } = useUsers();

  if (loading)
    return (
      <Center h="300px">
        <Spinner />
      </Center>
    );

  if (error)
    return (
      <Center h="300px">
        <Text color="red.500">{error}</Text>
      </Center>
    );

  return (
    <Container p="5">
      <Grid
        templateColumns={{
          base: "1fr",
          lg: "repeat(2, 1fr)",
        }}
        gap={6}
      >
        {users.map((user) => {
          const {
            id,
            firstName,
            lastName,
            age,
            gender,
            email,
            username,
            password,
            birthDate,
          } = user;

          return (
            <UsersCard
              key={id}
              firstName={firstName}
              lastName={lastName}
              age={age}
              gender={gender}
              email={email}
              username={username}
              password={password}
              birthDate={birthDate}
            />
          );
        })}
      </Grid>
    </Container>
  );
}
