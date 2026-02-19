import { ProductCardProps } from "@/src/types/products.types";
import { Button, Card, Image, Text } from "@chakra-ui/react";

export const ProductCard = ({
  image,
  alt,
  title,
  description,
  price,
}: ProductCardProps) => {
  return (
    <Card.Root maxW="sm" overflow="hidden">
      <Image src={image} alt={alt} />
      <Card.Body gap="2">
        <Card.Title>{title}</Card.Title>
        <Card.Description>{description}</Card.Description>
        <Text textStyle="2xl" fontWeight="medium" letterSpacing="tight" mt="2">
          {price} $
        </Text>
      </Card.Body>
      <Card.Footer gap="2">
        <Button variant="solid">Buy now</Button>
        <Button variant="ghost">Add to cart</Button>
      </Card.Footer>
    </Card.Root>
  );
};
