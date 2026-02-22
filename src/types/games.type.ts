export type Games = {
  id: string;
  name: string;
  background_image: string;
  released: string;
  rating: number;
  description_raw: string;
};

export type GameCardProps = {
  id: string;
  image?: string;
  alt: string;
  title: string;
  description?: string;
};

