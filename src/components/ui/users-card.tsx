import { Users } from "@/src/types/users.types";
import { Avatar, Card, HStack, Stack, Strong, Text } from "@chakra-ui/react";

export const UsersCard = ({
  firstName,
  lastName,
  age,
  gender,
  email,
  username,
  password,
  birthDate,
}: Users) => {
  return (
    <Card.Root width="320px">
      <Card.Body>
        <HStack mb="6" gap="3">
          <Avatar.Root>
            <Avatar.Image
              src={
                "https://images.unsplash.com/photo-1511806754518-53bada35f930"
              }
            />
            <Avatar.Fallback name={`${firstName} ${lastName}`} />
          </Avatar.Root>
          <Stack gap="0">
            <Text fontWeight="semibold" textStyle="sm">
              {firstName} {lastName}
            </Text>
            <Text color="fg.muted" textStyle="sm">
              @{username}
            </Text>
          </Stack>
        </HStack>
        <Card.Description>
          <Strong color="fg">age: {age}</Strong> <br />
          <Strong color="fg">email: {email}</Strong>
          <br />
          <Strong color="fg">gender: {gender}</Strong>
          <br />
          <Strong color="fg">birthDate: {birthDate}</Strong>
          <br />
          <Strong color="fg">username: {username}</Strong>
          <br />
          <Strong color="fg">password: {password}</Strong>
          <br />
        </Card.Description>
      </Card.Body>
      <Card.Footer></Card.Footer>
    </Card.Root>
  );
};
