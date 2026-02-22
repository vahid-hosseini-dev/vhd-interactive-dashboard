import { GameCardProps } from "@/src/types/games.type";
import { Button, Card, Image } from "@chakra-ui/react";

export const GameCard = ({ image, alt, title, description }: GameCardProps) => {
  return (
    <Card.Root maxW="sm" overflow="hidden">
      <Image src={image} alt={alt} />
      <Card.Body gap="2">
        <Card.Title>{title}</Card.Title>
        <Card.Description>{description}</Card.Description>
      </Card.Body>
      <Card.Footer gap="2">
        <Button variant="solid">Buy now</Button>
        <Button variant="ghost">Add to cart</Button>
      </Card.Footer>
    </Card.Root>
  );
};
