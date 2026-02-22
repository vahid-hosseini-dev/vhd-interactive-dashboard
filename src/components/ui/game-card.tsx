import { GameCardProps } from "@/src/types/games.type";
import { Button, Card, Image } from "@chakra-ui/react";
import Link from "next/link";

export const GameCard = ({id, image, alt, title, description }: GameCardProps) => {
  return (
    <Link href={`/games/${id}`}>
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
    </Link>
  );
};
