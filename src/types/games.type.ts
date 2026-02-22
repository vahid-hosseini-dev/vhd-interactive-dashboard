export type Games = {
  id: number;
  name: string;
  background_image: string;
  released: string;
  rating: number;
};

export type GameCardProps = {
  image?: string;
  alt: string;
  title: string;
  description: string;
  price?: number;
};
