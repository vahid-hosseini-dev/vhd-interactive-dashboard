export type Product = {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  category: string;
  images: string[];
  thumbnail: string;
  rating: number;
  stock: number;
};

export type ProductCardProps = {
  image?: string;
  alt: string;
  title: string;
  description: string;
  price: number;
};